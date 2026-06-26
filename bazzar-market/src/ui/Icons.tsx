/**
 * Фирменный набор иконок и логотип BAZZAR MARKET.
 *
 * Все иконки — кастомные (не lucide), единый «чанки-rounded» стиль, рисуются
 * через currentColor → работают белыми на цветных плитках и акцентными в карточках.
 * Логотип BazzarMark — отдельный градиентный знак (свой gradient id, чтобы не
 * конфликтовать при нескольких экземплярах).
 */

type P = { size?: number; className?: string }
const base = (size: number) => ({ width: size, height: size, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' as const })
const stroke = { stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

let uid = 0

/** Логотип-знак: градиентный squircle + белый «маркет-спарк». */
export function BazzarMark({ size = 38 }: { size?: number }) {
  const id = `bm${++uid}`
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c5cff" />
          <stop offset="0.55" stopColor="#c026d3" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <radialGradient id={`${id}-shine`} cx="0.7" cy="0.2" r="0.8"><stop offset="0" stopColor="#fff" /><stop offset="0.5" stopColor="#fff" stopOpacity="0" /></radialGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="14" fill={`url(#${id})`} />
      <rect x="2" y="2" width="44" height="44" rx="14" fill={`url(#${id}-shine)`} opacity="0.3" />
      {/* Сумка-маркет */}
      <path d="M14 17h20l-1.6 14.4A4 4 0 0 1 28.4 35h-8.8a4 4 0 0 1-4-3.6L14 17z" fill="#fff" fillOpacity="0.95" />
      <path d="M19 17a5 5 0 0 1 10 0" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" opacity="0.95" />
      {/* Спарк = «цифровое/моментально» */}
      <path d="M25 21l-4.5 6.2h3.2L23 33l5-7h-3.2L25 21z" fill={`url(#${id})`} />
    </svg>
  )
}

/** Текстовый логотип BAZZAR <градиент>MARKET</градиент>. */
export function BazzarWordmark({ size = '1.15rem' }: { size?: string }) {
  return (
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size, letterSpacing: '-0.03em', lineHeight: 1 }}>
      BAZZAR<span className="grad-text"> MARKET</span>
    </span>
  )
}

/* ── UI-иконки ─────────────────────────────────────────────────────────── */

export const SearchIcon = ({ size = 24 }: P) => (<svg {...base(size)}><circle cx="11" cy="11" r="6.5" {...stroke} /><path d="M20 20l-4-4" {...stroke} /></svg>)

export const CartIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M3 4h2.2l1.2 12.2a2 2 0 0 0 2 1.8h8.4a2 2 0 0 0 2-1.6L21 8H6" {...stroke} /><circle cx="9" cy="21" r="1.4" fill="currentColor" /><circle cx="18" cy="21" r="1.4" fill="currentColor" /></svg>)

export const WalletIcon = ({ size = 24 }: P) => (<svg {...base(size)}><rect x="3" y="6" width="18" height="13" rx="3.5" {...stroke} /><path d="M3 10h18" {...stroke} /><circle cx="16.5" cy="14" r="1.4" fill="currentColor" /></svg>)

export const UserIcon = ({ size = 24 }: P) => (<svg {...base(size)}><circle cx="12" cy="8.5" r="3.6" {...stroke} /><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" {...stroke} /></svg>)

export const MenuIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M4 7h16M4 12h16M4 17h11" {...stroke} /></svg>)

export const BoltIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M13.5 2.5L5 13.5h5.5L9.5 21.5 19 10.5h-5.5l1.5-8z" fill="currentColor" /></svg>)

export const ShieldIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M12 3l7 3v5.5c0 4.6-3 7.8-7 9-4-1.2-7-4.4-7-9V6l7-3z" {...stroke} /><path d="M9 12l2 2 4-4.5" {...stroke} /></svg>)

export const PercentIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M6 18L18 6" {...stroke} /><circle cx="8" cy="8" r="2.4" {...stroke} /><circle cx="16" cy="16" r="2.4" {...stroke} /></svg>)

export const HeadsetIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M5 13v-1a7 7 0 0 1 14 0v1" {...stroke} /><rect x="3.5" y="13" width="3.5" height="6" rx="1.6" {...stroke} /><rect x="17" y="13" width="3.5" height="6" rx="1.6" {...stroke} /><path d="M19 19a4 4 0 0 1-4 3h-2" {...stroke} /></svg>)

export const GiftIcon = ({ size = 24 }: P) => (<svg {...base(size)}><rect x="4" y="9" width="16" height="12" rx="2" {...stroke} /><path d="M3 9h18M12 9v12" {...stroke} /><path d="M12 9C9 9 7 7.5 8 5.5S12 6 12 9zM12 9c3 0 5-1.5 4-3.5S12 6 12 9z" {...stroke} /></svg>)

export const StarIcon = ({ size = 24, className }: P) => (<svg {...base(size)} className={className}><path d="M12 3.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.6l5.9-.8L12 3.5z" fill="currentColor" /></svg>)

export const PackageIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M12 3l8 4.2v9.6L12 21l-8-4.2V7.2L12 3z" {...stroke} /><path d="M4.2 7.4L12 11.5l7.8-4.1M12 11.5V21" {...stroke} /></svg>)

export const SparkIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M12 3c.7 4 2.6 5.9 6.5 6.5-3.9.7-5.8 2.6-6.5 6.5-.7-3.9-2.6-5.8-6.5-6.5C9.4 8.9 11.3 7 12 3z" fill="currentColor" /></svg>)

export const PlusIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M12 5v14M5 12h14" {...stroke} /></svg>)

export const MinusIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M5 12h14" {...stroke} /></svg>)

export const CheckIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>)

