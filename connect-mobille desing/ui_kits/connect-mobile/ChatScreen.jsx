import React, { useState, useRef, useEffect } from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { Field } from '../../components/core/Field.jsx';
import { Icon } from '../../components/core/Icon.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { ChatBubble } from '../../components/content/ChatBubble.jsx';

const initialChats = [
  {
    id: 'team',
    name: 'Команда BAZZAR SERTS',
    avatar: 'BS',
    unread: 2,
    messages: [
      { id: 1, author: 'Олеся', avatar: 'ОК', time: '13:02', text: 'Коллеги, по заказу #4821 клиент ждет сертификат — кто возьмет?' },
      { id: 2, mine: true, time: '13:04', read: true, text: 'Беру, UDID уже в работе' },
      { id: 3, author: 'Максим', avatar: 'МД', time: '13:26', text: 'Супер. Не забудь отметить статус в Заказах 🙌' },
    ],
  },
  {
    id: 'veil',
    name: 'Veil VPN — смена',
    avatar: 'VV',
    unread: 0,
    messages: [
      { id: 1, author: 'Ирина', avatar: 'ИЛ', time: '11:40', text: 'График на завтра обновился, проверьте TWFM' },
      { id: 2, mine: true, time: '11:52', read: true, text: 'Видел, всё ок' },
    ],
  },
  {
    id: 'olesya',
    name: 'Олеся Ким',
    avatar: 'ОК',
    unread: 0,
    messages: [
      { id: 1, author: 'Олеся', avatar: 'ОК', time: '09:15', text: 'Привет! Кинь, пожалуйста, статистику за вчера' },
      { id: 2, mine: true, time: '09:20', read: true, text: 'Отправил в Статистике, глянь' },
    ],
  },
];

export function ChatScreen() {
  const [chats, setChats] = useState(initialChats);
  const [activeId, setActiveId] = useState(null);
  const [draft, setDraft] = useState('');
  const endRef = useRef(null);
  const active = chats.find(function (c) { return c.id === activeId; });

  useEffect(function () {
    if (endRef.current && endRef.current.parentElement) {
      endRef.current.parentElement.scrollTop = endRef.current.parentElement.scrollHeight;
    }
  }, [active && active.messages.length, activeId]);

  function send(e) {
    e.preventDefault();
    if (!draft.trim() || !active) return;
    const msg = { id: Date.now(), mine: true, time: new Date().toTimeString().slice(0, 5), read: false, text: draft.trim() };
    setChats(chats.map(function (c) { return c.id === activeId ? Object.assign({}, c, { messages: c.messages.concat([msg]) }) : c; }));
    setDraft('');
  }

  if (active) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <NavBar title={active.name} subtitle="С 8:00 до 20:00, без выходных" onBack={function () { setActiveId(null); }} />
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {active.messages.map(function (m) {
            return (
              <ChatBubble key={m.id} mine={m.mine} author={m.mine ? undefined : m.author} avatar={m.mine ? undefined : m.avatar} time={m.time} read={m.read}>
                {m.text}
              </ChatBubble>
            );
          })}
          <div ref={endRef}></div>
        </div>
        <form onSubmit={send} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '10px 16px calc(var(--tabbar-h) + 10px)' }}>
          <Icon name="paperclip" size={24} color="var(--accent)" />
          <Field placeholder="Сообщение" value={draft} onChange={function (e) { setDraft(e.target.value); }} style={{ borderRadius: 'var(--radius-pill)', padding: '10px 16px' }} />
          <button type="submit" style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <Icon name="arrow-up" size={20} color="#fff" strokeWidth={2.5} />
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 'calc(var(--tabbar-h) + 16px)' }}>
      <NavBar title="Чат" subtitle="С 8:00 до 20:00, без выходных" />
      <div style={{ display: 'flex', flexDirection: 'column', padding: '4px 8px 0' }}>
        {chats.map(function (c) {
          const last = c.messages[c.messages.length - 1];
          return (
            <button
              key={c.id}
              onClick={function () {
                setActiveId(c.id);
                setChats(chats.map(function (x) { return x.id === c.id ? Object.assign({}, x, { unread: 0 }) : x; }));
              }}
              style={{ display: 'flex', gap: 12, alignItems: 'center', background: 'none', border: 'none', padding: '10px 12px', cursor: 'pointer', textAlign: 'left', color: 'var(--text)', fontFamily: 'var(--font-sans)', borderRadius: 'var(--radius)', width: '100%' }}
            >
              <span style={{ width: 50, height: 50, borderRadius: '50%', background: 'var(--surface-2)', color: 'var(--text-2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 16, flexShrink: 0 }}>{c.avatar}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-body)' }}>{c.name}</span>
                  <span style={{ fontSize: 'var(--fs-footnote)', color: 'var(--text-3)' }}>{last.time}</span>
                </span>
                <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, marginTop: 2 }}>
                  <span style={{ fontSize: 'var(--fs-subhead)', color: 'var(--text-2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {last.mine ? 'Вы: ' : ''}{last.text}
                  </span>
                  {c.unread > 0 ? <Badge tone="blue" style={{ borderRadius: 'var(--radius-pill)', flexShrink: 0 }}>{c.unread}</Badge> : null}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
