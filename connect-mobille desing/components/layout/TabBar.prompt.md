TabBar — the app's 4 tabs: Главная / Сервисы HR / Чат / Ещё.

```jsx
<TabBar
  items={[
    { key: 'home', label: 'Главная', icon: 'headphones' },
    { key: 'hr', label: 'Сервисы HR', icon: 'layout-grid' },
    { key: 'chat', label: 'Чат', icon: 'message-square', badge: 3 },
    { key: 'more', label: 'Ещё', icon: 'ellipsis' },
  ]}
  active="home"
  onChange={setTab}
/>
```

Absolutely positioned; wrap screens in a `position: relative` phone container.