export const CopyIcon = ({ size = 24 }: P) => (<svg {...base(size)}><rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2.4" {...stroke} /><path d="M15.5 8.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h2.5" {...stroke} /></svg>)

export const SettingsIcon = ({ size = 24 }: P) => (<svg {...base(size)}><circle cx="12" cy="12" r="3.2" {...stroke} /><path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7" {...stroke} /></svg>)

export const LogOutIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M13 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7" {...stroke} /><path d="M16 8l4 4-4 4M10 12h10" {...stroke} /></svg>)

export const VerifyIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M12 2.5l2.4 1.7 2.9-.2 1 2.8 2.4 1.7-.9 2.8.9 2.8-2.4 1.7-1 2.8-2.9-.2L12 21.5l-2.4-1.7-2.9.2-1-2.8L3.3 15.5l.9-2.8-.9-2.8 2.4-1.7 1-2.8 2.9.2L12 2.5z" {...stroke} /><path d="M8.6 12.2l2.2 2.2 4.4-4.6" {...stroke} /></svg>)

export const HeartIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M12 20.3l-1.3-1.2C6 14.9 3 12.2 3 8.9 3 6.3 5 4.4 7.5 4.4c1.5 0 2.9.7 3.8 1.9l.7.9.7-.9c.9-1.2 2.3-1.9 3.8-1.9C21 4.4 23 6.3 23 8.9c0 3.3-3 6-7.7 10.2L12 20.3z" {...stroke} /></svg>)

export const TagIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M11.3 4H5.5A1.5 1.5 0 0 0 4 5.5v5.8a2 2 0 0 0 .6 1.4l7.5 7.5a1.6 1.6 0 0 0 2.3 0l5.4-5.4a1.6 1.6 0 0 0 0-2.3l-7.5-7.5a2 2 0 0 0-1.4-.6z" {...stroke} /><circle cx="8.2" cy="8.2" r="1.4" fill="currentColor" /></svg>)

export const TrashIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M4 7h16M9.5 7V5a1.4 1.4 0 0 1 1.4-1.4h2.2A1.4 1.4 0 0 1 14.5 5v2M6.5 7l1 12.2a2 2 0 0 0 2 1.8h5a2 2 0 0 0 2-1.8L17.5 7M10 11v6M14 11v6" {...stroke} /></svg>)

export const SlidersIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M4 8h9M19 8h1M4 16h1M11 16h9" {...stroke} /><circle cx="15.5" cy="8" r="2.3" {...stroke} /><circle cx="8" cy="16" r="2.3" {...stroke} /></svg>)

export const ChevronRightIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M9 6l6 6-6 6" {...stroke} /></svg>)

/* ── Иконки категорий ──────────────────────────────────────────────────── */

export const CoinIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M6 3h12l4 6-10 12L2 9z" {...stroke} /><path d="M2 9h20M9 9l3 12 3-12M6 3l3 6M18 3l-3 6" {...stroke} /></svg>)

export const SteamTopupIcon = ({ size = 24 }: P) => (<svg {...base(size)}><circle cx="12" cy="12" r="8.5" {...stroke} /><path d="M12 8v8M8 12h8" {...stroke} /></svg>)

export const AccountIcon = ({ size = 24 }: P) => (<svg {...base(size)}><rect x="3" y="5" width="18" height="14" rx="3" {...stroke} /><circle cx="9" cy="11" r="2.2" {...stroke} /><path d="M5.8 16c.4-1.8 1.7-2.6 3.2-2.6s2.8.8 3.2 2.6M14.5 10h4M14.5 13.5h4" {...stroke} /></svg>)

export const ClockIcon = ({ size = 24 }: P) => (<svg {...base(size)}><circle cx="12" cy="12.5" r="8" {...stroke} /><path d="M12 8.5v4l2.5 2M9 3h6" {...stroke} /></svg>)

export const AppleIcon = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M16 12.5c0-2.3 1.8-3.4 1.9-3.5-1-1.5-2.6-1.7-3.2-1.8-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.9-3.6 2.2-1.5 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1.1 2.6-2.1.5-.8.8-1.5 1-1.9-2.3-.9-2.3-3.3-1.8-4z" {...stroke} /><path d="M13.5 5.6c.6-.7 1-1.7.9-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.8 2.5.9.1 1.8-.5 2.4-1.2z" fill="currentColor" /></svg>)

export const SubsIcon = ({ size = 24 }: P) => (<svg {...base(size)}><rect x="3" y="4.5" width="18" height="12" rx="2.5" {...stroke} /><path d="M8 20h8M12 16.5V20" {...stroke} /><path d="M10.5 8.2l4 2.3-4 2.3V8.2z" fill="currentColor" /></svg>)

export const KeyIcon = ({ size = 24 }: P) => (<svg {...base(size)}><circle cx="8" cy="8" r="4" {...stroke} /><path d="M10.8 10.8L20 20M17 17l2-2M14.5 14.5l2-2" {...stroke} /></svg>)

export const ConsoleIcon = ({ size = 24 }: P) => (<svg {...base(size)}><rect x="2.5" y="8" width="19" height="9.5" rx="4.75" {...stroke} /><path d="M7 11.5v3M5.5 13h3" {...stroke} /><circle cx="16" cy="12" r="1" fill="currentColor" /><circle cx="18.5" cy="14" r="1" fill="currentColor" /></svg>)

/** id категории → иконка (для плиток и фильтров). */
export const CATEGORY_ICON: Record<string, (p: P) => JSX.Element> = {
  steam: SteamTopupIcon,
  currency: CoinIcon,
  accounts: AccountIcon,
  rent: ClockIcon,
  apple: AppleIcon,
  subs: SubsIcon,
  keys: KeyIcon,
  console: ConsoleIcon,
}
