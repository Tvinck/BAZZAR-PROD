const { Client } = require('ssh2');
const conn = new Client();

conn.on('ready', () => {
  console.log('SSH Connection successful.');
  
  const cmd = `
    echo "=== BAZZAR-SYNC OUT LOGS ==="
    tail -n 45 ~/.pm2/logs/bazzar-sync-out.log 2>/dev/null || echo "No out log"
    echo ""
    echo "=== BAZZAR-SYNC ERROR LOGS ==="
    tail -n 45 ~/.pm2/logs/bazzar-sync-error.log 2>/dev/null || echo "No err log"
    echo ""
    echo "=== VEIL-BOT OUT LOGS ==="
    tail -n 45 ~/.pm2/logs/veil-bot-out.log 2>/dev/null || echo "No out log"
    echo ""
    echo "=== VEIL-BOT ERROR LOGS ==="
    tail -n 45 ~/.pm2/logs/veil-bot-error.log 2>/dev/null || echo "No err log"
  `;
  
  conn.exec(cmd, (err, stream) => {
    if (err) {
      console.error('Exec error:', err);
      conn.end();
      return;
    }
    let out = '';
    stream.on('close', () => {
      console.log('PM2 Direct Logs Output:');
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
