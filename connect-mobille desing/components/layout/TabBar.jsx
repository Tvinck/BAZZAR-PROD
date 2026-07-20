import React from 'react';
import { Icon } from '../core/Icon.jsx';

// Bottom tab bar — 4 tabs, blurred dark background, blue active state.
// items: [{ key, label, icon, badge? }]
export function TabBar({ items, active, onChange }) {
  return (
    <nav
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'var(--tabbar-h)',
        background: 'var(--tabbar-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '0.5px solid var(--hair-strong)',
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: 10,
        zIndex: 50,
      }}
    >
      {items.map(function (it) {
        const isActive = it.key === active;
        return (
          <button
            key={it.key}
            onClick={function () { if (onChange) onChange(it.key); }}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              color: isActive ? 'var(--nav-active)' : 'var(--nav-inactive)',
              position: 'relative',
              padding: 0,
            }}
          >
            <span style={{ position: 'relative', display: 'inline-flex' }}>
              <Icon name={it.icon} size={26} strokeWidth={isActive ? 2.2 : 1.8} />
              {it.badge ? (
                <span style={{ position: 'absolute', top: -4, right: -8, background: 'var(--red)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '1px 5px', borderRadius: 'var(--radius-pill)', border: '2px solid var(--bg)' }}>
                  {it.badge}
                </span>
              ) : null}
            </span>
            <span style={{ fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-medium)', fontFamily: 'var(--font-sans)' }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
