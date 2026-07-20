StatCard — daily counter on Главная. Lay out in a 2-col grid.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
  <StatCard icon="message-square" value={26} label="Сообщений сегодня" tone="blue" />
  <StatCard icon="package" value={14} label="Заказов сегодня" />
</div>
```
