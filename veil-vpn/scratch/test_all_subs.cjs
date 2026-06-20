const { Client } = require('ssh2');
const conn = new Client();

conn.on('ready', () => {
  console.log('SSH Connection successful.');
  
  const cmd = `
    cat << 'EOF' > /opt/bazzar-sync/test_all_subs.cjs
const axios = require('axios');
const https = require('https');
const { createClient } = require('@supabase/supabase-js');
const ws = require('ws');

const SUPABASE_URL = 'https://fhwrdhebhgywhvoeqpxj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZod3JkaGViaGd5d2h2b2VxcHhqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTkyOTQyNywiZXhwIjoyMDk1NTA1NDI3fQ.IIIIpJ7yXhuxp6i1N183ldsqRIHfltsQIPZA27sRMo4';
const XUI_URL = 'https://127.0.0.1:36537/qsgoOThSkfHypc0BSW';
const XUI_USER = 'Uvt5i4YUGZ';
const XUI_PASS = 'ffeYdCd65h';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
  realtime: { transport: ws }
});
const api = axios.create({
  baseURL: XUI_URL,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  withCredentials: true
});

function extractUuid(key) {
  if (!key) return null;
  if (key.startsWith('vless://')) {
    const match = key.match(/vless:\\/\\/([^@]+)@/);
    return match ? match[1] : null;
  }
  return key;
}

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
    api.defaults.headers.common['Cookie'] = authCookie || sessionCookie;
    api.defaults.headers.common['X-Csrf-Token'] = csrfToken;

    // 2. Fetch subs from Supabase
    const { data: subs, error } = await supabase
      .from('vpn_subscriptions')
      .select('id, subscription_key, token, traffic_used, traffic_limit, status, expires_at, telegram_username, ip_limit');
      
    if (error) {
      console.error("Supabase error:", error);
      return;
    }

    console.log("Testing " + subs.length + " subscriptions...");
    for (const sub of subs) {
      const email = sub.token;
      const clientUuid = extractUuid(sub.subscription_key);
      const expiryMs = sub.expires_at ? new Date(sub.expires_at).getTime() : 0;
      const totalBytes = sub.traffic_limit || 0;
      const tgId = (sub.telegram_username && !isNaN(sub.telegram_username)) ? parseInt(sub.telegram_username, 10) : 0;

      const payload = {
        client: {
          id: clientUuid,
          email: email,
          flow: 'xtls-rprx-vision',
          totalGB: totalBytes,
          expiryTime: expiryMs,
          limitIp: sub.ip_limit || 3,
          enable: sub.status === 'active',
          tgId: tgId,
        },
        inboundIds: [1],
      };

      console.log("\\n--- Testing Sub: " + email + " | UUID: " + clientUuid + " ---");
      console.log("Payload: " + JSON.stringify(payload, null, 2));
      try {
        const res = await api.post('panel/api/clients/add', payload);
        console.log("Response:", res.data);
      } catch (e) {
        console.log("Error:", e.message, e.response?.data);
      }
    }
  } catch (err) {
    console.error("Global Error:", err);
  }
}
run();
EOF
    node /opt/bazzar-sync/test_all_subs.cjs
    rm -f /opt/bazzar-sync/test_all_subs.cjs
  `;
  
  conn.exec(cmd, (err, stream) => {
    if (err) {
      console.error('Exec error:', err);
      conn.end();
      return;
    }
    let out = '';
    stream.on('close', () => {
      console.log('Test All Subs Output:');
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
