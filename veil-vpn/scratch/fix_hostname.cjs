// Patch os.hostname() to return ASCII-safe name before Vercel CLI reads it
const os = require('os');
const origHostname = os.hostname;
os.hostname = () => 'PC';
