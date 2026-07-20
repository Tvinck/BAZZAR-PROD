import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, ShieldCheck, ShieldAlert, Clock, Smartphone, Copy, Check, ArrowRight, RefreshCcw, AlertTriangle, Wifi, LogIn, Loader } from 'lucide-react'
import { usePageTitle } from '../hooks/usePageTitle'
import { useToast } from '../components/Toast'
import { useI18n } from '../hooks/useI18n'
import { supabase } from '../lib/supabase'

/* ═══════════════════════════════════════════════════════════
   CertDashboard — Панель статуса сертификата
   Real data: Supabase → apple_certificates table
   ═══════════════════════════════════════════════════════════ */

type CertStatus = 'active' | 'expiring' | 'revoked'

interface CertData {
  id: string
  type: string
  status: CertStatus
  udid: string
  deviceName: string
  iosVersion: string
  issuedAt: string
  expiresAt: string
  daysLeft: number
  profiles: string[]
  appsInstalled: number
  p12Url?: string | null
}

/**
 * Маппит статус из БД (active/revoked/expired) в UI-статус (active/expiring/revoked).
 * Также учитывает оставшиеся дни — если менее 14 дней, считаем «expiring».
 */
function mapCertStatus(dbStatus: string, daysLeft: number): CertStatus {
  if (dbStatus === 'revoked' || dbStatus === 'expired') return 'revoked'
  if (daysLeft <= 14) return 'expiring'
  return 'active'
}

/**
 * Вычисляет количество оставшихся дней до expires_at.
 */
