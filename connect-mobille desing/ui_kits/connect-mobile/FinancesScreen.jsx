import React, { useMemo } from 'react';
import { NavBar } from '../../components/layout/NavBar.jsx';
import { Card } from '../../components/layout/Card.jsx';
import { Icon } from '../../components/core/Icon.jsx';

// Grounded on repo src/pages/Finances.tsx: income/expense/net + transaction list.
const transactions = [
  { id: 1, type: 'income', amount: 1490, description: 'Apple Certs · заказ #4821', category: 'BAZZAR SERTS', date: '8 июля' },
  { id: 2, type: 'income', amount: 1990, description: 'Veil VPN · годовая подписка', category: 'Veil VPN', date: '8 июля' },
  { id: 3, type: 'expense', amount: 320, description: 'API сертификатов', category: 'Расходы', date: '7 июля' },
  { id: 4, type: 'income', amount: 890, description: 'Apple Certs · заказ #4830', category: 'BAZZAR SERTS', date: '7 июля' },
  { id: 5, type: 'expense', amount: 150, description: 'Комиссия площадки', category: 'GGSel', date: '6 июля' },
];

function fmt(v) {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(v);
}

export function FinancesScreen({ onBack }) {
  const totals = useMemo(function () {
    let income = 0, expense = 0;
    transactions.forEach(function (t) { if (t.type === 'income') income += t.amount; else expense += t.amount; });
    return { income: income, expense: expense, net: income - expense };
  }, []);

  return (
    <div style={{ paddingBottom: 'calc(var(--tabbar-h) + 16px)' }}>
      <NavBar title="Финансы" onBack={onBack} />
      <div style={{ padding: '0 var(--screen-pad)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
          <Card style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#4cd964', fontSize: 'var(--fs-footnote)', marginBottom: 6 }}>
              <Icon name="trending-up" size={15} /> Доходы
            </div>
            <div style={{ fontSize: 20, fontWeight: 'var(--fw-bold)' }}>{fmt(totals.income)}</div>
          </Card>
          <Card style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--red)', fontSize: 'var(--fs-footnote)', marginBottom: 6 }}>
              <Icon name="trending-down" size={15} /> Расходы
            </div>
            <div style={{ fontSize: 20, fontWeight: 'var(--fw-bold)' }}>{fmt(totals.expense)}</div>
          </Card>
          <Card style={{ padding: 16, gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-2)', fontSize: 'var(--fs-footnote)', marginBottom: 6 }}>
              <Icon name="scale" size={15} /> Прибыль
            </div>
            <div style={{ fontSize: 26, fontWeight: 'var(--fw-bold)', color: totals.net >= 0 ? '#4cd964' : 'var(--red)' }}>
              {totals.net > 0 ? '+' : ''}{fmt(totals.net)}
            </div>
          </Card>
        </div>

        <div style={{ fontSize: 'var(--fs-headline)', fontWeight: 'var(--fw-semibold)', margin: '4px 0 10px' }}>Последние транзакции</div>
        <Card style={{ padding: '6px 16px' }}>
          {transactions.map(function (t, i) {
            return (
              <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: i === 0 ? 'none' : '0.5px solid var(--hair)' }}>
                <div style={{ minWidth: 0, paddingRight: 8 }}>
                  <div style={{ fontSize: 'var(--fs-subhead)', fontWeight: 'var(--fw-medium)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.description}</div>
                  <div style={{ fontSize: 'var(--fs-footnote)', color: 'var(--text-3)', marginTop: 3 }}>{t.date} · {t.category}</div>
                </div>
                <div style={{ fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-body)', whiteSpace: 'nowrap', color: t.type === 'income' ? '#4cd964' : 'var(--red)' }}>
                  {t.type === 'income' ? '+' : '−'}{fmt(t.amount)}
                </div>
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
}
