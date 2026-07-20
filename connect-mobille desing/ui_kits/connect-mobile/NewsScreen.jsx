import React from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { NotificationItem } from '../../components/content/NotificationItem.jsx';

const news = [
  { category: 'BAZZAR SERTS', date: '8 июля', time: '10:12', icon: 'newspaper', iconColor: 'var(--amber)', title: 'Обновили выдачу сертификатов', text: 'Теперь ключи Apple Certs приходят клиенту автоматически после согласования заявки.' },
  { category: 'Veil VPN', date: '7 июля', time: '18:40', icon: 'shield', iconColor: '#4cd964', title: 'Новые локации серверов', text: 'Добавили Японию и Бразилию — расскажите клиентам при обращении.' },
  { category: 'Компания', date: '5 июля', time: '14:30', icon: 'megaphone', iconColor: 'var(--violet)', title: 'Новый Бизнес StandUp на базе', text: 'Технологи, гики и дизайнеры — про то, как рождаются продукты, интерфейсы и мемы.' },
  { category: 'Компания', date: '1 июля', time: '15:04', icon: 'sun', iconColor: 'var(--amber)', title: 'Бери максимум от лета', text: 'В дайджесте: горячие новости, конкурсы и домашка от лидеров.' },
];

export function NewsScreen({ onBack }) {
  return (
    <div style={{ paddingBottom: 24 }}>
      <NavBar title="Новости" onBack={onBack} />
      <div style={{ padding: '0 var(--screen-pad)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {news.map(function (n, i) {
            return <NotificationItem key={i} category={n.category} date={n.date} time={n.time} icon={n.icon} iconColor={n.iconColor} title={n.title} text={n.text} />;
          })}
        </div>
      </div>
    </div>
  );
}
