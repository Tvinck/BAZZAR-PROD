import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Mesh } from '../components/Mesh'
import { ProductCard } from '../components/ProductCard'
import { BoltIcon, ShieldIcon, PercentIcon, HeadsetIcon, GiftIcon, StarIcon, SearchIcon, CoinIcon, CATEGORY_ICON } from '../ui/Icons'
import { CATEGORIES, PRODUCTS } from '../data/catalog'

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 16 } }
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }

const trust = [
  { icon: <BoltIcon size={20} />, title: 'Моментально', sub: 'Выдача 24/7 автоматом' },
  { icon: <ShieldIcon size={20} />, title: 'Гарантия', sub: 'Возврат если не подошло' },
  { icon: <PercentIcon size={20} />, title: 'Кэшбэк 5%', sub: 'Баллами на баланс' },
  { icon: <HeadsetIcon size={20} />, title: 'Поддержка', sub: 'Живые люди в чате' }
]

const reviews = [
  { name: 'Артём', text: 'Закинул UC в PUBG за минуту, дешевле всех. Кэшбэк реально вернулся 🔥', game: 'PUBG Mobile' },
  { name: 'Лиза', text: 'Купила Discord Nitro, пришёл код сразу. Поддержка ответила за 2 минуты.', game: 'Discord Nitro' },
  { name: 'Макс', text: 'Беру Steam пополнение тут постоянно. Ни разу не подвели, всё чётко.', game: 'Steam' }
]

const faqs = [
  { q: 'Как быстро придёт товар?', a: 'Большинство товаров выдаётся моментально и автоматически сразу после оплаты. Для некоторых аккаунтов/аренды — до 30 минут.' },
  { q: 'Это безопасно?', a: 'Да. Оплата проходит через защищённый шлюз, а на каждый заказ действует гарантия возврата, если товар не подошёл или не сработал.' },
  { q: 'Что такое кэшбэк?', a: 'С каждой покупки вам возвращается до 5% баллами на баланс BAZZAR, которыми можно оплатить следующие заказы.' },
  { q: 'Можно стать продавцом?', a: 'Скоро откроем витрину для проверенных продавцов. Сейчас все товары — официально от BAZZAR.' }
]

