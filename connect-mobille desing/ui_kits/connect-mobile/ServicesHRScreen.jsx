import React from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { Card } from '../../components/layout/Card.jsx';
import { ListRow } from '../../components/content/ListRow.jsx';

const services = [
  { icon: 'newspaper', title: 'Новости', key: 'news' },
  { icon: 'calendar-clock', title: 'TWFM', key: 'coming:TWFM' },
  { icon: 'chart-line', title: 'Статистика', key: 'coming:Статистика' },
  { icon: 'package', title: 'Заказы', key: 'orders' },
  { icon: 'wallet', title: 'Финансы', key: 'finances' },
];

export function ServicesHRScreen({ onOpenNotifications, onOpen }) {
  return (
    <div style={{ paddingBottom: 'calc(var(--tabbar-h) + 16px)' }}>
      <NavBar title="Сервисы HR" onBell={onOpenNotifications} />
      <div style={{ padding: '4px var(--screen-pad) 0' }}>
        <h1 style={{ margin: '8px 0 16px', fontSize: 'var(--fs-large-title)', fontWeight: 'var(--fw-bold)' }}>Сервисы</h1>
        <Card style={{ padding: '8px 20px' }}>
          {services.map(function (s) {
            return <ListRow key={s.title} icon={s.icon} title={s.title} onClick={function () { onOpen(s.key); }} />;
          })}
        </Card>
      </div>
    </div>
  );
}
