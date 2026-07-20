import React from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { ListRow } from '../../components/content/ListRow.jsx';

const services = [
  { icon: 'newspaper', title: 'Новости', key: 'news' },
  { icon: 'calendar-clock', title: 'TWFM', key: 'coming:TWFM' },
  { icon: 'chart-line', title: 'Статистика', key: 'coming:Статистика' },
  { icon: 'package', title: 'Заказы', key: 'orders' },
  { icon: 'wallet', title: 'Финансы', key: 'finances' },
];

export function UsefulServicesScreen({ onBack, onOpen }) {
  return (
    <div style={{ paddingBottom: 16 }}>
      <NavBar title="Полезные сервисы" onBack={onBack} />
      <div style={{ padding: '4px var(--screen-pad) 0' }}>
        {services.map(function (s) {
          return <ListRow key={s.title} icon={s.icon} title={s.title} onClick={function () { onOpen(s.key); }} />;
        })}
      </div>
    </div>
  );
}
