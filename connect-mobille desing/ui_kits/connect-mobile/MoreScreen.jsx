import React, { useState } from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { Card } from '../../components/layout/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { ListRow } from '../../components/content/ListRow.jsx';

export function MoreScreen({ onOpenNotifications, theme, onThemeChange, onLogout }) {
  const [cacheCleared, setCacheCleared] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const themes = [['light', 'Светлая'], ['dark', 'Тёмная']];

  return (
    <div style={{ paddingBottom: 'calc(var(--tabbar-h) + 16px)' }}>
      <NavBar title="Ещё" large onBell={onOpenNotifications} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 var(--screen-pad)' }}>
        <Card style={{ padding: '20px 20px 20px' }}>
          <div style={{ fontSize: 'var(--fs-title)', fontWeight: 'var(--fw-bold)', marginBottom: 14 }}>Дополнительно</div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16 }}>
            <span style={{ fontSize: 'var(--fs-body)' }}>Тема</span>
            <div style={{ display: 'inline-flex', background: 'var(--surface-2)', borderRadius: 'var(--radius-pill)', padding: 3 }}>
              {themes.map(function (t) {
                const on = theme === t[0];
                return (
                  <button key={t[0]} onClick={function () { onThemeChange(t[0]); }}
                    style={{ border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', padding: '7px 16px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--fs-subhead)', fontWeight: 'var(--fw-semibold)', background: on ? 'var(--accent)' : 'transparent', color: on ? '#fff' : 'var(--text-2)', transition: 'background 0.15s' }}>
                    {t[1]}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ borderTop: '0.5px solid var(--hair)' }}>
            <ListRow
              title="Очистить кеш"
              subtitle={cacheCleared ? 'Кеш очищен' : 'Оптимизирует работу приложения'}
              chevron={false}
              onClick={function () { setCacheCleared(true); }}
            />
          </div>
          <div style={{ borderTop: '0.5px solid var(--hair)' }}>
            <ListRow title="Версия приложения 1.49.0 (32)" chevron={false} />
          </div>
        </Card>

        <Card style={{ padding: 8 }}>
          <Button variant="plain" block onClick={function () { setConfirmLogout(true); }}>Выйти из приложения</Button>
        </Card>
      </div>

      {confirmLogout ? (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'flex-end', zIndex: 200 }} onClick={function () { setConfirmLogout(false); }}>
          <div onClick={function (e) { e.stopPropagation(); }} style={{ width: '100%', padding: '0 8px calc(8px + env(safe-area-inset-bottom))' }}>
            <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '18px 16px 10px', marginBottom: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 'var(--fs-headline)', fontWeight: 'var(--fw-semibold)', marginBottom: 6 }}>Выйти из приложения?</div>
              <div style={{ fontSize: 'var(--fs-subhead)', color: 'var(--text-2)', marginBottom: 14 }}>Придётся войти заново по email и паролю.</div>
              <button onClick={onLogout} style={{ width: '100%', border: 'none', background: 'var(--red-dim)', color: 'var(--red)', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-headline)', fontWeight: 'var(--fw-semibold)', padding: '14px', borderRadius: 'var(--radius)', cursor: 'pointer' }}>
                Выйти
              </button>
            </div>
            <button onClick={function () { setConfirmLogout(false); }} style={{ width: '100%', border: 'none', background: 'var(--surface)', color: 'var(--accent)', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-headline)', fontWeight: 'var(--fw-bold)', padding: '15px', borderRadius: 'var(--radius-lg)', cursor: 'pointer' }}>
              Отмена
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
