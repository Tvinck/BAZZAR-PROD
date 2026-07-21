export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  const host = req.headers.host || 'localhost:5174';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const receiveUrl = `${protocol}://${host}/api/udid/receive`;

  // Apple OTA Profile Service enrollment profile.
  // CRITICAL: Do NOT request IMEI/ICCID — iOS 15+ rejects profiles that request these.
  // Only UDID, VERSION, PRODUCT, SERIAL are allowed on modern iOS.
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">',
    '<plist version="1.0">',
    '<dict>',
    '  <key>PayloadContent</key>',
    '  <dict>',
    '    <key>URL</key>',
    `    <string>${receiveUrl}</string>`,
    '    <key>DeviceAttributes</key>',
    '    <array>',
    '      <string>UDID</string>',
    '      <string>VERSION</string>',
    '      <string>PRODUCT</string>',
    '    </array>',
    '  </dict>',
    '  <key>PayloadOrganization</key>',
    '  <string>Bazzar Market</string>',
    '  <key>PayloadDisplayName</key>',
    '  <string>Bazzar Market</string>',
    '  <key>PayloadVersion</key>',
    '  <integer>1</integer>',
    '  <key>PayloadUUID</key>',
    '  <string>9F025114-16CA-4AE1-B0E3-F5E5170B1E6E</string>',
    '  <key>PayloadIdentifier</key>',
    '  <string>com.bazzar.market.profile-service</string>',
    '  <key>PayloadDescription</key>',
    '  <string>This temporary profile is used to find the UDID of your device. It can be removed after installation.</string>',
    '  <key>PayloadType</key>',
    '  <string>Profile Service</string>',
    '</dict>',
    '</plist>',
  ].join('\n');

  res.setHeader('Content-Type', 'application/x-apple-aspen-config');
  res.setHeader('Content-Disposition', 'attachment; filename="enroll.mobileconfig"');
  res.status(200).send(xml);
}
