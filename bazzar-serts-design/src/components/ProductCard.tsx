import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Flame, Sparkles, Tag, X, Smartphone } from 'lucide-react'
import type { Product } from '../types'
import { useI18n } from '../hooks/useI18n'

interface Props {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: Props) {
  const { t } = useI18n()
  const accentColor = '#a78bfa'
  const isApp = product.category === 'apps'
  const [showComingSoon, setShowComingSoon] = useState(false)

  const cardContent = (
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

        {/* App type indicator */}
        {isApp && (
          <span style={{
            position: 'absolute', top: 10, right: 10,
            padding: '3px 10px', borderRadius: 'var(--r-full)',
            background: 'rgba(149,51,255,0.85)', backdropFilter: 'blur(8px)',
            color: '#fff', fontSize: '0.68rem', fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <Smartphone size={11} /> APP
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

        {/* Price / Install button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingTop: 4 }}>
          {isApp ? (
            <div style={{ display: 'flex', gap: 6, width: '100%', alignItems: 'center' }}>
              {product.price === 0 && product.ipa_url ? (
                <a
                  href={product.ipa_url}
                  download
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.78rem',
                    padding: '5px 12px', borderRadius: 'var(--r-full)',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-2, #ccc)', textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}
                >
                  Скачать
                </a>
              ) : product.price > 0 ? (
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem' }}>
                  {product.price} ₽
                </span>
              ) : null}
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.78rem',
                padding: '5px 14px', borderRadius: 'var(--r-full)',
                background: 'linear-gradient(135deg, #af66ff, #6e00e5)',
                color: '#fff',
              }}>
                Установить
              </span>
            </div>
          ) : (
            <>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' }}>
                {product.price === 0 ? t('product.free') : `${product.price} ₽`}
              </span>
              {product.old_price && (
                <span style={{ fontSize: '0.82rem', color: 'var(--text-3)', textDecoration: 'line-through' }}>
                  {product.old_price} ₽
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
      >
        {isApp ? (
          <div onClick={() => setShowComingSoon(true)}>
            {cardContent}
          </div>
        ) : (
          <Link to={`/product/${product.id}`}>
            {cardContent}
          </Link>
        )}
      </motion.div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComingSoon(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                zIndex: 2000, cursor: 'pointer',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              style={{
                position: 'fixed',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(380px, 90vw)',
                background: 'var(--bg-3, #1a1a2e)',
                border: '1px solid var(--border, rgba(255,255,255,0.08))',
                borderRadius: 'var(--r-xl, 20px)',
                padding: '32px 28px',
                zIndex: 2001,
                textAlign: 'center',
              }}
            >
              {/* Close */}
              <button
                onClick={() => setShowComingSoon(false)}
                style={{
                  position: 'absolute', top: 14, right: 14,
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)', border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-3, #666)', cursor: 'pointer',
                }}
              >
                <X size={14} />
              </button>

              {/* Icon */}
              <div style={{
                width: 72, height: 72, borderRadius: 'var(--r-xl, 20px)',
                background: 'rgba(149,51,255,0.1)',
                border: '1px solid rgba(149,51,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                {product.image ? (
                  <img src={product.image} alt="" width={56} height={56} style={{ borderRadius: 12, objectFit: 'cover' }} />
                ) : (
                  <Smartphone size={32} style={{ color: 'var(--accent, #9533ff)' }} />
                )}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem', fontWeight: 700,
                marginBottom: 8,
              }}>
                {product.title}
              </h3>

              {/* Message */}
              <p style={{
                color: 'var(--text-2, #999)',
                fontSize: '0.88rem', lineHeight: 1.6,
                marginBottom: 24,
              }}>
                Скоро будет доступна подпись приложений через&nbsp;сайт.
                <br />
                Следите за обновлениями!
              </p>

              {/* Decorative line */}
              <div style={{
                height: 3, width: 48, borderRadius: 2,
                background: 'linear-gradient(90deg, #af66ff, #6e00e5)',
                margin: '0 auto 20px',
              }} />

              {/* Close button */}
              <button
                onClick={() => setShowComingSoon(false)}
                style={{
                  width: '100%', padding: '12px 20px',
                  borderRadius: 'var(--r-full, 50px)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text, #fff)', fontSize: '0.88rem',
                  fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                  transition: 'all 200ms',
                }}
              >
                Понятно
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
