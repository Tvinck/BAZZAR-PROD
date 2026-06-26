import { motion } from 'framer-motion'
import { Link, useNav } from '../ui/nav'
import { BazzarMark, BazzarWordmark, SearchIcon, CartIcon, WalletIcon, UserIcon, MenuIcon } from '../ui/Icons'

function Logo() {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 11 }} aria-label="BAZZAR MARKET">
      <motion.span whileHover={{ rotate: -6, scale: 1.06 }} transition={{ type: 'spring', stiffness: 300 }} style={{ display: 'flex' }}>
        <BazzarMark size={38} />
      </motion.span>
      <BazzarWordmark />
    </Link>
  )
}

export function Header() {
  const navigate = useNav()
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, padding: '12px 0' }}>
      <div className="container">
        <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '10px 12px 10px 18px', borderRadius: 18 }}>
          <Logo />

          {/* Поиск */}
          <div className="mobile-hide" style={{ flex: 1, position: 'relative', maxWidth: 520, marginLeft: 8 }}>
            <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)', display: 'flex' }}><SearchIcon size={18} /></span>
            <input className="field" placeholder="Игры, валюта, подписки, аккаунты…" style={{ paddingLeft: 42, height: 44, borderRadius: 12 }}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate('/catalog') }} />
          </div>

          <div style={{ flex: 1 }} className="mobile-hide" />

          {/* Баланс */}
          <Link to="/cabinet" className="chip mobile-hide" style={{ padding: '9px 14px', background: 'rgba(46,230,166,0.12)', border: '1px solid rgba(46,230,166,0.25)', color: '#5af0c2' }}>
            <WalletIcon size={16} /> 1 250 ₽
          </Link>

          {/* Корзина */}
          <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }} onClick={() => navigate('/cart')} aria-label="Корзина"
            style={{ position: 'relative', width: 44, height: 44, borderRadius: 12, background: 'var(--surface-2)', border: '1px solid var(--hair)', color: 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CartIcon size={19} />
            <span style={{ position: 'absolute', top: -5, right: -5, minWidth: 18, height: 18, padding: '0 4px', borderRadius: 9, background: 'var(--grad)', color: '#fff', fontSize: '0.68rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
          </motion.button>

          {/* Кабинет / вход */}
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/cabinet')} className="btn btn-primary mobile-hide" style={{ padding: '11px 18px' }}>
            <UserIcon size={17} /> Кабинет
          </motion.button>

          <button onClick={() => navigate('/catalog')} aria-label="Меню" style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--surface-2)', border: '1px solid var(--hair)', color: 'var(--text)', display: 'none', alignItems: 'center', justifyContent: 'center' }} className="menu-btn">
            <MenuIcon size={20} />
          </button>
        </div>
      </div>
      <style>{`@media (max-width:880px){ .menu-btn{ display:flex !important } }`}</style>
    </header>
  )
}
