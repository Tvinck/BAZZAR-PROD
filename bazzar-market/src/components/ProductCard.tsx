import { motion } from 'framer-motion'
import { Link } from '../ui/nav'
import { StarIcon, BoltIcon } from '../ui/Icons'
import type { Product } from '../data/catalog'

const badgeMap = {
  hot: { cls: 'badge-hot', text: '🔥 Хит' },
  new: { cls: 'badge-new', text: 'Новинка' },
  sale: { cls: 'badge-sale', text: 'Скидка' }
}

export function ProductCard({ product }: { product: Product }) {
  const b = product.badge ? badgeMap[product.badge] : null
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4 }}>
      <Link to={`/product/${product.id}`} className="card card-hover" style={{ display: 'block', overflow: 'hidden' }}>
        {/* Арт */}
        <div style={{ position: 'relative', height: 132, background: product.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.25), transparent 55%)' }} />
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)', backgroundSize: '14px 14px', maskImage: 'radial-gradient(circle at 50% 50%, #000, transparent 75%)', WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000, transparent 75%)' }} />
          <motion.span whileHover={{ scale: 1.12, rotate: -4 }} transition={{ type: 'spring', stiffness: 260 }} style={{ fontSize: '3.4rem', filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.4))', zIndex: 1 }}>{product.emoji || '🛍️'}</motion.span>
          {b && <span className={`badge ${b.cls}`} style={{ position: 'absolute', top: 12, left: 12 }}>{b.text}</span>}
          {discount > 0 && <span className="badge badge-sale" style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.45)', color: '#fff' }}>−{discount}%</span>}
        </div>
        {/* Тело */}
        <div style={{ padding: '14px 15px 16px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.02rem', color: 'var(--text)' }}>{product.title}</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginTop: 2 }}>{product.subtitle}</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '12px 0 14px', fontSize: '0.8rem', color: 'var(--text-2)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#fbbf24' }}><StarIcon size={13} /> <span style={{ color: 'var(--text-2)' }}>{product.rating.toFixed(1)}</span></span>
            <span style={{ color: 'var(--text-3)' }}>{product.sold.toLocaleString('ru-RU')} продаж</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 7 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem' }}>{product.price.toLocaleString('ru-RU')} ₽</span>
                {product.oldPrice && <span style={{ fontSize: '0.82rem', color: 'var(--text-3)', textDecoration: 'line-through' }}>{product.oldPrice.toLocaleString('ru-RU')}</span>}
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.74rem', color: 'var(--green)', marginTop: 2 }}>
                <BoltIcon size={12} /> {product.delivery}
              </div>
            </div>
            <span className="btn btn-soft" style={{ padding: '9px 14px', fontSize: '0.82rem' }}>Купить</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
