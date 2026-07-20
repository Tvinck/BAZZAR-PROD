import React, { useState } from 'react';
import { Field } from '../../components/core/Field.jsx';
import { Button } from '../../components/core/Button.jsx';

export function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Введите email и пароль');
      return;
    }
    setError('');
    onLogin(email.trim());
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 28px', color: 'var(--text)' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 1 }}>
          CO<span style={{ color: 'var(--accent)' }}>NN</span>ECT
        </div>
        <div style={{ fontSize: 'var(--fs-subhead)', color: 'var(--text-2)', marginTop: 8 }}>Приложение для сотрудников</div>
      </div>

      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <label style={{ display: 'block', fontSize: 'var(--fs-footnote)', color: 'var(--text-2)', fontWeight: 'var(--fw-semibold)', marginBottom: 6, paddingLeft: 4 }}>Email</label>
          <Field type="email" placeholder="you@connect.ru" value={email} onChange={function (e) { setEmail(e.target.value); }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 'var(--fs-footnote)', color: 'var(--text-2)', fontWeight: 'var(--fw-semibold)', marginBottom: 6, paddingLeft: 4 }}>Пароль</label>
          <Field type="password" placeholder="••••••••" value={password} onChange={function (e) { setPassword(e.target.value); }} />
        </div>
        {error ? (
          <div style={{ color: 'var(--red)', fontSize: 'var(--fs-footnote)', textAlign: 'center', background: 'var(--red-dim)', padding: '10px', borderRadius: 'var(--radius)' }}>{error}</div>
        ) : null}
        <Button variant="primary" block style={{ marginTop: 8 }}>Войти</Button>
        <button type="button" style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: 'var(--fs-subhead)', fontWeight: 'var(--fw-medium)', cursor: 'pointer', padding: 10, fontFamily: 'var(--font-sans)' }}>
          Не помню пароль
        </button>
      </form>
    </div>
  );
}
