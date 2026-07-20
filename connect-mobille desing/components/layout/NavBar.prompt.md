NavBar — top bar. Root tab screens use `large` (34px bold title left, blue bell right). Pushed screens use compact centered title + back chevron.

```jsx
<NavBar title="Главная" large onBell={() => {}} bellDot />
<NavBar title="Уведомления" onBack={() => {}} />
```
