import React from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { Icon } from '../../components/core/Icon.jsx';

// Placeholder for services not yet built. Pass the section title.
export function ComingSoonScreen({ title, onBack }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <NavBar title={title} onBack={onBack} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 40px', gap: 18, marginTop: -60 }}>
        <span style={{ width: 84, height: 84, borderRadius: 24, background: 'var(--surface-2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="hammer" size={38} color="var(--accent)" strokeWidth={1.8} />
        </span>
        <div style={{ fontSize: 'var(--fs-title)', fontWeight: 'var(--fw-bold)' }}>Раздел в разработке</div>
        <div style={{ fontSize: 'var(--fs-subhead)', color: 'var(--text-2)', lineHeight: 'var(--lh-body)' }}>
          «{title}» скоро будет доступен. Мы работаем над этим — загляните чуть позже.
        </div>
      </div>
    </div>
  );
}
