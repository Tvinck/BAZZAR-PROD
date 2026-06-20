const { Client } = require('ssh2');
const conn = new Client();

conn.on('ready', () => {
  console.log('SSH Connection successful.');
  
  const cmd = `
    cat << 'EOF' > /opt/bazzar-sync/check_xui_client.cjs
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
    
    // 2. Fetch inbounds
    const listRes = await api.get('panel/api/inbounds/list');
    const inbounds = listRes.data.obj || [];
    const inbound = inbounds[0];
    if (inbound) {
      const settings = typeof inbound.settings === 'string' ? JSON.parse(inbound.settings) : inbound.settings;
      console.log("FIRST CLIENT OBJECT IN DB:");
      console.log(JSON.stringify(settings.clients[0], null, 2));
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}
run();
EOF
    node /opt/bazzar-sync/check_xui_client.cjs
    rm -f /opt/bazzar-sync/check_xui_client.cjs
  `;
  
  conn.exec(cmd, (err, stream) => {
    if (err) {
      console.error('Exec error:', err);
      conn.end();
      return;
    }
    let out = '';
    stream.on('close', () => {
      console.log('Client object structure:');
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
