import React from 'react';

// Status badge — small rounded label, dim tinted fill + colored text.
const badgeTones = {
  neutral: { background: 'var(--surface-2)', color: 'var(--text-2)' },
  blue: { background: 'var(--accent-dim)', color: 'var(--accent)' },
  green: { background: 'var(--green-dim)', color: '#4cd964' },
  red: { background: 'var(--red-dim)', color: 'var(--red)' },
  amber: { background: 'var(--amber-dim)', color: 'var(--amber)' },
  violet: { background: 'var(--violet-dim)', color: 'var(--violet)' },
};

export function Badge({ tone = 'neutral', children, style }) {
  return (
    <span
      style={Object.assign(
        {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          padding: '3px 8px',
          borderRadius: 'var(--radius-sm)',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--fs-footnote)',
          fontWeight: 'var(--fw-semibold)',
        },
        badgeTones[tone] || badgeTones.neutral,
        style
      )}
    >
      {children}
    </span>
  );
}
