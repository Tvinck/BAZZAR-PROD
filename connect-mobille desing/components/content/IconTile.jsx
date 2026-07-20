import React from 'react';
import { Icon } from '../core/Icon.jsx';

// App-icon-style tile: rounded square with tinted fill + white/colored glyph.
// Used inside ListRow, ServiceTile, NotificationItem.
export function IconTile({ icon, color = 'var(--text-2)', bg = 'var(--surface-3)', size = 44, radius = 12, iconSize }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: bg,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Icon name={icon} size={iconSize || Math.round(size * 0.5)} color={color} strokeWidth={2} />
    </span>
  );
}