function calcDaysLeft(expiresAt: string): number {
  const diff = new Date(expiresAt).getTime() - Date.now()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

/**
 * Определяет имя устройства и iOS-версию по модели из localStorage.
 */
function getDeviceInfo(): { deviceName: string; iosVersion: string } {
  const model = localStorage.getItem('apple_device_model')
  if (model) {
    return { deviceName: model, iosVersion: '' }
  }
  return { deviceName: 'Apple Device', iosVersion: '' }
}

export function CertDashboard() {
  const { t } = useI18n()
  usePageTitle(t('dashboard.title'))
  const navigate = useNavigate()
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const { toast } = useToast()

  const [certs, setCerts] = useState<CertData[]>([])
  const [loading, setLoading] = useState(true)
  const [noUdid, setNoUdid] = useState(false)

  const STATUS_CONFIG = {
    active: {
      label: t('dashboard.cert.active'),
      color: '#22c55e',
      bg: 'rgba(34,197,94,0.08)',
      border: 'rgba(34,197,94,0.2)',
      icon: ShieldCheck,
      glow: 'rgba(34,197,94,0.15)',
    },
    expiring: {
      label: t('dashboard.cert.expiring'),
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.08)',
      border: 'rgba(245,158,11,0.2)',
      icon: ShieldAlert,
      glow: 'rgba(245,158,11,0.15)',
    },
    revoked: {
      label: t('dashboard.cert.revoked'),
      color: '#ef4444',
      bg: 'rgba(239,68,68,0.08)',
      border: 'rgba(239,68,68,0.2)',
      icon: AlertTriangle,
      glow: 'rgba(239,68,68,0.15)',
    },
  }

  useEffect(() => {
    const udid = localStorage.getItem('apple_udid')
    if (!udid) {
      setNoUdid(true)
      setLoading(false)
      return
    }

    let isMounted = true

    async function fetchCerts() {
      try {
        const { data, error } = await supabase
          .from('apple_certificates')
          .select('*')
          .eq('udid', udid)

        if (error) {
          console.error('CertDashboard fetch error:', error)
          if (isMounted) setLoading(false)
          return
        }

        if (!data || data.length === 0) {
          if (isMounted) {
            setCerts([])
            setLoading(false)
          }
          return
        }

        const deviceInfo = getDeviceInfo()

        const mapped: CertData[] = data.map((row: any) => {
          const daysLeft = row.expires_at ? calcDaysLeft(row.expires_at) : 0
          const dbStatus = row.status || 'active'
          const uiStatus = mapCertStatus(dbStatus, daysLeft)

          return {
            id: row.id || row.cert_name || 'CERT-UNKNOWN',
            type: row.cert_name || row.plan_id || 'Сертификат Apple',
            status: uiStatus,
            udid: row.udid,
            deviceName: deviceInfo.deviceName,
            iosVersion: deviceInfo.iosVersion,
            issuedAt: row.issued_at || row.created_at || '',
            expiresAt: row.expires_at || '',
            daysLeft,
            profiles: row.profiles ? (Array.isArray(row.profiles) ? row.profiles : [row.profiles]) : ['Development'],
            appsInstalled: row.apps_installed || 0,
            p12Url: row.p12_url || null,
          }
        })

        if (isMounted) {
          setCerts(mapped)
          setLoading(false)
        }
      } catch (err) {
        console.error('CertDashboard error:', err)
        if (isMounted) setLoading(false)
      }
    }

    fetchCerts()
    return () => { isMounted = false }
  }, [])

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(text)
    toast(`${label} скопирован`, 'success')
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Статистика
  const activeCount = certs.filter(c => c.status === 'active').length
  const expiringCount = certs.filter(c => c.status === 'expiring').length
  const totalDevices = certs.length
  const allOk = certs.length > 0 && certs.every(c => c.status === 'active')

  // ─── Состояние: нет UDID → промпт логина ───
  if (noUdid) {
    return (
      <section className="section" style={{ paddingTop: 'clamp(100px, 14vw, 140px)' }}>
        <div className="container" style={{ maxWidth: 540 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
            style={{ padding: 'clamp(32px, 5vw, 48px)', textAlign: 'center' }}
          >
            <div style={{
              width: 64, height: 64, borderRadius: 'var(--r-xl)',
              background: 'rgba(149,51,255,0.1)', border: '1px solid rgba(149,51,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <LogIn size={28} style={{ color: 'var(--accent)' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', marginBottom: 10 }}>
              Авторизация не пройдена
            </h2>
            <p style={{ color: 'var(--text-3)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: 380, margin: '0 auto 24px' }}>
              Для просмотра сертификатов необходимо привязать устройство. Перейдите по ссылке ниже с Safari на вашем iPhone/iPad.
            </p>
            <a
              href="/api/udid/generate"
              className="btn btn-gradient"
              style={{ fontSize: '0.9rem', gap: 8 }}
            >
              <Smartphone size={18} /> Привязать устройство
            </a>
            <div style={{ marginTop: 16 }}>
              <Link to="/catalog" className="btn btn-ghost" style={{ fontSize: '0.82rem', gap: 4 }}>
                Каталог <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  // ─── Состояние: загрузка ───
  if (loading) {
    return (
      <section className="section" style={{ paddingTop: 'clamp(100px, 14vw, 140px)' }}>
        <div className="container" style={{ maxWidth: 860, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ padding: 'var(--sp-12)' }}
          >
            <Loader size={36} style={{ color: 'var(--accent)', animation: 'spin 1.5s linear infinite' }} />
            <p style={{ color: 'var(--text-3)', marginTop: 16, fontSize: '0.9rem' }}>Загрузка сертификатов…</p>
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section" style={{ paddingTop: 'clamp(100px, 14vw, 140px)' }}>
      <div className="container" style={{ maxWidth: 860 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 'var(--r-lg)',
              background: 'rgba(149,51,255,0.1)',
              border: '1px solid rgba(149,51,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Shield size={22} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <h1 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)' }}>{t('dashboard.heading')}</h1>
              <p style={{ color: 'var(--text-3)', fontSize: '0.85rem', marginTop: 4 }}>
                {t('dashboard.sub')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Status overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 12,
            marginTop: 24,
            marginBottom: 32,
          }}
        >
          {[
            { icon: ShieldCheck, label: t('dashboard.stat.active'), value: String(activeCount), color: '#22c55e' },
            { icon: Clock, label: t('dashboard.stat.expiring'), value: String(expiringCount), color: '#f59e0b' },
            { icon: Smartphone, label: t('dashboard.stat.devices'), value: String(totalDevices), color: 'var(--accent)' },
            { icon: Wifi, label: t('dashboard.stat.ok'), value: allOk ? '✓' : '—', color: allOk ? '#22c55e' : 'var(--text-3)' },
          ].map((stat, i) => (
            <div key={i} className="card" style={{
              padding: '16px 20px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <stat.icon size={20} style={{ color: stat.color, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: stat.color }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-3)', marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certificates */}
        {certs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card"
            style={{ padding: 'clamp(32px, 5vw, 48px)', textAlign: 'center' }}
          >
            <Shield size={44} style={{ color: 'var(--text-3)', marginBottom: 16, opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>Сертификаты не найдены</h3>
            <p style={{ color: 'var(--text-3)', fontSize: '0.85rem', maxWidth: 360, margin: '0 auto', lineHeight: 1.6 }}>
              У вашего устройства пока нет активных сертификатов. Приобретите сертификат в нашем каталоге.
            </p>
            <Link to="/catalog?category=certs" className="btn btn-gradient" style={{ marginTop: 20, gap: 6 }}>
              Каталог сертификатов <ArrowRight size={16} />
            </Link>
          </motion.div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {certs.map((cert, idx) => {
              const cfg = STATUS_CONFIG[cert.status]
              const StatusIcon = cfg.icon
              // Вычисляем прогресс на основе дней от issuedAt до expiresAt
              const totalDays = cert.issuedAt && cert.expiresAt
                ? Math.max(1, Math.ceil((new Date(cert.expiresAt).getTime() - new Date(cert.issuedAt).getTime()) / (1000 * 60 * 60 * 24)))
                : 365
              const progress = Math.min(1, Math.max(0, cert.daysLeft / totalDays))

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="card"
                  style={{
                    padding: 'clamp(20px, 3vw, 28px)',
                    border: `1px solid ${cfg.border}`,
                    boxShadow: `0 0 30px ${cfg.glow}`,
                  }}
                >
                  {/* Cert Header */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: 12, flexWrap: 'wrap', marginBottom: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 'var(--r-md)',
                        background: cfg.bg, border: `1px solid ${cfg.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <StatusIcon size={20} style={{ color: cfg.color }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '1rem' }}>{cert.type}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-3)', marginTop: 2 }}>
                          {typeof cert.id === 'string' && cert.id.length > 20
                            ? cert.id.substring(0, 8) + '…'
                            : cert.id}
                        </div>
                      </div>
                    </div>
                    <span style={{
                      padding: '5px 14px', borderRadius: 'var(--r-full)',
                      background: cfg.bg, border: `1px solid ${cfg.border}`,
                      color: cfg.color, fontSize: '0.75rem', fontWeight: 700,
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: cfg.color,
                        boxShadow: `0 0 8px ${cfg.color}`,
                        animation: cert.status === 'active' ? 'pulse 2s infinite' : 'none',
                      }} />
                      {cfg.label}
                    </span>
                  </div>

                  {/* Info Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 16, marginBottom: 20,
                  }}>
                    {/* Device */}
                    <div style={{
                      padding: 14, borderRadius: 'var(--r-md)',
                      background: 'var(--surface-2)', border: '1px solid var(--border)',
                    }}>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                        {t('dashboard.cert.deviceLabel')}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Smartphone size={16} style={{ color: 'var(--accent)' }} />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{cert.deviceName}</div>
                          {cert.iosVersion && (
                            <div style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>{cert.iosVersion}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* UDID */}
                    <div style={{
                      padding: 14, borderRadius: 'var(--r-md)',
                      background: 'var(--surface-2)', border: '1px solid var(--border)',
                    }}>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                        UDID
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <code style={{
                          fontSize: '0.72rem', color: 'var(--text-2)',
                          fontFamily: 'monospace', overflow: 'hidden',
                          textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1,
                        }}>
                          {cert.udid}
                        </code>
                        <button
                          onClick={() => copyToClipboard(cert.udid, 'UDID')}
                          style={{
                            padding: 4, borderRadius: 'var(--r-sm)',
                            background: 'transparent', border: 'none',
                            color: copiedId === cert.udid ? '#22c55e' : 'var(--text-3)',
                            cursor: 'pointer', flexShrink: 0,
                          }}
                        >
                          {copiedId === cert.udid ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>

                    {/* Dates */}
                    <div style={{
                      padding: 14, borderRadius: 'var(--r-md)',
                      background: 'var(--surface-2)', border: '1px solid var(--border)',
                    }}>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                        {t('dashboard.cert.validity')}
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                        {cert.issuedAt ? new Date(cert.issuedAt).toLocaleDateString('ru-RU') : '—'} → {cert.expiresAt ? new Date(cert.expiresAt).toLocaleDateString('ru-RU') : '—'}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: cfg.color, marginTop: 4, fontWeight: 600 }}>
                        {cert.daysLeft} {cert.daysLeft > 4 ? t('dashboard.cert.daysLeft5') : cert.daysLeft > 1 ? t('dashboard.cert.daysLeft2') : t('dashboard.cert.daysLeft1')} {t('dashboard.cert.left')}
                      </div>
                    </div>

                    {/* Apps / Profiles */}
                    <div style={{
                      padding: 14, borderRadius: 'var(--r-md)',
                      background: 'var(--surface-2)', border: '1px solid var(--border)',
                    }}>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                        {t('dashboard.cert.profiles')}
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                        {cert.profiles.join(', ')}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-3)', marginTop: 4 }}>
                        {cert.appsInstalled} {t('dashboard.cert.appsInstalled')}
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>{t('dashboard.cert.validity')}</span>
                      <span style={{ fontSize: '0.72rem', color: cfg.color, fontWeight: 600 }}>
                        {Math.round(progress * 100)}%
                      </span>
                    </div>
                    <div style={{
                      height: 6, borderRadius: 'var(--r-full)',
                      background: 'var(--surface-2)',
                      overflow: 'hidden',
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                          height: '100%',
                          borderRadius: 'var(--r-full)',
                          background: `linear-gradient(90deg, ${cfg.color}, ${cfg.color}88)`,
                          boxShadow: `0 0 12px ${cfg.color}40`,
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {cert.status === 'expiring' && (
                      <Link to="/catalog?category=certs" className="btn btn-gradient" style={{ fontSize: '0.8rem', gap: 6 }}>
                        <RefreshCcw size={14} /> {t('dashboard.cert.renew')}
                      </Link>
                    )}
                    <button
                      onClick={() => copyToClipboard(cert.id, t('dashboard.cert.copiedId'))}
                      className="btn btn-ghost"
                      style={{ fontSize: '0.8rem', gap: 6 }}
                    >
                      {copiedId === cert.id ? <Check size={14} /> : <Copy size={14} />}
                      {t('dashboard.cert.copyId')}
                    </button>
                    {cert.p12Url && (
                      <a
                        href={cert.p12Url}
                        download
                        className="btn btn-ghost"
                        style={{ fontSize: '0.8rem', gap: 6 }}
                      >
                        Скачать .p12
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            textAlign: 'center', marginTop: 40,
            padding: 'var(--sp-8)', borderRadius: 'var(--r-xl)',
            background: 'var(--surface)', border: '1px solid var(--border)',
          }}
        >
          <h3 style={{ marginBottom: 8 }}>{t('dashboard.cta.title')}</h3>
          <p style={{ color: 'var(--text-3)', fontSize: '0.85rem', marginBottom: 16 }}>
            {t('dashboard.cta.desc')}
          </p>
          <Link to="/catalog?category=certs" className="btn btn-gradient" style={{ gap: 6 }}>
            {t('dashboard.cta.btn')} <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
