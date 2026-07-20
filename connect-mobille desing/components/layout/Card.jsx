import React from 'react';

// Primary surface card — large radius, generous padding, no shadow.
export function Card({ children, inset = false, style, onClick }) {
  return (
    <div
      onClick={onClick}
      style={Object.assign(
        {
          background: inset ? 'var(--surface-2)' : 'var(--surface)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--card-pad)',
          cursor: onClick ? 'pointer' : undefined,
        },
        style
      )}
    >
      {children}
    </div>
  );
}