export function Home() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const popular = PRODUCTS.slice(0, 10)

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', paddingTop: 'clamp(40px,6vw,72px)', paddingBottom: 'clamp(30px,4vw,48px)' }}>
        <Mesh variant="hero" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div variants={stagger} initial="hidden" animate="show" style={{ maxWidth: 760 }}>
            <motion.div variants={fade}>
              <span className="chip" style={{ background: 'rgba(124,92,255,0.12)', border: '1px solid rgba(124,92,255,0.3)', color: '#c4b5ff' }}>
                <StarIcon size={13} /> 4.9 на основе 24 000+ отзывов
              </span>
            </motion.div>
            <motion.h1 variants={fade} style={{ fontSize: 'clamp(2.4rem,6vw,4.4rem)', margin: '20px 0 0', lineHeight: 1.02 }}>
              Цифровые товары<br /><span className="grad-text">за секунды</span>, без переплат
            </motion.h1>
            <motion.p variants={fade} style={{ fontSize: '1.12rem', color: 'var(--text-2)', maxWidth: 560, margin: '20px 0 28px' }}>
              Игровая валюта, аккаунты, пополнения Steam и Apple, подписки. Моментальная выдача, кэшбэк и гарантия на каждый заказ ⚡
            </motion.p>

            {/* Большой поиск */}
            <motion.div variants={fade} style={{ position: 'relative', maxWidth: 600 }}>
              <span style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)', display: 'flex' }}><SearchIcon size={20} /></span>
              <input className="field" placeholder="Что ищете? Genshin, Steam, Netflix…" style={{ height: 60, paddingLeft: 50, paddingRight: 140, fontSize: '1rem' }}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate('/catalog') }} />
              <button className="btn btn-primary" onClick={() => navigate('/catalog')} style={{ position: 'absolute', right: 7, top: 7, height: 46 }}>Найти</button>
            </motion.div>

            {/* Быстрые теги */}
            <motion.div variants={fade} style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginTop: 16 }}>
              {['Genshin Impact', 'Steam', 'PUBG Mobile', 'Discord Nitro', 'Apple', 'Roblox'].map(t => (
                <Link key={t} to="/catalog" className="chip" style={{ fontSize: '0.78rem' }}>{t}</Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Trust row */}
          <motion.div variants={stagger} initial="hidden" animate="show"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14, marginTop: 44 }}>
            {trust.map(t => (
              <motion.div key={t.title} variants={fade} className="card" style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 13 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--grad-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4b5ff', flexShrink: 0 }}>{t.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.96rem' }}>{t.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-3)' }}>{t.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── КАТЕГОРИИ ── */}
      <section className="section" style={{ paddingTop: 'clamp(30px,4vw,48px)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Категории</span>
              <h2 className="section-title" style={{ marginTop: 8 }}>Выбери, что нужно</h2>
            </div>
            <Link to="/catalog" className="btn btn-ghost" style={{ padding: '10px 16px' }}>Весь каталог <ArrowRight size={15} /></Link>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 14 }}>
            {CATEGORIES.map(c => {
              const Icon = CATEGORY_ICON[c.id] ?? CoinIcon
              return (
              <motion.div key={c.id} variants={fade} whileHover={{ y: -5 }}>
                <Link to="/catalog" className="card card-hover" style={{ display: 'block', padding: 18, position: 'relative', overflow: 'hidden', minHeight: 132 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 15, background: c.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 10px 22px rgba(0,0,0,0.4)' }}><Icon size={27} /></div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.02rem', marginTop: 14 }}>{c.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginTop: 2 }}>{c.subtitle}</div>
                  <span style={{ position: 'absolute', top: 16, right: 16, fontSize: '0.74rem', color: 'var(--text-3)' }}>{c.count}+</span>
                </Link>
              </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── ПОПУЛЯРНОЕ ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Хиты продаж</span>
              <h2 className="section-title" style={{ marginTop: 8 }}>Сейчас берут 🔥</h2>
            </div>
            <Link to="/catalog" className="btn btn-ghost" style={{ padding: '10px 16px' }}>Смотреть всё <ArrowRight size={15} /></Link>
          </div>
          <div className="grid-products">
            {popular.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── КЭШБЭК / БОНУС ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', padding: 'clamp(32px,5vw,56px)', background: 'linear-gradient(120deg,#1a1330,#241544 55%,#0e2a36)', border: '1px solid var(--hair)' }}>
            <div className="blob" style={{ width: 360, height: 360, top: -120, right: -60, background: 'radial-gradient(circle,#7c5cff,transparent 70%)', opacity: 0.5 }} />
            <div className="blob" style={{ width: 300, height: 300, bottom: -120, left: '30%', background: 'radial-gradient(circle,#22d3ee,transparent 70%)', opacity: 0.35 }} />
            <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 28, alignItems: 'center' }} className="cashback-grid">
              <div>
                <span className="chip" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}><GiftIcon size={15} /> Программа лояльности</span>
                <h2 style={{ fontSize: 'clamp(1.7rem,3.5vw,2.6rem)', margin: '16px 0 12px' }}>Возвращаем до <span className="grad-text">5% кэшбэка</span> с каждой покупки</h2>
                <p style={{ color: 'var(--text-2)', maxWidth: 460, marginBottom: 22 }}>Копи баллы и трать их на новые заказы. Чем больше покупаешь — тем выше уровень и процент возврата.</p>
                <button className="btn btn-primary" onClick={() => navigate('/cabinet')}>Открыть кабинет <ArrowRight size={15} /></button>
              </div>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass mobile-hide" style={{ borderRadius: 20, padding: 24 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>Ваш баланс</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.4rem', margin: '4px 0 2px' }} className="grad-text">1 250 ₽</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--green)' }}>+62 ₽ кэшбэка за неделю</div>
                <div style={{ height: 1, background: 'var(--hair)', margin: '18px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-2)' }}><span>Уровень</span><span style={{ color: '#fff', fontWeight: 700 }}>Gamer · 3%→5%</span></div>
                <div style={{ height: 8, borderRadius: 6, background: 'var(--surface-2)', marginTop: 10, overflow: 'hidden' }}>
                  <div style={{ width: '64%', height: '100%', background: 'var(--grad)', borderRadius: 6 }} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ОТЗЫВЫ ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head"><div><span className="kicker">Отзывы</span><h2 className="section-title" style={{ marginTop: 8 }}>Нам доверяют</h2></div></div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {reviews.map(r => (
              <motion.div key={r.name} variants={fade} className="card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 12, color: '#fbbf24' }}>{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} size={15} />)}</div>
                <p style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: 16 }}>«{r.text}»</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff' }}>{r.name[0]}</div>
                  <div><div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{r.name}</div><div style={{ fontSize: '0.78rem', color: 'var(--text-3)' }}>{r.game}</div></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center' }}><div><span className="kicker">Вопросы</span><h2 className="section-title" style={{ marginTop: 8 }}>Частые вопросы</h2></div></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((f, i) => {
              const open = openFaq === i
              return (
                <div key={i} className="card" style={{ overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(open ? null : i)} style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--text)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14, padding: '18px 20px', textAlign: 'left' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem' }}>{f.q}</span>
                    <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ color: 'var(--violet)', display: 'flex' }}><ChevronDown size={20} /></motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                        <p style={{ padding: '0 20px 20px', color: 'var(--text-2)', lineHeight: 1.65 }}>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <style>{`@media (max-width:880px){ .cashback-grid{ grid-template-columns:1fr !important } }`}</style>
    </div>
  )
}
