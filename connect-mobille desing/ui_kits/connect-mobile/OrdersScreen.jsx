import React, { useState } from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { Card } from '../../components/layout/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { Icon } from '../../components/core/Icon.jsx';

// Grounded on repo src/pages/Orders.tsx: Apple Certs заявки, status cycle pending → in_progress → approved.
const initial = [
  { id: '1', udid: '00008110-001A2D3C1E88801E', plan: '1 год', platform: 'BAZZAR SERTS', source: 'AVITO', price: 1490, status: 'pending', at: '13:22' },
  { id: '2', udid: '00008030-000C4419023B802E', plan: '6 мес', platform: 'BAZZAR SERTS', source: 'GGSEL', price: 890, status: 'in_progress', at: '12:58' },
  { id: '3', udid: '00008120-0014premium9A01', plan: '1 год', platform: 'Veil VPN', source: 'САЙТ', price: 1990, status: 'in_progress', at: '12:40' },
  { id: '4', udid: '00008101-001E2233445566AA', plan: '3 мес', platform: 'BAZZAR SERTS', source: 'ПОЧТА', price: 590, status: 'approved', at: '11:05' },
];

const STATUS = {
  pending: { label: 'На рассмотрении', icon: 'clock', tone: 'neutral', btn: 'Взять в работу', btnVar: 'tonal' },
  in_progress: { label: 'В работе', icon: 'play-circle', tone: 'amber', btn: 'Завершить (выдать)', btnVar: 'primary' },
  approved: { label: 'Согласовано', icon: 'circle-check', tone: 'green', btn: 'Вернуть в новые', btnVar: 'tonal' },
};
const NEXT = { pending: 'in_progress', in_progress: 'approved', approved: 'pending' };

export function OrdersScreen({ onBack }) {
  const [orders, setOrders] = useState(initial);
  const [filter, setFilter] = useState('pending');
  const chips = [['pending', 'Новые'], ['in_progress', 'В работе'], ['all', 'Все']];

  function cycle(id) {
    setOrders(orders.map(function (o) { return o.id === id ? Object.assign({}, o, { status: NEXT[o.status] }) : o; }));
  }
  const visible = orders.filter(function (o) { return filter === 'all' || o.status === filter; });

  return (
    <div style={{ paddingBottom: 'calc(var(--tabbar-h) + 16px)' }}>
      <NavBar title="Заказы" subtitle="Apple Certs" onBack={onBack} />
      <div style={{ display: 'flex', gap: 8, padding: '4px var(--screen-pad) 12px', overflowX: 'auto' }}>
        {chips.map(function (ch) {
          const on = filter === ch[0];
          return (
            <button key={ch[0]} onClick={function () { setFilter(ch[0]); }}
              style={{ flexShrink: 0, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', padding: '8px 14px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--fs-subhead)', fontWeight: 'var(--fw-semibold)', background: on ? 'var(--accent)' : 'var(--surface-2)', color: on ? '#fff' : 'var(--text-2)' }}>
              {ch[1]}
            </button>
          );
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 var(--screen-pad)' }}>
        {visible.length === 0 ? (
          <p style={{ color: 'var(--text-3)', textAlign: 'center', marginTop: 40 }}>Заказов нет</p>
        ) : visible.map(function (o) {
          const st = STATUS[o.status];
          return (
            <Card key={o.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 'var(--fs-footnote)', fontWeight: 'var(--fw-semibold)', wordBreak: 'break-all', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Icon name="smartphone" size={15} color="var(--text-2)" style={{ flexShrink: 0 }} /> {o.udid}
                  </div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                    <Badge tone="neutral">{o.plan}</Badge>
                    <Badge tone={o.platform === 'Veil VPN' ? 'violet' : 'blue'}>{o.platform}</Badge>
                    <Badge tone="neutral">{o.source}</Badge>
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-headline)' }}>{o.price} ₽</div>
                  <div style={{ fontSize: 'var(--fs-footnote)', color: 'var(--text-3)' }}>{o.at}</div>
                </div>
              </div>
              <Button variant={st.btnVar} block icon={<Icon name={st.icon} size={16} />} onClick={function () { cycle(o.id); }}>{st.btn}</Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
