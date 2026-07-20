import React, { useState } from 'react';

// Connect Mobile buttons. Variants observed in product photos:
// primary  — yellow CTA fill ("Начать разметку")
// tonal    — dark inner fill with blue text ("Начать работу")
// plain    — blue text on transparent ("Выйти из приложения" body)
// blue     — solid accent fill (chat send, confirmations)
export function Button({ variant = 'primary', children, icon, block = false, disabled = false, onClick, style }) {
  const [pressed, setPressed] = useState(false);
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '15px 24px',
    border: 'none',
    borderRadius: 'var(--radius)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--fs-headline)',
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 'var(--lh-tight)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.4 : pressed ? 0.75 : 1,
    transform: pressed ? 'scale(0.98)' : 'none',
    transition: 'opacity 0.15s, transform 0.15s',
  };
  const variants = {
    primary: { background: 'var(--yellow)', color: 'var(--on-yellow)' },
    tonal: { background: 'var(--surface-2)', color: 'var(--accent)' },
    plain: { background: 'transparent', color: 'var(--accent)', padding: '15px 12px' },
    blue: { background: 'var(--accent)', color: '#fff' },
  };
  return (
    <button
      style={Object.assign({}, base, variants[variant] || variants.primary, style)}
      disabled={disabled}
      onClick={onClick}
      onPointerDown={function () { setPressed(true); }}
      onPointerUp={function () { setPressed(false); }}
      onPointerLeave={function () { setPressed(false); }}
    >
      {icon}
      {children}
    </button>
  );
}
