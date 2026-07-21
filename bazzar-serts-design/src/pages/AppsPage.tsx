import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Download, Package, HardDrive, Sparkles, XCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useI18n } from '../hooks/useI18n'

/* ═══════════════════════════════════════════════════════════
   AppsPage — IPA App Library
   Fetches from Supabase `bazzar_apps` table
   ═══════════════════════════════════════════════════════════ */

interface BazzarApp {
  id: string
  name: string
  version: string
  description: string | null
  icon_url: string | null
  ipa_url: string | null
  bundle_id: string | null
  size_bytes: number | null
  price: number | null
  created_at: string
  is_active: boolean
}

/* ── Helpers ──────────────────────────────────────────────── */

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`
}

/* ── Skeleton Card ────────────────────────────────────────── */

function SkeletonCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderRadius: 'var(--r-lg)',
        border: '1px solid rgba(255,255,255,0.06)',
        padding: 'var(--sp-5)',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}
    >
      {/* Icon skeleton */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <div style={{
          width: 72, height: 72, borderRadius: 'var(--r-md)',
          background: 'linear-gradient(110deg, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 70%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s ease-in-out infinite',
          flexShrink: 0,
        }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            height: 16, width: '70%', borderRadius: 4,
            background: 'rgba(255,255,255,0.06)',
            animation: 'shimmer 1.5s ease-in-out infinite',
          }} />
          <div style={{
            height: 12, width: '45%', borderRadius: 4,
            background: 'rgba(255,255,255,0.04)',
            animation: 'shimmer 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>
      {/* Description skeleton */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ height: 11, width: '100%', borderRadius: 3, background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ height: 11, width: '85%', borderRadius: 3, background: 'rgba(255,255,255,0.03)' }} />
        <div style={{ height: 11, width: '60%', borderRadius: 3, background: 'rgba(255,255,255,0.03)' }} />
      </div>
      {/* Button skeleton */}
      <div style={{ height: 40, borderRadius: 'var(--r-sm)', background: 'rgba(255,255,255,0.04)' }} />
    </motion.div>
  )
}

/* ── App Card ─────────────────────────────────────────────── */

function AppCard({ app, index }: { app: BazzarApp; index: number }) {
  const [imgError, setImgError] = useState(false)
  const [showSoon, setShowSoon] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -2 }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: 'var(--r-lg)',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: 'var(--sp-5)',
        display: 'flex', flexDirection: 'column', gap: 14,
        transition: 'border-color 200ms ease, box-shadow 200ms ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(149,51,255,0.25)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(149,51,255,0.08)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      {/* Header: icon + name/version */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <div style={{
          width: 72, height: 72, borderRadius: 'var(--r-md)',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', flexShrink: 0,
        }}>
          {app.icon_url && !imgError ? (
            <img
              src={app.icon_url}
              alt={app.name}
              width={72}
              height={72}
              style={{ objectFit: 'cover', borderRadius: 'var(--r-md)' }}
              onError={() => setImgError(true)}
            />
          ) : (
            <Package size={28} style={{ color: 'var(--text-3, #666)' }} />
          )}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem', fontWeight: 600,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {app.name}
          </h3>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, marginTop: 4, flexWrap: 'wrap',
          }}>
            <span style={{
              fontSize: '0.72rem', fontWeight: 500,
              padding: '2px 8px',
              background: 'rgba(149,51,255,0.1)',
              border: '1px solid rgba(149,51,255,0.15)',
              borderRadius: 'var(--r-full)',
              color: 'var(--accent, #9533ff)',
            }}>
              v{app.version}
            </span>
            {app.size_bytes && (
              <span style={{ fontSize: '0.72rem', color: 'var(--text-3, #666)', display: 'flex', alignItems: 'center', gap: 3 }}>
                <HardDrive size={11} /> {formatBytes(app.size_bytes)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bundle ID */}
      {app.bundle_id && (
        <div style={{
          fontSize: '0.72rem', color: 'var(--text-3, #666)',
          fontFamily: 'monospace',
          padding: '6px 10px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: 'var(--r-xs)',
          border: '1px solid rgba(255,255,255,0.04)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {app.bundle_id}
        </div>
      )}

      {/* Description */}
      {app.description && (
        <p style={{
          fontSize: '0.82rem', color: 'var(--text-2, #999)', lineHeight: 1.55,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          flex: 1,
        }}>
          {app.description}
        </p>
      )}

      {/* Download / Price button */}
      {(app.price || 0) > 0 ? (
        <div style={{ marginTop: 'auto' }}>
          {showSoon && (
            <div style={{
              padding: '10px 14px', marginBottom: 8,
              background: 'rgba(149,51,255,0.08)',
              border: '1px solid rgba(149,51,255,0.15)',
              borderRadius: 'var(--r-sm)',
              fontSize: '0.78rem', color: 'var(--text-2, #999)',
              lineHeight: 1.5, textAlign: 'center',
            }}>
              Покупка через сайт скоро будет доступна.
            </div>
          )}
          <button
            onClick={() => setShowSoon(true)}
            style={{
              width: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '11px 16px',
              background: 'linear-gradient(135deg, #af66ff, #6e00e5)',
              color: '#fff', border: 'none',
              borderRadius: 'var(--r-sm)',
              fontWeight: 600, fontSize: '0.85rem',
              fontFamily: 'inherit', cursor: 'pointer',
              transition: 'opacity 200ms ease',
            }}
          >
            Купить · {app.price} ₽
          </button>
        </div>
      ) : (
        <a
          href={app.ipa_url || '#'}
          download
          onClick={(e) => { if (!app.ipa_url) e.preventDefault() }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '11px 16px',
            background: app.ipa_url
              ? 'linear-gradient(135deg, #af66ff, #6e00e5)'
              : 'rgba(255,255,255,0.04)',
            color: app.ipa_url ? '#fff' : 'var(--text-3, #666)',
            borderRadius: 'var(--r-sm)',
            fontWeight: 600, fontSize: '0.85rem',
            textDecoration: 'none',
            cursor: app.ipa_url ? 'pointer' : 'not-allowed',
            transition: 'opacity 200ms ease, transform 100ms ease',
            marginTop: 'auto',
          }}
        >
          <Download size={16} />
          {app.ipa_url ? 'Скачать IPA' : 'Недоступно'}
        </a>
      )}
    </motion.div>
  )
}

/* ── Main Component ───────────────────────────────────────── */

export function AppsPage() {
  const { t } = useI18n()
  const [apps, setApps] = useState<BazzarApp[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchApps() {
      setLoading(true)
      const { data, error } = await supabase
        .from('bazzar_apps')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (!error && data) {
        setApps(data as BazzarApp[])
      }
      setLoading(false)
    }
    fetchApps()
  }, [])

  const filtered = useMemo(() => {
    if (!search.trim()) return apps
    const q = search.toLowerCase()
    return apps.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        (a.bundle_id && a.bundle_id.toLowerCase().includes(q)) ||
        (a.description && a.description.toLowerCase().includes(q))
    )
  }, [apps, search])

  return (
    <section className="section" style={{ paddingTop: 'clamp(100px, 14vw, 140px)', paddingBottom: 'var(--sp-16)' }}>
      <div className="container">
        {/* ── Hero Header ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'var(--sp-10)' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{
              width: 64, height: 64, borderRadius: 'var(--r-xl)',
              background: 'rgba(149,51,255,0.1)',
              border: '1px solid rgba(149,51,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}
          >
            <Sparkles size={28} style={{ color: 'var(--accent, #9533ff)' }} />
          </motion.div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 12,
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #af66ff, #6e00e5, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Библиотека приложений
            </span>
          </h1>
          <p style={{
            color: 'var(--text-2, #999)', fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            maxWidth: 480, margin: '0 auto',
          }}>
            Скачивайте IPA-файлы для установки через подпись BAZZAR
          </p>
        </motion.div>

        {/* ── Search Bar ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            maxWidth: 500, margin: '0 auto var(--sp-8)',
            display: 'flex', alignItems: 'center', gap: 12,
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 'var(--r-full)',
            padding: '0 20px',
            transition: 'border-color 200ms ease',
          }}
          onFocus={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(149,51,255,0.3)'}
          onBlur={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'}
        >
          <Search size={18} style={{ color: 'var(--text-3, #666)', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Поиск по названию, bundle ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1, padding: '14px 0',
              background: 'transparent', border: 'none', outline: 'none',
              color: 'var(--text, #fff)', fontSize: '0.9rem',
              fontFamily: 'inherit',
            }}
          />
          <AnimatePresence>
            {search && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => setSearch('')}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 4, display: 'flex', color: 'var(--text-3, #666)',
                }}
              >
                <XCircle size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Content ───────────────────────────────────────── */}
        {loading ? (
          /* Loading skeletons */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--sp-5)',
          }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} index={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              textAlign: 'center', padding: 'var(--sp-16) var(--sp-4)',
            }}
          >
            <div style={{
              width: 72, height: 72, borderRadius: 'var(--r-xl)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <Package size={32} style={{ color: 'var(--text-3, #666)' }} />
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.2rem',
              fontWeight: 600, marginBottom: 8,
            }}>
              {search
                ? 'Приложения не найдены'
                : 'Каталог пуст'
              }
            </h3>
            <p style={{ color: 'var(--text-3, #666)', fontSize: '0.88rem', maxWidth: 360, margin: '0 auto' }}>
              {search
                ? `По запросу «${search}» ничего не найдено. Попробуйте другой запрос.`
                : 'Приложения скоро появятся. Следите за обновлениями!'
              }
            </p>
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{
                  marginTop: 20,
                  padding: '10px 24px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--r-full)',
                  color: 'var(--text, #fff)',
                  fontSize: '0.85rem', fontWeight: 500,
                  cursor: 'pointer', fontFamily: 'inherit',
                  transition: 'border-color 200ms ease',
                }}
              >
                Сбросить поиск
              </button>
            )}
          </motion.div>
        ) : (
          /* App grid */
          <>
            {/* Results count */}
            <div style={{
              marginBottom: 'var(--sp-4)',
              fontSize: '0.82rem', color: 'var(--text-3, #666)',
            }}>
              {search && (
                <span>
                  Найдено: <strong style={{ color: 'var(--text-2, #999)' }}>{filtered.length}</strong>
                  {filtered.length !== apps.length && ` из ${apps.length}`}
                </span>
              )}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'var(--sp-5)',
            }}>
              {filtered.map((app, i) => (
                <AppCard key={app.id} app={app} index={i} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Shimmer keyframes (injected once) ────────────── */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
}
