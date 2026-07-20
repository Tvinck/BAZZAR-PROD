import { rateLimit } from '../lib/rate-limit.js';

const limiter = rateLimit({ windowMs: 60_000, max: 10 });

export default function handler(req, res) {
  // Rate limit
  const { allowed, retryAfter } = limiter.check(req);
  if (!allowed) {
    res.setHeader('Retry-After', Math.ceil(retryAfter / 1000));
    return res.status(429).send('Too Many Requests');
  }

  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  const ownerUdid = req.query?.owner;
  if (!ownerUdid || typeof ownerUdid !== 'string' || ownerUdid.length < 10) {
    return res.status(400).send('Missing or invalid owner parameter');
  }

  const host = req.headers.host || 'localhost:5174';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  
  // Points to the receive-device endpoint with owner context
  const receiveUrl = `${protocol}://${host}/api/udid/receive-device?owner=${encodeURIComponent(ownerUdid)}`;

  const mobileConfig = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <dict>
        <key>URL</key>
        <string>${receiveUrl}</string>
        <key>DeviceAttributes</key>
        <array>
            <string>UDID</string>
            <string>IMEI</string>
            <string>ICCID</string>
            <string>VERSION</string>
            <string>PRODUCT</string>
        </array>
    </dict>
    <key>PayloadOrganization</key>
    <string>Bazzar Market</string>
    <key>PayloadDisplayName</key>
    <string>Добавление устройства в Bazzar Market</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
    <key>PayloadUUID</key>
    <string>A1B2C3D4-5678-9ABC-DEF0-112233445566</string>
    <key>PayloadIdentifier</key>
    <string>com.bazzar.market.add-device</string>
    <key>PayloadDescription</key>
    <string>Установите этот профиль, чтобы отправить UDID вашего устройства в личный кабинет пользователя Bazzar Market.</string>
    <key>PayloadType</key>
    <string>Profile Service</string>
</dict>
</plist>`;

  res.setHeader('Content-Type', 'application/x-apple-aspen-config');
  res.setHeader('Content-Disposition', 'attachment; filename="bazzar-add-device.mobileconfig"');
  res.status(200).send(mobileConfig);
}
