import { useState, useEffect, type ReactNode } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useI18n } from './hooks/useI18n'
import { motion, AnimatePresence } from 'framer-motion'
import { Home as HomeIcon, ShoppingBag, Smartphone, User } from 'lucide-react'
import { NavProvider } from './ui/nav'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { SupportChat } from './components/SupportChat'
import { SplashScreen } from './components/SplashScreen'
import { CookieBanner } from './components/CookieBanner'
import { ErrorBoundary } from './components/ErrorBoundary'
import { LivePurchaseNotification } from './components/LivePurchaseNotification'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { Product } from './pages/Product'
import { Cabinet } from './pages/Cabinet'
// BazzarNotification removed — it's for IPA injection, not the website
import { Auth } from './pages/Auth'
import { AddDevice } from './pages/AddDevice'
import { AddDeviceSuccess } from './pages/AddDeviceSuccess'
import { Success } from './pages/Success'
import { OrderCheck } from './pages/OrderCheck'
import { HowItWorks } from './pages/HowItWorks'
import { InstallGuide } from './pages/InstallGuide'
import { Guarantees } from './pages/Guarantees'
import { Privacy } from './pages/Privacy'
import { Offer } from './pages/Offer'
import { CertDashboard } from './pages/CertDashboard'
import { Registration } from './pages/Registration'
import { AppsPage } from './pages/AppsPage'
import { GetUdid } from './pages/GetUdid'
import { Blog } from './pages/Blog'
import { Article } from './pages/Article'
import { NotFound } from './pages/NotFound'
import { initAnalytics, trackEvent } from './lib/analytics'

/* ═══════════════════════════════════════════════════════════
   RouteTracker — UTM source capture
   ═══════════════════════════════════════════════════════════ */

function RouteTracker() {
  const location = useLocation()
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const source = searchParams.get('utm_source') || searchParams.get('ref') || searchParams.get('source')
    if (source) {
      localStorage.setItem('bazzar_source', source)
    }
  }, [location])

  return null
}

/* ═══════════════════════════════════════════════════════════
   ScrollTop + Analytics
   ═══════════════════════════════════════════════════════════ */

function ScrollTopWithAnalytics() {
  const { pathname } = useLocation()
  
  useEffect(() => { 
    window.scrollTo(0, 0)
    trackEvent('views')
    // VK Pixel (Top.Mail.Ru) SPA pageView
    const _tmr = (window as any)._tmr || ((window as any)._tmr = []);
    _tmr.push({ id: "3781126", type: "pageView", url: window.location.href, referrer: document.referrer });
  }, [pathname])

  useEffect(() => {
    initAnalytics()
  }, [])
  
  return null
}

/* ═══════════════════════════════════════════════════════════
   NavBridge — Connects react-router to design system nav
   ═══════════════════════════════════════════════════════════ */

function NavBridge({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  return <NavProvider navigate={(to) => navigate(to)}>{children}</NavProvider>
}

/* ═══════════════════════════════════════════════════════════
   App — Routing, Layout, Bottom Navigation
   ═══════════════════════════════════════════════════════════ */

const NAV_ITEMS = [
  { path: '/', labelKey: 'nav.home', icon: HomeIcon },
  { path: '/catalog', labelKey: 'nav.catalog', icon: ShoppingBag },
  { path: '/catalog?category=apps', labelKey: 'nav.apps', icon: Smartphone },
  { path: '/cabinet', labelKey: 'nav.cabinet', icon: User },
]

export function App() {
  const { t } = useI18n()
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = location.pathname
  const [splashDone, setSplashDone] = useState(false)

  return (
    <NavBridge>
      <>
        {/* ── Splash Screen ─────────────────────────────────── */}
        <AnimatePresence>
          {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
        </AnimatePresence>

        <ScrollTopWithAnalytics />
        <RouteTracker />
        <Header />

        {/* Анимированные переходы между страницами */}
        <main style={{ flex: 1 }}>
          <ErrorBoundary>
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/product/:id" element={<Product />} />

                  <Route path="/cabinet" element={<Cabinet />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/add-device/success" element={<AddDeviceSuccess />} />
                  <Route path="/add-device/:ownerUdid" element={<AddDevice />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/order-check" element={<OrderCheck />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/install-guide" element={<InstallGuide />} />
                  <Route path="/guarantees" element={<Guarantees />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/offer" element={<Offer />} />
                  <Route path="/dashboard" element={<CertDashboard />} />
                  <Route path="/r/:code" element={<Registration />} />
                  <Route path="/apps" element={<AppsPage />} />
                  <Route path="/get-udid" element={<GetUdid />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<Article />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </ErrorBoundary>
        </main>

        <Footer />
        <SupportChat />
        <LivePurchaseNotification />
        <CookieBanner />
        

        {/* ── Bottom Navigation (Mobile) ─────────────────────── */}
        <nav className="bottom-nav desktop-hide" role="navigation" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = item.path === '/'
              ? pathname === '/'
              : pathname.startsWith(item.path)

            return (
              <button
                key={item.path}
                className={`bottom-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => navigate(item.path)}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Градиентная пилюля для активного таба */}
                {isActive && (
                  <motion.div
                    className="nav-pill"
                    layoutId="nav-active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={20} strokeWidth={isActive ? 2.2 : 1.8} />
                <span>{t(item.labelKey)}</span>
              </button>
            )
          })}
        </nav>
      </>
    </NavBridge>
  )
}
