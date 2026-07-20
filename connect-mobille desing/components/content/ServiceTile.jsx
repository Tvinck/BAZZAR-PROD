import React from 'react';
import { IconTile } from './IconTile.jsx';

// Horizontal-scroll service tile ("Полезные сервисы" carousel).
export function ServiceTile({ icon, iconBg, iconColor, label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
        width: 132,
        flexShrink: 0,
        background: 'var(--surface-2)',
        border: 'none',
        borderRadius: 'var(--radius)',
        padding: 14,
        cursor: 'pointer',
        color: 'var(--text)',
        fontFamily: 'var(--font-sans)',
        textAlign: 'left',
      }}
    >
      <IconTile icon={icon} bg={iconBg} color={iconColor} size={48} radius={12} />
      <span style={{ fontSize: 'var(--fs-subhead)', fontWeight: 'var(--fw-regular)', lineHeight: 'var(--lh-tight)' }}>{label}</span>
    </button>
  );
}
