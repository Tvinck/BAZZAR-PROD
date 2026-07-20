import React, { useState } from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { Card } from '../../components/layout/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { StatCard } from '../../components/content/StatCard.jsx';
import { ServiceTile } from '../../components/content/ServiceTile.jsx';
import { ListRow } from '../../components/content/ListRow.jsx';
import { ProjectPicker } from '../../components/content/ProjectPicker.jsx';
import { PromoBanner } from '../../components/content/PromoBanner.jsx';

const statsByProject = {
  'BAZZAR SERTS': { messages: 26, orders: 14, open: 5, closed: 9 },
  'Veil VPN': { messages: 11, orders: 7, open: 2, closed: 5 },
};

export function HomeScreen({ onOpenNotifications, onOpenServices, onStartLine, onOpen, project, onChangeProject }) {
  const [bannerVisible, setBannerVisible] = useState(true);
  const s = statsByProject[project] || statsByProject['BAZZAR SERTS'];
  return (
    <div style={{ paddingBottom: 'calc(var(--tabbar-h) + 16px)' }}>
      <NavBar title="Главная" large onBell={onOpenNotifications} bellDot />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 var(--screen-pad)' }}>
        <div>
          <ProjectPicker projects={['BAZZAR SERTS', 'Veil VPN']} value={project} onChange={onChangeProject} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <StatCard icon="message-square" value={s.messages} label="Сообщений сегодня" tone="blue" />
          <StatCard icon="package" value={s.orders} label="Заказов сегодня" />
          <StatCard icon="circle-dot" value={s.open} label="Открытых заказов" tone="amber" />
          <StatCard icon="circle-check" value={s.closed} label="Закрытых заказов" tone="green" />
        </div>

        <Card>
          <div style={{ fontSize: 'var(--fs-title)', fontWeight: 'var(--fw-bold)', marginBottom: 6 }}>Разметка данных</div>
          <div style={{ fontSize: 'var(--fs-subhead)', color: 'var(--text-2)', marginBottom: 16 }}>Выполняйте задания и получайте вознаграждения</div>
          <Button variant="primary" block onClick={function () { onOpen('coming:Разметка данных'); }}>Начать разметку</Button>
        </Card>

        <Card>
          <div style={{ fontSize: 'var(--fs-title)', fontWeight: 'var(--fw-bold)', marginBottom: 6 }}>Выход на линию</div>
          <div style={{ fontSize: 'var(--fs-subhead)', color: 'var(--text-2)', marginBottom: 16 }}>Получайте задания и совершайте звонки клиентам</div>
          <Button variant="tonal" block onClick={onStartLine}>Начать работу</Button>
        </Card>

        {bannerVisible ? (
          <PromoBanner
            title="Чат команды"
            subtitle="Обсуждайте заказы с коллегами прямо в приложении"
            icon="message-square"
            onDismiss={function () { setBannerVisible(false); }}
          />
        ) : null}

        <Card style={{ padding: '20px 0 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', marginBottom: 14 }}>
            <span style={{ fontSize: 'var(--fs-title)', fontWeight: 'var(--fw-bold)' }}>Полезные сервисы</span>
            <a href="#" onClick={function (e) { e.preventDefault(); if (onOpenServices) onOpenServices(); }} style={{ fontSize: 'var(--fs-body)' }}>Все</a>
          </div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', padding: '0 20px 4px', scrollbarWidth: 'none' }}>
            <ServiceTile icon="newspaper" label="Новости" onClick={function () { onOpen('news'); }} />
            <ServiceTile icon="calendar-clock" label="TWFM" onClick={function () { onOpen('coming:TWFM'); }} />
            <ServiceTile icon="chart-line" label="Статистика" onClick={function () { onOpen('coming:Статистика'); }} />
            <ServiceTile icon="package" label="Заказы" onClick={function () { onOpen('orders'); }} />
            <ServiceTile icon="wallet" label="Финансы" onClick={function () { onOpen('finances'); }} />
          </div>
        </Card>

        <Card style={{ padding: '20px 20px 10px' }}>
          <div style={{ fontSize: 'var(--fs-title)', fontWeight: 'var(--fw-bold)', marginBottom: 8 }}>Справка и поддержка</div>
          <ListRow icon="lightbulb" title="Идеи" subtitle="Предлагайте улучшения продуктов и процессов" onClick={function () { onOpen('coming:Идеи'); }} />
          <ListRow icon="list-checks" title="Задачи" subtitle="Ваши задачи и статусы их выполнения" onClick={function () { onOpen('coming:Задачи'); }} />
          <ListRow icon="life-buoy" title="Информер" subtitle="Отправка запросов в техподдержку" onClick={function () { onOpen('coming:Информер'); }} />
        </Card>
      </div>
    </div>
  );
}
