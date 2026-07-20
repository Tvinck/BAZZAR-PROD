import React, { useState, useRef, useEffect } from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { Field } from '../../components/core/Field.jsx';
import { Icon } from '../../components/core/Icon.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { ChatBubble } from '../../components/content/ChatBubble.jsx';

// Source channels a client can arrive from.
const SOURCE = {
  email: { label: 'Почта', icon: 'mail', color: 'var(--accent)' },
  site: { label: 'Сайт', icon: 'globe', color: '#4cd964' },
  ggsel: { label: 'GGSel', icon: 'gamepad-2', color: 'var(--violet)' },
  avito: { label: 'Авито', icon: 'shopping-bag', color: 'var(--amber)' },
  other: { label: 'Прочее', icon: 'ellipsis', color: 'var(--text-2)' },
};

const initialClients = [
  {
    id: 'c1', name: 'Клиент #4821', platform: 'BAZZAR SERTS', source: 'avito', waitMin: 12,
    messages: [
      { id: 1, author: 'Клиент', time: '13:14', text: 'Здравствуйте! Оплатил сертификат, когда придёт?' },
      { id: 2, author: 'Клиент', time: '13:15', text: 'Заказ на Авито, номер 4821' },
    ],
  },
  {
    id: 'c2', name: 'Иван П.', platform: 'Veil VPN', source: 'email', waitMin: 4,
    messages: [
      { id: 1, author: 'Клиент', time: '13:22', text: 'Не могу подключиться к VPN на iPhone, помогите пожалуйста' },
    ],
  },
  {
    id: 'c3', name: 'Клиент #4830', platform: 'BAZZAR SERTS', source: 'ggsel', waitMin: 1,
    messages: [
      { id: 1, author: 'Клиент', time: '13:25', text: 'Купил через GGSel, жду ключ активации' },
    ],
  },
  {
    id: 'c4', name: 'shop_marina', platform: 'Veil VPN', source: 'site', waitMin: 27,
    messages: [
      { id: 1, author: 'Клиент', time: '12:59', text: 'Здравствуйте, продлите подписку на год?' },
      { id: 2, author: 'Клиент', time: '13:01', text: 'Оплату отправила через сайт' },
    ],
  },
  {
    id: 'c5', name: 'Аноним', platform: 'BAZZAR SERTS', source: 'other', waitMin: 0,
    messages: [
      { id: 1, author: 'Клиент', time: '13:26', text: 'Можно чек по заказу?' },
    ],
  },
];

function waitTone(min) {
  if (min >= 15) return 'red';
  if (min >= 5) return 'amber';
  return 'green';
}
function fmtWait(min) {
  if (min < 1) return 'сейчас';
  if (min < 60) return min + ' мин';
  return Math.floor(min / 60) + ' ч';
}

export function ClientLineScreen({ onBack }) {
  const [clients, setClients] = useState(initialClients);
  const [activeId, setActiveId] = useState(null);
  const [filter, setFilter] = useState('all'); // all | BAZZAR SERTS | Veil VPN
  const [draft, setDraft] = useState('');
  const endRef = useRef(null);
  const active = clients.find(function (c) { return c.id === activeId; });

  useEffect(function () {
    if (endRef.current && endRef.current.parentElement) {
      endRef.current.parentElement.scrollTop = endRef.current.parentElement.scrollHeight;
    }
  }, [active && active.messages.length, activeId]);

  function send(e) {
    e.preventDefault();
    if (!draft.trim() || !active) return;
    const msg = { id: Date.now(), mine: true, time: new Date().toTimeString().slice(0, 5), read: false, text: draft.trim() };
    setClients(clients.map(function (c) { return c.id === activeId ? Object.assign({}, c, { messages: c.messages.concat([msg]), waitMin: 0 }) : c; }));
    setDraft('');
  }

  // Conversation view
  if (active) {
    const src = SOURCE[active.source];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <NavBar title={active.name} subtitle={active.platform + ' · ' + src.label} onBack={function () { setActiveId(null); }} />
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {active.messages.map(function (m) {
            return (
              <ChatBubble key={m.id} mine={m.mine} author={m.mine ? undefined : m.author} time={m.time} read={m.read}>
                {m.text}
              </ChatBubble>
            );
          })}
          <div ref={endRef}></div>
        </div>
        <form onSubmit={send} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '10px 16px calc(var(--tabbar-h) + 10px)' }}>
          <Icon name="paperclip" size={24} color="var(--accent)" />
          <Field placeholder="Ответ клиенту" value={draft} onChange={function (e) { setDraft(e.target.value); }} style={{ borderRadius: 'var(--radius-pill)', padding: '10px 16px' }} />
          <button type="submit" style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <Icon name="arrow-up" size={20} color="#fff" strokeWidth={2.5} />
          </button>
        </form>
      </div>
    );
  }

  const visible = clients
    .filter(function (c) { return filter === 'all' || c.platform === filter; })
    .slice()
    .sort(function (a, b) { return b.waitMin - a.waitMin; });
  const waiting = clients.length;

  const chips = ['all', 'BAZZAR SERTS', 'Veil VPN'];

  return (
    <div style={{ paddingBottom: 'calc(var(--tabbar-h) + 16px)' }}>
      <NavBar title="Выход на линию" subtitle={waiting + ' клиентов ждут ответа'} onBack={onBack} />
      <div style={{ display: 'flex', gap: 8, padding: '4px var(--screen-pad) 12px', overflowX: 'auto' }}>
        {chips.map(function (ch) {
          const on = filter === ch;
          return (
            <button
              key={ch}
              onClick={function () { setFilter(ch); }}
              style={{
                flexShrink: 0, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)',
                padding: '8px 14px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--fs-subhead)',
                fontWeight: 'var(--fw-semibold)',
                background: on ? 'var(--accent)' : 'var(--surface-2)',
                color: on ? '#fff' : 'var(--text-2)',
              }}
            >
              {ch === 'all' ? 'Все проекты' : ch}
            </button>
          );
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 8px' }}>
        {visible.map(function (c) {
          const src = SOURCE[c.source];
          const last = c.messages[c.messages.length - 1];
          return (
            <button
              key={c.id}
              onClick={function () { setActiveId(c.id); }}
              style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: 'none', border: 'none', padding: '12px', cursor: 'pointer', textAlign: 'left', color: 'var(--text)', fontFamily: 'var(--font-sans)', width: '100%', borderRadius: 'var(--radius)' }}
            >
              <span style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--surface-3)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={src.icon} size={22} color={src.color} />
              </span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-body)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.name}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, flexShrink: 0, fontSize: 'var(--fs-footnote)', fontWeight: 'var(--fw-semibold)', color: waitTone(c.waitMin) === 'red' ? 'var(--red)' : waitTone(c.waitMin) === 'amber' ? 'var(--amber)' : '#4cd964' }}>
                    <Icon name="clock" size={13} strokeWidth={2.5} /> {fmtWait(c.waitMin)}
                  </span>
                </span>
                <span style={{ display: 'flex', gap: 6, alignItems: 'center', margin: '5px 0 5px' }}>
                  <Badge tone={c.platform === 'Veil VPN' ? 'violet' : 'blue'}>{c.platform}</Badge>
                  <Badge tone="neutral">{src.label}</Badge>
                </span>
                <span style={{ display: 'block', fontSize: 'var(--fs-subhead)', color: 'var(--text-2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {last.text}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
