import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Flame, Sparkles, Tag } from 'lucide-react'
import type { Product } from '../types'
import { useI18n } from '../hooks/useI18n'

interface Props {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: Props) {
  const { t } = useI18n()
  const accentColor = '#a78bfa'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="card card-hover" style={{
          overflow: 'hidden',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}>
          {/* Thumbnail */}
          <div style={{
            aspectRatio: '4/3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: product.image 
              ? `url(${product.image}) center/cover no-repeat`
              : product.grad || `radial-gradient(circle at 50% 60%, ${accentColor}12 0%, var(--surface-2) 70%)`,
            position: 'relative',
          }}>
            {!product.image && (
              <span style={{ fontSize: '3rem' }}>{product.emoji || '🛍️'}</span>
            )}

            {/* Badge */}
            {product.badge && (
              <span className={`badge badge-${product.badge}`} style={{ position: 'absolute', top: 10, left: 10 }}>
                {product.badge === 'hot' && <><Flame size={12} /> {t('badge.hot')}</>}
                {product.badge === 'new' && <><Sparkles size={12} /> {t('badge.new')}</>}
                {product.badge === 'sale' && <><Tag size={12} /> {t('badge.sale')}</>}
              </span>
            )}
          </div>

          {/* Info */}
          <div style={{
            padding: '14px 16px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            flex: 1,
          }}>
            <h3 style={{
              fontSize: '0.92rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              lineHeight: 1.3,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}>
              {product.title}
            </h3>

            <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {product.subtitle}
            </p>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 'auto', paddingTop: 8 }}>
              <Star size={13} fill="#fcab14" stroke="#fcab14" />
              <span style={{ fontSize: '0.78rem', color: 'var(--text-2)' }}>{product.rating > 0 ? product.rating.toFixed(1) : '5.0'}</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-3)', marginLeft: 4 }}>{product.sold > 0 ? `${product.sold.toLocaleString('ru-RU')} ${t('product.sales')}` : t('badge.new')}</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, paddingTop: 4 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' }}>
                {product.price === 0 ? t('product.free') : `${product.price} ₽`}
              </span>
              {product.old_price && (
                <span style={{ fontSize: '0.82rem', color: 'var(--text-3)', textDecoration: 'line-through' }}>
                  {product.old_price} ₽
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
