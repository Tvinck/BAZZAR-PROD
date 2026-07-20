import React from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { NotificationItem } from '../../components/content/NotificationItem.jsx';

const items = [
  { category: 'Новость', date: '2 июля', time: '14:30', icon: 'newspaper', iconColor: 'var(--amber)', title: 'Новый Бизнес StandUp на базе', text: 'Технологи, гики и дизайнеры — про то, как рождаются продукты, интерфейсы и мемы' },
  { category: 'Новость', date: '1 июля', time: '15:04', icon: 'newspaper', iconColor: 'var(--amber)', title: 'Бери максимум от лета', text: 'В дайджесте: горячие новости, конкурсы и домашка от лидеров' },
  { category: 'Расписание', date: '26 июня', time: '11:02', icon: 'calendar-days', iconColor: 'var(--violet)', title: 'Обновления в заявках на 26 июня' },
  { category: 'База знаний', date: '25 июня', time: '15:50', icon: 'book-open', iconColor: 'var(--accent)', title: 'Поиск операций', text: 'Опубликована новая статья.' },
  { category: 'Расписание', date: '24 июня', time: '16:37', icon: 'calendar-days', iconColor: 'var(--violet)', title: 'Обновился график работы на 24 июня' },
];

export function NotificationsScreen({ onBack }) {
  return (
    <div style={{ paddingBottom: 16 }}>
      <NavBar title="Уведомления" onBack={onBack} />
      <div style={{ padding: '0 var(--screen-pad)' }}>
        <h1 style={{ margin: '4px 0 14px', fontSize: 'var(--fs-large-title)', fontWeight: 'var(--fw-bold)' }}>Ранее</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map(function (n, i) {
            return <NotificationItem key={i} category={n.category} date={n.date} time={n.time} icon={n.icon} iconColor={n.iconColor} title={n.title} text={n.text} />;
          })}
        </div>
      </div>
    </div>
  );
}
