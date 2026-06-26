import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mesh } from '../components/Mesh'
import { WalletIcon, GiftIcon, PackageIcon, UserIcon, SettingsIcon, CopyIcon, CheckIcon, PlusIcon, StarIcon, ClockIcon, VerifyIcon, LogOutIcon } from '../ui/Icons'

const ORDERS = [
  { id: 'BZ-10428', title: 'Genshin Impact — Кристаллы', date: '24 июня, 14:02', sum: 349, status: 'done', emoji: '🌟', grad: 'linear-gradient(135deg,#5b7cfa,#22d3ee)' },
  { id: 'BZ-10391', title: 'Discord Nitro — 1 месяц', date: '21 июня, 09:11', sum: 399, status: 'done', emoji: '🎧', grad: 'linear-gradient(135deg,#5865f2,#7c5cff)' },
  { id: 'BZ-10377', title: 'Netflix — аренда 30 дней', date: '20 июня, 19:40', sum: 299, status: 'progress', emoji: '🎬', grad: 'linear-gradient(135deg,#e50914,#7c1d1d)' },
  { id: 'BZ-10310', title: 'Steam — пополнение 1000 ₽', date: '12 июня, 12:05', sum: 1040, status: 'done', emoji: '🎮', grad: 'linear-gradient(135deg,#1b2838,#66c0f4)' }
]

const statusMap: Record<string, { text: string; color: string; bg: string }> = {
  done: { text: 'Выдан', color: '#5af0c2', bg: 'rgba(46,230,166,0.14)' },
  progress: { text: 'В обработке', color: '#fbbf24', bg: 'rgba(251,191,36,0.14)' }
}

const TABS = [
  { id: 'orders', label: 'Заказы', icon: <PackageIcon size={17} /> },
  { id: 'balance', label: 'Баланс и кэшбэк', icon: <WalletIcon size={17} /> },
  { id: 'profile', label: 'Профиль', icon: <UserIcon size={17} /> }
]

