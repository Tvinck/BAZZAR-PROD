const { Client } = require('ssh2');
const conn = new Client();

conn.on('ready', () => {
  console.log('SSH Connection successful.');
  
  // Run the test_xui_endpoints.js script on the VPS
  // Note: we can upload the local one or just run what is on VPS.
  // Let's first check if /opt/bazzar-sync/test_xui_endpoints.js exists or if we should run a direct command.
  const cmd = `
    echo "=== /root/veil-vpn-bot/tg-bot ==="
    ls -la /root/veil-vpn-bot/tg-bot
    echo ""
    echo "=== /opt/bazzar-sync ==="
    ls -la /opt/bazzar-sync
  `;
  
  conn.exec(cmd, (err, stream) => {
    if (err) {
      console.error('Exec error:', err);
      conn.end();
      return;
    }
    let out = '';
    stream.on('close', () => {
      console.log('Test Endpoints Output:');
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
