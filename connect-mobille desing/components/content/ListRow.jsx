import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconTile } from './IconTile.jsx';

// List row — icon tile + title (+subtitle) + chevron. Services lists, help & support.
export function ListRow({ icon, iconBg, iconColor, title, subtitle, onClick, right, chevron = true }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
        background: 'none',
        border: 'none',
        padding: '10px 0',
        cursor: onClick ? 'pointer' : 'default',
        textAlign: 'left',
        color: 'var(--text)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {icon ? <IconTile icon={icon} bg={iconBg} color={iconColor} /> : null}
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-regular)', lineHeight: 'var(--lh-tight)' }}>{title}</span>
        {subtitle ? (
          <span style={{ display: 'block', fontSize: 'var(--fs-subhead)', color: 'var(--text-2)', marginTop: 3, lineHeight: 'var(--lh-body)' }}>{subtitle}</span>
        ) : null}
      </span>
      {right}
      {chevron ? <Icon name="chevron-right" size={18} color="var(--text-3)" strokeWidth={2.5} /> : null}
    </button>
  );
}
