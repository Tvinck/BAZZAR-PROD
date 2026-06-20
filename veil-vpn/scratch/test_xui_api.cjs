const { Client } = require('ssh2');
const conn = new Client();

conn.on('ready', () => {
  console.log('SSH Connection successful.');
  
  // Write a script locally on the VPS and execute it
  const cmd = `
    cat << 'EOF' > /opt/bazzar-sync/test_xui_api.cjs
const axios = require('axios');
const https = require('https');

const XUI_URL = 'https://127.0.0.1:36537/qsgoOThSkfHypc0BSW';
const XUI_USER = 'Uvt5i4YUGZ';
const XUI_PASS = 'ffeYdCd65h';

const api = axios.create({
  baseURL: XUI_URL,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  withCredentials: true
});

async function run() {
  try {
    // 1. Login
    const homeRes = await api.get('');
    const html = homeRes.data;
    const csrfMatch = html.match(/name="csrf-token"\\s+content="([^"]+)"/) || html.match(/content="([^"]+)"\\s+name="csrf-token"/);
    const csrfToken = csrfMatch ? csrfMatch[1] : '';
    
    const rawCookies = homeRes.headers['set-cookie'] || [];
    const sessionCookie = rawCookies[0] ? rawCookies[0].split(';')[0] : '';
    
    const loginRes = await api.post('login', 
      new URLSearchParams({ username: XUI_USER, password: XUI_PASS }),
      {
        headers: {
          'X-Csrf-Token': csrfToken,
          'Cookie': sessionCookie
        }
      }
    );
    
    const authCookies = loginRes.headers['set-cookie'] || [];
    const authCookie = authCookies[0] ? authCookies[0].split(';')[0] : '';
    const cookie = authCookie || sessionCookie;
    
    api.defaults.headers.common['Cookie'] = cookie;
    api.defaults.headers.common['X-Csrf-Token'] = csrfToken;
    console.log("Logged in!");

    // 2. Fetch inbounds
    const listRes = await api.get('panel/api/inbounds/list');
    const inbounds = listRes.data.obj || [];
    console.log("Inbounds ports/Remarks:", inbounds.map(i => ({ id: i.id, port: i.port, remark: i.remark })));

    // 3. Test Add Client on Inbound 1 (TCP)
    // Try the current payload on panel/api/clients/add
    const clientUuid = '6a913ac8-b84f-4f2c-8771-e950ece22ce4'; // a valid format uuid
    const email = 'test_api_client';
    
    const payload1 = {
      client: {
        id: clientUuid,
        email: email,
        flow: 'xtls-rprx-vision',
        totalGB: 0,
        expiryTime: 0,
        limitIp: 3,
        enable: true,
      },
      inboundIds: [1],
    };
    
    console.log("\\n--- Testing panel/api/clients/add ---");
    try {
      const res1 = await api.post('panel/api/clients/add', payload1);
      console.log("Response:", res1.data);
    } catch (e) {
      console.log("Error:", e.message, e.response?.data);
    }

    // Try standard addClient endpoint
    console.log("\\n--- Testing panel/api/inbounds/addClient ---");
    const payload2 = {
      id: 1, // inbound id
      settings: JSON.stringify({
        clients: [{
          id: clientUuid,
          email: email + '_2',
          flow: 'xtls-rprx-vision',
          totalGB: 0,
          expiryTime: 0,
          limitIp: 3,
          enable: true
        }]
      })
    };
    try {
      const res2 = await api.post('panel/api/inbounds/addClient', payload2);
      console.log("Response:", res2.data);
    } catch (e) {
      console.log("Error:", e.message, e.response?.data);
    }
  } catch (err) {
    console.error("Global Error:", err);
  }
}
run();
EOF
    node /opt/bazzar-sync/test_xui_api.cjs
    rm -f /opt/bazzar-sync/test_xui_api.cjs
  `;
  
  conn.exec(cmd, (err, stream) => {
    if (err) {
      console.error('Exec error:', err);
      conn.end();
      return;
    }
    let out = '';
    stream.on('close', () => {
      console.log('X-UI API Test Output:');
      console.log(out);
      conn.end();
    }).on('data', (data) => {
      out += data;
    }).stderr.on('data', (data) => {
      out += data;
    });
  });
}).on('error', (err) => {
  console.error('SSH connection error:', err);
}).connect({
  host: '185.142.99.185',
  port: 22,
  username: 'root',
  password: 'iW@Bz+,dM42Ln+'
});
