const { Client } = require('ssh2');
const conn = new Client();

conn.on('ready', () => {
  console.log('SSH Connection successful.');
  
  const cmd = `
    echo "=== BAZZAR-SYNC LOGS ==="
    pm2 logs bazzar-sync --no-color --lines 40 --raw
    echo ""
    echo "=== VEIL-BOT LOGS ==="
    pm2 logs veil-bot --no-color --lines 40 --raw
  `;
  
  conn.exec(cmd, (err, stream) => {
    if (err) {
      console.error('Exec error:', err);
      conn.end();
      return;
    }
    let out = '';
    stream.on('close', () => {
      console.log('PM2 Logs Output:');
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