export function Cabinet() {
  const [tab, setTab] = useState('orders')
  const [copied, setCopied] = useState(false)

  const copyRef = () => { navigator.clipboard?.writeText('bazzar.market/r/artem'); setCopied(true); setTimeout(() => setCopied(false), 1800) }

  return (
    <div style={{ position: 'relative' }}>
      <Mesh variant="a" />
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '32px 0 60px' }}>
        {/* Профиль-хедер */}
        <div className="card" style={{ padding: 24, display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginBottom: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 20, background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.8rem', color: '#fff', boxShadow: 'var(--shadow-glow)' }}>А</div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <h1 style={{ fontSize: '1.5rem' }}>Артём</h1>
              <span className="badge" style={{ background: 'rgba(124,92,255,0.16)', color: '#c4b5ff' }}><VerifyIcon size={13} /> Gamer</span>
            </div>
            <div style={{ color: 'var(--text-3)', fontSize: '0.86rem', marginTop: 2 }}>artem@bazzar.market · с июня 2025</div>
          </div>
          <button className="btn btn-ghost" style={{ padding: '11px 16px' }}><LogOutIcon size={16} /> Выйти</button>
        </div>

        {/* Метрики */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14, marginBottom: 22 }}>
          <MetricCard icon={<WalletIcon size={19} />} label="Баланс" value="1 250 ₽" accent="var(--cyan)" />
          <MetricCard icon={<GiftIcon size={19} />} label="Кэшбэк-баллы" value="312 ₽" accent="var(--green)" />
          <MetricCard icon={<PackageIcon size={19} />} label="Заказов" value="28" accent="var(--violet)" />
          <MetricCard icon={<StarIcon size={19} />} label="Уровень" value="3 · 5%" accent="var(--amber)" />
        </div>

        {/* Табы */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, overflowX: 'auto' }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} className="btn" style={{ padding: '11px 18px', whiteSpace: 'nowrap', ...(tab === t.id ? { background: 'var(--grad)', color: '#fff', boxShadow: '0 8px 20px rgba(124,92,255,0.35)' } : { background: 'var(--surface)', color: 'var(--text-2)', border: '1px solid var(--hair)' }) }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
            {tab === 'orders' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ORDERS.map(o => {
                  const s = statusMap[o.status]
                  return (
                    <div key={o.id} className="card" style={{ padding: 16, display: 'flex', gap: 15, alignItems: 'center', flexWrap: 'wrap' }}>
                      <div style={{ width: 56, height: 56, borderRadius: 13, background: o.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.7rem', flexShrink: 0 }}>{o.emoji}</div>
                      <div style={{ flex: 1, minWidth: 160 }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{o.title}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8rem', color: 'var(--text-3)', marginTop: 3 }}>
                          <span>{o.id}</span><span>·</span><span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><ClockIcon size={13} /> {o.date}</span>
                        </div>
                      </div>
                      <span className="badge" style={{ background: s.bg, color: s.color }}>{s.text}</span>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', minWidth: 80, textAlign: 'right' }}>{o.sum.toLocaleString('ru-RU')} ₽</div>
                      <button className="btn btn-ghost" style={{ padding: '9px 14px', fontSize: '0.82rem' }}>Повторить</button>
                    </div>
                  )
                })}
              </div>
            )}

            {tab === 'balance' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 16 }} className="bal-grid">
                <div className="card" style={{ padding: 24, position: 'relative', overflow: 'hidden', background: 'linear-gradient(120deg,#1a1330,#241544 60%,#0e2a36)' }}>
                  <div className="blob" style={{ width: 240, height: 240, top: -100, right: -60, background: 'radial-gradient(circle,#7c5cff,transparent 70%)', opacity: 0.5 }} />
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-3)' }}>Доступно на балансе</div>
                    <div className="grad-text" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.6rem', margin: '4px 0' }}>1 250 ₽</div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--green)', marginBottom: 20 }}>+ 312 ₽ кэшбэк-баллами</div>
                    <button className="btn btn-primary"><PlusIcon size={17} /> Пополнить баланс</button>
                  </div>
                </div>
                <div className="card" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--grad-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4b5ff' }}><GiftIcon size={19} /></div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>Реферальная программа</div>
                  </div>
                  <p style={{ color: 'var(--text-2)', fontSize: '0.88rem', marginBottom: 14 }}>Приглашай друзей — получай 5% с их покупок на баланс.</p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input className="field" readOnly value="bazzar.market/r/artem" style={{ height: 44, fontSize: '0.84rem' }} />
                    <button className="btn btn-soft" style={{ width: 48, padding: 0 }} onClick={copyRef} aria-label="Копировать">{copied ? <CheckIcon size={17} /> : <CopyIcon size={17} />}</button>
                  </div>
                </div>
              </div>
            )}

            {tab === 'profile' && (
              <div className="card" style={{ padding: 24, maxWidth: 560 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 18 }}>
                  <span style={{ color: 'var(--violet)', display: 'flex' }}><SettingsIcon size={19} /></span>
                  <h3 style={{ fontSize: '1.15rem' }}>Настройки профиля</h3>
                </div>
                {[['Имя', 'Артём'], ['Email', 'artem@bazzar.market'], ['Telegram', '@artem']].map(([k, v]) => (
                  <div key={k} style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginBottom: 6 }}>{k}</div>
                    <input className="field" defaultValue={v} />
                  </div>
                ))}
                <button className="btn btn-primary" style={{ marginTop: 6 }}>Сохранить изменения</button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <Link to="/catalog" className="btn btn-ghost" style={{ display: 'inline-flex' }}>Перейти в каталог</Link>
        </div>
      </div>
      <style>{`@media (max-width:880px){ .bal-grid{ grid-template-columns:1fr !important } }`}</style>
    </div>
  )
}

function MetricCard({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: string; accent: string }) {
  return (
    <div className="card" style={{ padding: '18px 20px' }}>
      <div style={{ width: 38, height: 38, borderRadius: 11, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem' }}>{value}</div>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>{label}</div>
    </div>
  )
}
