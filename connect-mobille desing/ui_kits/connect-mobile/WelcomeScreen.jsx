import React from 'react';
import { Button } from '../../components/core/Button.jsx';
import { Icon } from '../../components/core/Icon.jsx';

// Greeting shown right after login, before entering the app.
export function WelcomeScreen({ name, onEnter }) {
  const label = name && name.indexOf('@') > -1 ? name.split('@')[0] : (name || 'коллега');
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 32px', color: 'var(--text)', gap: 20 }}>
      <span style={{ width: 96, height: 96, borderRadius: 28, background: 'var(--promo-grad)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="hand-heart" size={46} color="#fff" strokeWidth={1.6} />
      </span>
      <div>
        <div style={{ fontSize: 28, fontWeight: 'var(--fw-bold)', marginBottom: 8 }}>Добро пожаловать!</div>
        <div style={{ fontSize: 'var(--fs-body)', color: 'var(--text-2)', lineHeight: 'var(--lh-body)' }}>
          Рады видеть, <strong style={{ color: 'var(--text)' }}>{label}</strong>. Новости, чаты и заказы по проектам BAZZAR SERTS и Veil VPN — в одном месте.
        </div>
      </div>
      <div style={{ width: '100%', marginTop: 12 }}>
        <Button variant="primary" block onClick={onEnter}>Войти в приложение</Button>
      </div>
    </div>
  );
}
