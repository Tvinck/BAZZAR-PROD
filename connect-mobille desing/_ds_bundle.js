/* @ds-bundle: {"format":4,"namespace":"ConnectMobileDesignSystem_60c434","components":[{"name":"ChatBubble","sourcePath":"components/content/ChatBubble.jsx"},{"name":"IconTile","sourcePath":"components/content/IconTile.jsx"},{"name":"ListRow","sourcePath":"components/content/ListRow.jsx"},{"name":"NotificationItem","sourcePath":"components/content/NotificationItem.jsx"},{"name":"ProjectPicker","sourcePath":"components/content/ProjectPicker.jsx"},{"name":"PromoBanner","sourcePath":"components/content/PromoBanner.jsx"},{"name":"ServiceTile","sourcePath":"components/content/ServiceTile.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"NavBar","sourcePath":"components/layout/NavBar.jsx"},{"name":"TabBar","sourcePath":"components/layout/TabBar.jsx"},{"name":"ChatScreen","sourcePath":"ui_kits/connect-mobile/ChatScreen.jsx"},{"name":"ClientLineScreen","sourcePath":"ui_kits/connect-mobile/ClientLineScreen.jsx"},{"name":"ComingSoonScreen","sourcePath":"ui_kits/connect-mobile/ComingSoonScreen.jsx"},{"name":"FinancesScreen","sourcePath":"ui_kits/connect-mobile/FinancesScreen.jsx"},{"name":"HomeScreen","sourcePath":"ui_kits/connect-mobile/HomeScreen.jsx"},{"name":"LoginScreen","sourcePath":"ui_kits/connect-mobile/LoginScreen.jsx"},{"name":"MoreScreen","sourcePath":"ui_kits/connect-mobile/MoreScreen.jsx"},{"name":"NewsScreen","sourcePath":"ui_kits/connect-mobile/NewsScreen.jsx"},{"name":"NotificationsScreen","sourcePath":"ui_kits/connect-mobile/NotificationsScreen.jsx"},{"name":"OrdersScreen","sourcePath":"ui_kits/connect-mobile/OrdersScreen.jsx"},{"name":"ServicesHRScreen","sourcePath":"ui_kits/connect-mobile/ServicesHRScreen.jsx"},{"name":"UsefulServicesScreen","sourcePath":"ui_kits/connect-mobile/UsefulServicesScreen.jsx"},{"name":"WelcomeScreen","sourcePath":"ui_kits/connect-mobile/WelcomeScreen.jsx"}],"sourceHashes":{"components/content/ChatBubble.jsx":"3604e13a3aef","components/content/IconTile.jsx":"fa818879b10c","components/content/ListRow.jsx":"446e5b2c75b1","components/content/NotificationItem.jsx":"a97ab3d7ac36","components/content/ProjectPicker.jsx":"cbf14228e3a5","components/content/PromoBanner.jsx":"7171f86a4ac8","components/content/ServiceTile.jsx":"a86246756ee1","components/content/StatCard.jsx":"6071a3669da7","components/core/Badge.jsx":"5b89fb56ff22","components/core/Button.jsx":"72ba7d7f8355","components/core/Field.jsx":"dd9036e90efe","components/core/Icon.jsx":"37aad0221f5e","components/core/Switch.jsx":"41daa75a7e2c","components/layout/Card.jsx":"fd5c483f53da","components/layout/NavBar.jsx":"82c59f434b7e","components/layout/TabBar.jsx":"33288c824d0e","ui_kits/connect-mobile/ChatScreen.jsx":"cac9aeff61d4","ui_kits/connect-mobile/ClientLineScreen.jsx":"0fc61182ff73","ui_kits/connect-mobile/ComingSoonScreen.jsx":"aa9331336887","ui_kits/connect-mobile/FinancesScreen.jsx":"969e8189a975","ui_kits/connect-mobile/HomeScreen.jsx":"5594e726db3b","ui_kits/connect-mobile/LoginScreen.jsx":"83e5ee1e1437","ui_kits/connect-mobile/MoreScreen.jsx":"1b379119693e","ui_kits/connect-mobile/NewsScreen.jsx":"66ce3d8a2e05","ui_kits/connect-mobile/NotificationsScreen.jsx":"5a8d2880dc84","ui_kits/connect-mobile/OrdersScreen.jsx":"91b353427bbb","ui_kits/connect-mobile/ServicesHRScreen.jsx":"5a5c4278f6ec","ui_kits/connect-mobile/UsefulServicesScreen.jsx":"f1e7125549c6","ui_kits/connect-mobile/WelcomeScreen.jsx":"1ac0cd7fe8e5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ConnectMobileDesignSystem_60c434 = window.ConnectMobileDesignSystem_60c434 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ChatBubble.jsx
try { (() => {
// Messenger bubble — blue for own messages, dark gray for others.
function ChatBubble({
  mine = false,
  author,
  authorColor = 'var(--accent)',
  children,
  time,
  read = false,
  avatar
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-end',
      justifyContent: mine ? 'flex-end' : 'flex-start',
      fontFamily: 'var(--font-sans)'
    }
  }, !mine && avatar ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--surface-3)',
      color: 'var(--text-2)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 600,
      flexShrink: 0
    }
  }, avatar) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78%',
      padding: '9px 14px',
      borderRadius: 18,
      borderBottomRightRadius: mine ? 6 : 18,
      borderBottomLeftRadius: mine ? 18 : 6,
      background: mine ? 'var(--accent)' : 'var(--surface-2)',
      color: mine ? '#fff' : 'var(--text)',
      fontSize: 'var(--fs-subhead)',
      lineHeight: 'var(--lh-body)'
    }
  }, !mine && author ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-footnote)',
      fontWeight: 'var(--fw-semibold)',
      color: authorColor,
      marginBottom: 2
    }
  }, author) : null, children, time ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: mine ? 'rgba(255,255,255,0.7)' : 'var(--text-3)',
      marginLeft: 8,
      whiteSpace: 'nowrap'
    }
  }, time, mine && read ? ' ✓✓' : '') : null));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
// Status badge — small rounded label, dim tinted fill + colored text.
const badgeTones = {
  neutral: {
    background: 'var(--surface-2)',
    color: 'var(--text-2)'
  },
  blue: {
    background: 'var(--accent-dim)',
    color: 'var(--accent)'
  },
  green: {
    background: 'var(--green-dim)',
    color: '#4cd964'
  },
  red: {
    background: 'var(--red-dim)',
    color: 'var(--red)'
  },
  amber: {
    background: 'var(--amber-dim)',
    color: 'var(--amber)'
  },
  violet: {
    background: 'var(--violet-dim)',
    color: 'var(--violet)'
  }
};
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '3px 8px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-footnote)',
      fontWeight: 'var(--fw-semibold)'
    }, badgeTones[tone] || badgeTones.neutral, style)
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React; // Connect Mobile buttons. Variants observed in product photos:
// primary  — yellow CTA fill ("Начать разметку")
// tonal    — dark inner fill with blue text ("Начать работу")
// plain    — blue text on transparent ("Выйти из приложения" body)
// blue     — solid accent fill (chat send, confirmations)
function Button({
  variant = 'primary',
  children,
  icon,
  block = false,
  disabled = false,
  onClick,
  style
}) {
  const [pressed, setPressed] = useState(false);
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '15px 24px',
    border: 'none',
    borderRadius: 'var(--radius)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--fs-headline)',
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 'var(--lh-tight)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.4 : pressed ? 0.75 : 1,
    transform: pressed ? 'scale(0.98)' : 'none',
    transition: 'opacity 0.15s, transform 0.15s'
  };
  const variants = {
    primary: {
      background: 'var(--yellow)',
      color: 'var(--on-yellow)'
    },
    tonal: {
      background: 'var(--surface-2)',
      color: 'var(--accent)'
    },
    plain: {
      background: 'transparent',
      color: 'var(--accent)',
      padding: '15px 12px'
    },
    blue: {
      background: 'var(--accent)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    style: Object.assign({}, base, variants[variant] || variants.primary, style),
    disabled: disabled,
    onClick: onClick,
    onPointerDown: function () {
      setPressed(true);
    },
    onPointerUp: function () {
      setPressed(false);
    },
    onPointerLeave: function () {
      setPressed(false);
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
// Text input — dark rounded field (chat composer "Сообщение", login form).
function Field({
  value,
  defaultValue,
  onChange,
  placeholder,
  type = 'text',
  style
}) {
  return /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange,
    style: Object.assign({
      width: '100%',
      background: 'var(--surface-2)',
      border: '1px solid var(--hair)',
      color: 'var(--text)',
      padding: '12px 16px',
      borderRadius: 'var(--radius)',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)'
    }, style)
  });
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Renders a Lucide icon from the UMD build (window.lucide).
// Load <script src="https://unpkg.com/lucide@0.462.0/dist/umd/lucide.min.js"></script> before use.
function toPascal(name) {
  return String(name).split('-').map(s => s ? s[0].toUpperCase() + s.slice(1) : s).join('');
}
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
  style
}) {
  const lib = typeof window !== 'undefined' ? window.lucide || null : null;
  const iconSet = lib ? lib.icons || lib : null;
  const node = iconSet ? iconSet[toPascal(name)] || iconSet[name] : null;
  // lucide icon node is ["svg", svgAttrs, [ [tag, attrs], ... ]]
  const childList = node && Array.isArray(node[2]) ? node[2] : null;
  if (!childList) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: size,
        height: size,
        ...style
      }
    });
  }
  const kids = childList.map(function (entry, i) {
    const tag = entry[0];
    const attrs = entry[1] || {};
    return React.createElement(tag, Object.assign({
      key: i
    }, attrs));
  });
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, kids);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/IconTile.jsx
try { (() => {
// App-icon-style tile: rounded square with tinted fill + white/colored glyph.
// Used inside ListRow, ServiceTile, NotificationItem.
function IconTile({
  icon,
  color = 'var(--text-2)',
  bg = 'var(--surface-3)',
  size = 44,
  radius = 12,
  iconSize
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      background: bg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize || Math.round(size * 0.5),
    color: color,
    strokeWidth: 2
  }));
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/content/ListRow.jsx
try { (() => {
// List row — icon tile + title (+subtitle) + chevron. Services lists, help & support.
function ListRow({
  icon,
  iconBg,
  iconColor,
  title,
  subtitle,
  onClick,
  right,
  chevron = true
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '10px 0',
      cursor: onClick ? 'pointer' : 'default',
      textAlign: 'left',
      color: 'var(--text)',
      fontFamily: 'var(--font-sans)'
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    bg: iconBg,
    color: iconColor
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-tight)'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-subhead)',
      color: 'var(--text-2)',
      marginTop: 3,
      lineHeight: 'var(--lh-body)'
    }
  }, subtitle) : null), right, chevron ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--text-3)",
    strokeWidth: 2.5
  }) : null);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/content/NotificationItem.jsx
try { (() => {
// Notification card — meta line (category • date • time), bold title, gray body.
function NotificationItem({
  category,
  date,
  time,
  title,
  text,
  icon = 'newspaper',
  iconColor = 'var(--amber)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      gap: 14,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    bg: "var(--surface-3)",
    color: iconColor,
    size: 44,
    radius: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-subhead)',
      color: 'var(--text-3)',
      marginBottom: 4
    }
  }, category, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 2px'
    }
  }, "\u2022"), " ", date, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 2px'
    }
  }, "\u2022"), " ", time), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-headline)',
      fontWeight: 'var(--fw-bold)',
      marginBottom: 4,
      lineHeight: 'var(--lh-tight)'
    }
  }, title) : null, text ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-subhead)',
      color: 'var(--text-2)',
      lineHeight: 'var(--lh-body)'
    }
  }, text) : null));
}
Object.assign(__ds_scope, { NotificationItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NotificationItem.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectPicker.jsx
try { (() => {
const {
  useState
} = React;
// Project switcher chip — sits above the home-screen title. Tap to open a dark menu.
function ProjectPicker({
  projects,
  value,
  onChange
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setOpen(!open);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--surface)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 14px',
      color: 'var(--text)',
      fontSize: 'var(--fs-subhead)',
      fontWeight: 'var(--fw-semibold)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--green)',
      display: 'inline-block'
    }
  }), value, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--text-2)",
    strokeWidth: 2.5,
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.15s'
    }
  })), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      left: 0,
      minWidth: 200,
      background: 'var(--surface-2)',
      borderRadius: 'var(--radius)',
      padding: 6,
      zIndex: 100,
      boxShadow: '0 12px 32px rgba(0,0,0,0.6)'
    }
  }, projects.map(function (p) {
    const active = p === value;
    return /*#__PURE__*/React.createElement("button", {
      key: p,
      onClick: function () {
        setOpen(false);
        if (onChange) onChange(p);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        background: 'none',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        padding: '11px 12px',
        color: 'var(--text)',
        fontSize: 'var(--fs-subhead)',
        fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-regular)',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        textAlign: 'left'
      }
    }, p, active ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16,
      color: "var(--accent)",
      strokeWidth: 2.5
    }) : null);
  })) : null);
}
Object.assign(__ds_scope, { ProjectPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectPicker.jsx", error: String((e && e.message) || e) }); }

// components/content/PromoBanner.jsx
try { (() => {
// Promo banner — green gradient card with big glyph on the right and a dismiss ×.
// (Photos: "Подключай одноразовый пароль" block.)
function PromoBanner({
  title,
  subtitle,
  icon = 'shield',
  onDismiss,
  onClick,
  gradient
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      position: 'relative',
      background: gradient || 'var(--promo-grad)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 130px 20px 20px',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)',
      color: '#fff',
      lineHeight: 'var(--lh-tight)',
      marginBottom: 8
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-subhead)',
      color: 'rgba(255,255,255,0.75)',
      lineHeight: 'var(--lh-body)'
    }
  }, subtitle) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 92,
    color: "rgba(255,255,255,0.85)",
    strokeWidth: 1.2,
    fill: "rgba(255,255,255,0.25)"
  })), onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: function (e) {
      e.stopPropagation();
      onDismiss();
    },
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255,255,255,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    color: "#2e7d44",
    strokeWidth: 2.5
  })) : null);
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceTile.jsx
try { (() => {
// Horizontal-scroll service tile ("Полезные сервисы" carousel).
function ServiceTile({
  icon,
  iconBg,
  iconColor,
  label,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 24,
      width: 132,
      flexShrink: 0,
      background: 'var(--surface-2)',
      border: 'none',
      borderRadius: 'var(--radius)',
      padding: 14,
      cursor: 'pointer',
      color: 'var(--text)',
      fontFamily: 'var(--font-sans)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    bg: iconBg,
    color: iconColor,
    size: 48,
    radius: 12
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-subhead)',
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-tight)'
    }
  }, label));
}
Object.assign(__ds_scope, { ServiceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceTile.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
// Metric card — big number + label, used for "сообщений сегодня / заказов / открытых / закрытых".
function StatCard({
  value,
  label,
  icon,
  tone = 'neutral',
  style
}) {
  const tones = {
    neutral: 'var(--text)',
    blue: 'var(--accent)',
    green: '#4cd964',
    red: 'var(--red)',
    amber: 'var(--amber)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      background: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }, style)
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: tones[tone] || tones.neutral
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.1,
      color: tones[tone] || tones.neutral,
      fontFamily: 'var(--font-sans)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-footnote)',
      color: 'var(--text-2)',
      fontFamily: 'var(--font-sans)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
const {
  useState
} = React; // iOS-style toggle, as in "Вход в приложение" card.
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false
}) {
  const [inner, setInner] = useState(defaultChecked);
  const isOn = checked !== undefined ? checked : inner;
  function toggle() {
    if (disabled) return;
    const next = !isOn;
    if (checked === undefined) setInner(next);
    if (onChange) onChange(next);
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    "aria-pressed": isOn,
    style: {
      width: 51,
      height: 31,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      padding: 2,
      background: isOn ? 'var(--accent)' : 'var(--surface-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background 0.2s',
      display: 'flex',
      justifyContent: isOn ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 27,
      height: 27,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
      transition: 'transform 0.2s'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
// Primary surface card — large radius, generous padding, no shadow.
function Card({
  children,
  inset = false,
  style,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: Object.assign({
      background: inset ? 'var(--surface-2)' : 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--card-pad)',
      cursor: onClick ? 'pointer' : undefined
    }, style)
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/NavBar.jsx
try { (() => {
// Top navigation bar. Two modes:
// large   — 34px left-aligned title ("Главная") + bell on the right
// compact — 17px centered title + optional back chevron + right action
function NavBar({
  title,
  large = false,
  onBack,
  onBell,
  bellDot = false,
  subtitle,
  right
}) {
  const bell = onBell !== undefined ? /*#__PURE__*/React.createElement("button", {
    onClick: onBell,
    style: {
      background: 'none',
      border: 'none',
      padding: 4,
      cursor: 'pointer',
      position: 'relative',
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 24,
    color: "var(--accent)",
    fill: "var(--accent)",
    strokeWidth: 1.5
  }), bellDot ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--red)',
      border: '2px solid var(--bg)'
    }
  }) : null) : right || null;
  if (large) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '52px var(--screen-pad) 12px'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-large-title)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: '0.2px'
      }
    }, title), bell);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr 44px',
      alignItems: 'center',
      padding: '14px 8px',
      position: 'sticky',
      top: 0,
      background: 'var(--bg)',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      padding: 8,
      cursor: 'pointer',
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 26,
    color: "var(--accent)",
    strokeWidth: 2.5
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-headline)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-footnote)',
      color: 'var(--text-3)',
      marginTop: 1
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, bell));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/TabBar.jsx
try { (() => {
// Bottom tab bar — 4 tabs, blurred dark background, blue active state.
// items: [{ key, label, icon, badge? }]
function TabBar({
  items,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 'var(--tabbar-h)',
      background: 'var(--tabbar-bg)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '0.5px solid var(--hair-strong)',
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: 10,
      zIndex: 50
    }
  }, items.map(function (it) {
    const isActive = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: function () {
        if (onChange) onChange(it.key);
      },
      style: {
        flex: 1,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        color: isActive ? 'var(--nav-active)' : 'var(--nav-inactive)',
        position: 'relative',
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 26,
      strokeWidth: isActive ? 2.2 : 1.8
    }), it.badge ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -4,
        right: -8,
        background: 'var(--red)',
        color: '#fff',
        fontSize: 10,
        fontWeight: 700,
        padding: '1px 5px',
        borderRadius: 'var(--radius-pill)',
        border: '2px solid var(--bg)'
      }
    }, it.badge) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-medium)',
        fontFamily: 'var(--font-sans)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/ChatScreen.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React;
const initialChats = [{
  id: 'team',
  name: 'Команда BAZZAR SERTS',
  avatar: 'BS',
  unread: 2,
  messages: [{
    id: 1,
    author: 'Олеся',
    avatar: 'ОК',
    time: '13:02',
    text: 'Коллеги, по заказу #4821 клиент ждет сертификат — кто возьмет?'
  }, {
    id: 2,
    mine: true,
    time: '13:04',
    read: true,
    text: 'Беру, UDID уже в работе'
  }, {
    id: 3,
    author: 'Максим',
    avatar: 'МД',
    time: '13:26',
    text: 'Супер. Не забудь отметить статус в Заказах 🙌'
  }]
}, {
  id: 'veil',
  name: 'Veil VPN — смена',
  avatar: 'VV',
  unread: 0,
  messages: [{
    id: 1,
    author: 'Ирина',
    avatar: 'ИЛ',
    time: '11:40',
    text: 'График на завтра обновился, проверьте TWFM'
  }, {
    id: 2,
    mine: true,
    time: '11:52',
    read: true,
    text: 'Видел, всё ок'
  }]
}, {
  id: 'olesya',
  name: 'Олеся Ким',
  avatar: 'ОК',
  unread: 0,
  messages: [{
    id: 1,
    author: 'Олеся',
    avatar: 'ОК',
    time: '09:15',
    text: 'Привет! Кинь, пожалуйста, статистику за вчера'
  }, {
    id: 2,
    mine: true,
    time: '09:20',
    read: true,
    text: 'Отправил в Статистике, глянь'
  }]
}];
function ChatScreen() {
  const [chats, setChats] = useState(initialChats);
  const [activeId, setActiveId] = useState(null);
  const [draft, setDraft] = useState('');
  const endRef = useRef(null);
  const active = chats.find(function (c) {
    return c.id === activeId;
  });
  useEffect(function () {
    if (endRef.current && endRef.current.parentElement) {
      endRef.current.parentElement.scrollTop = endRef.current.parentElement.scrollHeight;
    }
  }, [active && active.messages.length, activeId]);
  function send(e) {
    e.preventDefault();
    if (!draft.trim() || !active) return;
    const msg = {
      id: Date.now(),
      mine: true,
      time: new Date().toTimeString().slice(0, 5),
      read: false,
      text: draft.trim()
    };
    setChats(chats.map(function (c) {
      return c.id === activeId ? Object.assign({}, c, {
        messages: c.messages.concat([msg])
      }) : c;
    }));
    setDraft('');
  }
  if (active) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
      title: active.name,
      subtitle: "\u0421 8:00 \u0434\u043E 20:00, \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445",
      onBack: function () {
        setActiveId(null);
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '8px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, active.messages.map(function (m) {
      return /*#__PURE__*/React.createElement(__ds_scope.ChatBubble, {
        key: m.id,
        mine: m.mine,
        author: m.mine ? undefined : m.author,
        avatar: m.mine ? undefined : m.avatar,
        time: m.time,
        read: m.read
      }, m.text);
    }), /*#__PURE__*/React.createElement("div", {
      ref: endRef
    })), /*#__PURE__*/React.createElement("form", {
      onSubmit: send,
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        padding: '10px 16px calc(var(--tabbar-h) + 10px)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "paperclip",
      size: 24,
      color: "var(--accent)"
    }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
      placeholder: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
      value: draft,
      onChange: function (e) {
        setDraft(e.target.value);
      },
      style: {
        borderRadius: 'var(--radius-pill)',
        padding: '10px 16px'
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: 'none',
        background: 'var(--accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-up",
      size: 20,
      color: "#fff",
      strokeWidth: 2.5
    }))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'calc(var(--tabbar-h) + 16px)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: "\u0427\u0430\u0442",
    subtitle: "\u0421 8:00 \u0434\u043E 20:00, \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: '4px 8px 0'
    }
  }, chats.map(function (c) {
    const last = c.messages[c.messages.length - 1];
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: function () {
        setActiveId(c.id);
        setChats(chats.map(function (x) {
          return x.id === c.id ? Object.assign({}, x, {
            unread: 0
          }) : x;
        }));
      },
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        background: 'none',
        border: 'none',
        padding: '10px 12px',
        cursor: 'pointer',
        textAlign: 'left',
        color: 'var(--text)',
        fontFamily: 'var(--font-sans)',
        borderRadius: 'var(--radius)',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        background: 'var(--surface-2)',
        color: 'var(--text-2)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: 16,
        flexShrink: 0
      }
    }, c.avatar), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 'var(--fw-semibold)',
        fontSize: 'var(--fs-body)'
      }
    }, c.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-footnote)',
        color: 'var(--text-3)'
      }
    }, last.time)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-subhead)',
        color: 'var(--text-2)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, last.mine ? 'Вы: ' : '', last.text), c.unread > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: "blue",
      style: {
        borderRadius: 'var(--radius-pill)',
        flexShrink: 0
      }
    }, c.unread) : null)));
  })));
}
Object.assign(__ds_scope, { ChatScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/ChatScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/ClientLineScreen.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React;
// Source channels a client can arrive from.
const SOURCE = {
  email: {
    label: 'Почта',
    icon: 'mail',
    color: 'var(--accent)'
  },
  site: {
    label: 'Сайт',
    icon: 'globe',
    color: '#4cd964'
  },
  ggsel: {
    label: 'GGSel',
    icon: 'gamepad-2',
    color: 'var(--violet)'
  },
  avito: {
    label: 'Авито',
    icon: 'shopping-bag',
    color: 'var(--amber)'
  },
  other: {
    label: 'Прочее',
    icon: 'ellipsis',
    color: 'var(--text-2)'
  }
};
const initialClients = [{
  id: 'c1',
  name: 'Клиент #4821',
  platform: 'BAZZAR SERTS',
  source: 'avito',
  waitMin: 12,
  messages: [{
    id: 1,
    author: 'Клиент',
    time: '13:14',
    text: 'Здравствуйте! Оплатил сертификат, когда придёт?'
  }, {
    id: 2,
    author: 'Клиент',
    time: '13:15',
    text: 'Заказ на Авито, номер 4821'
  }]
}, {
  id: 'c2',
  name: 'Иван П.',
  platform: 'Veil VPN',
  source: 'email',
  waitMin: 4,
  messages: [{
    id: 1,
    author: 'Клиент',
    time: '13:22',
    text: 'Не могу подключиться к VPN на iPhone, помогите пожалуйста'
  }]
}, {
  id: 'c3',
  name: 'Клиент #4830',
  platform: 'BAZZAR SERTS',
  source: 'ggsel',
  waitMin: 1,
  messages: [{
    id: 1,
    author: 'Клиент',
    time: '13:25',
    text: 'Купил через GGSel, жду ключ активации'
  }]
}, {
  id: 'c4',
  name: 'shop_marina',
  platform: 'Veil VPN',
  source: 'site',
  waitMin: 27,
  messages: [{
    id: 1,
    author: 'Клиент',
    time: '12:59',
    text: 'Здравствуйте, продлите подписку на год?'
  }, {
    id: 2,
    author: 'Клиент',
    time: '13:01',
    text: 'Оплату отправила через сайт'
  }]
}, {
  id: 'c5',
  name: 'Аноним',
  platform: 'BAZZAR SERTS',
  source: 'other',
  waitMin: 0,
  messages: [{
    id: 1,
    author: 'Клиент',
    time: '13:26',
    text: 'Можно чек по заказу?'
  }]
}];
function waitTone(min) {
  if (min >= 15) return 'red';
  if (min >= 5) return 'amber';
  return 'green';
}
function fmtWait(min) {
  if (min < 1) return 'сейчас';
  if (min < 60) return min + ' мин';
  return Math.floor(min / 60) + ' ч';
}
function ClientLineScreen({
  onBack
}) {
  const [clients, setClients] = useState(initialClients);
  const [activeId, setActiveId] = useState(null);
  const [filter, setFilter] = useState('all'); // all | BAZZAR SERTS | Veil VPN
  const [draft, setDraft] = useState('');
  const endRef = useRef(null);
  const active = clients.find(function (c) {
    return c.id === activeId;
  });
  useEffect(function () {
    if (endRef.current && endRef.current.parentElement) {
      endRef.current.parentElement.scrollTop = endRef.current.parentElement.scrollHeight;
    }
  }, [active && active.messages.length, activeId]);
  function send(e) {
    e.preventDefault();
    if (!draft.trim() || !active) return;
    const msg = {
      id: Date.now(),
      mine: true,
      time: new Date().toTimeString().slice(0, 5),
      read: false,
      text: draft.trim()
    };
    setClients(clients.map(function (c) {
      return c.id === activeId ? Object.assign({}, c, {
        messages: c.messages.concat([msg]),
        waitMin: 0
      }) : c;
    }));
    setDraft('');
  }

  // Conversation view
  if (active) {
    const src = SOURCE[active.source];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
      title: active.name,
      subtitle: active.platform + ' · ' + src.label,
      onBack: function () {
        setActiveId(null);
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '8px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, active.messages.map(function (m) {
      return /*#__PURE__*/React.createElement(__ds_scope.ChatBubble, {
        key: m.id,
        mine: m.mine,
        author: m.mine ? undefined : m.author,
        time: m.time,
        read: m.read
      }, m.text);
    }), /*#__PURE__*/React.createElement("div", {
      ref: endRef
    })), /*#__PURE__*/React.createElement("form", {
      onSubmit: send,
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        padding: '10px 16px calc(var(--tabbar-h) + 10px)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "paperclip",
      size: 24,
      color: "var(--accent)"
    }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
      placeholder: "\u041E\u0442\u0432\u0435\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443",
      value: draft,
      onChange: function (e) {
        setDraft(e.target.value);
      },
      style: {
        borderRadius: 'var(--radius-pill)',
        padding: '10px 16px'
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: 'none',
        background: 'var(--accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-up",
      size: 20,
      color: "#fff",
      strokeWidth: 2.5
    }))));
  }
  const visible = clients.filter(function (c) {
    return filter === 'all' || c.platform === filter;
  }).slice().sort(function (a, b) {
    return b.waitMin - a.waitMin;
  });
  const waiting = clients.length;
  const chips = ['all', 'BAZZAR SERTS', 'Veil VPN'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'calc(var(--tabbar-h) + 16px)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: "\u0412\u044B\u0445\u043E\u0434 \u043D\u0430 \u043B\u0438\u043D\u0438\u044E",
    subtitle: waiting + ' клиентов ждут ответа',
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '4px var(--screen-pad) 12px',
      overflowX: 'auto'
    }
  }, chips.map(function (ch) {
    const on = filter === ch;
    return /*#__PURE__*/React.createElement("button", {
      key: ch,
      onClick: function () {
        setFilter(ch);
      },
      style: {
        flexShrink: 0,
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        padding: '8px 14px',
        borderRadius: 'var(--radius-pill)',
        fontSize: 'var(--fs-subhead)',
        fontWeight: 'var(--fw-semibold)',
        background: on ? 'var(--accent)' : 'var(--surface-2)',
        color: on ? '#fff' : 'var(--text-2)'
      }
    }, ch === 'all' ? 'Все проекты' : ch);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 8px'
    }
  }, visible.map(function (c) {
    const src = SOURCE[c.source];
    const last = c.messages[c.messages.length - 1];
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: function () {
        setActiveId(c.id);
      },
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        background: 'none',
        border: 'none',
        padding: '12px',
        cursor: 'pointer',
        textAlign: 'left',
        color: 'var(--text)',
        fontFamily: 'var(--font-sans)',
        width: '100%',
        borderRadius: 'var(--radius)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: 12,
        background: 'var(--surface-3)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: src.icon,
      size: 22,
      color: src.color
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 'var(--fw-semibold)',
        fontSize: 'var(--fs-body)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, c.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        flexShrink: 0,
        fontSize: 'var(--fs-footnote)',
        fontWeight: 'var(--fw-semibold)',
        color: waitTone(c.waitMin) === 'red' ? 'var(--red)' : waitTone(c.waitMin) === 'amber' ? 'var(--amber)' : '#4cd964'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "clock",
      size: 13,
      strokeWidth: 2.5
    }), " ", fmtWait(c.waitMin))), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center',
        margin: '5px 0 5px'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: c.platform === 'Veil VPN' ? 'violet' : 'blue'
    }, c.platform), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: "neutral"
    }, src.label)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 'var(--fs-subhead)',
        color: 'var(--text-2)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, last.text)));
  })));
}
Object.assign(__ds_scope, { ClientLineScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/ClientLineScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/ComingSoonScreen.jsx
try { (() => {
// Placeholder for services not yet built. Pass the section title.
function ComingSoonScreen({
  title,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: title,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 40px',
      gap: 18,
      marginTop: -60
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 84,
      height: 84,
      borderRadius: 24,
      background: 'var(--surface-2)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "hammer",
    size: 38,
    color: "var(--accent)",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "\u0420\u0430\u0437\u0434\u0435\u043B \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-subhead)',
      color: 'var(--text-2)',
      lineHeight: 'var(--lh-body)'
    }
  }, "\xAB", title, "\xBB \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430\u0434 \u044D\u0442\u0438\u043C \u2014 \u0437\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435 \u0447\u0443\u0442\u044C \u043F\u043E\u0437\u0436\u0435.")));
}
Object.assign(__ds_scope, { ComingSoonScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/ComingSoonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/FinancesScreen.jsx
try { (() => {
const {
  useMemo
} = React;
// Grounded on repo src/pages/Finances.tsx: income/expense/net + transaction list.
const transactions = [{
  id: 1,
  type: 'income',
  amount: 1490,
  description: 'Apple Certs · заказ #4821',
  category: 'BAZZAR SERTS',
  date: '8 июля'
}, {
  id: 2,
  type: 'income',
  amount: 1990,
  description: 'Veil VPN · годовая подписка',
  category: 'Veil VPN',
  date: '8 июля'
}, {
  id: 3,
  type: 'expense',
  amount: 320,
  description: 'API сертификатов',
  category: 'Расходы',
  date: '7 июля'
}, {
  id: 4,
  type: 'income',
  amount: 890,
  description: 'Apple Certs · заказ #4830',
  category: 'BAZZAR SERTS',
  date: '7 июля'
}, {
  id: 5,
  type: 'expense',
  amount: 150,
  description: 'Комиссия площадки',
  category: 'GGSel',
  date: '6 июля'
}];
function fmt(v) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(v);
}
function FinancesScreen({
  onBack
}) {
  const totals = useMemo(function () {
    let income = 0,
      expense = 0;
    transactions.forEach(function (t) {
      if (t.type === 'income') income += t.amount;else expense += t.amount;
    });
    return {
      income: income,
      expense: expense,
      net: income - expense
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'calc(var(--tabbar-h) + 16px)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: "\u0424\u0438\u043D\u0430\u043D\u0441\u044B",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--screen-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: '#4cd964',
      fontSize: 'var(--fs-footnote)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "trending-up",
    size: 15
  }), " \u0414\u043E\u0445\u043E\u0434\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 'var(--fw-bold)'
    }
  }, fmt(totals.income))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--red)',
      fontSize: 'var(--fs-footnote)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "trending-down",
    size: 15
  }), " \u0420\u0430\u0441\u0445\u043E\u0434\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 'var(--fw-bold)'
    }
  }, fmt(totals.expense))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: 16,
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-2)',
      fontSize: 'var(--fs-footnote)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "scale",
    size: 15
  }), " \u041F\u0440\u0438\u0431\u044B\u043B\u044C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 'var(--fw-bold)',
      color: totals.net >= 0 ? '#4cd964' : 'var(--red)'
    }
  }, totals.net > 0 ? '+' : '', fmt(totals.net)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-headline)',
      fontWeight: 'var(--fw-semibold)',
      margin: '4px 0 10px'
    }
  }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438"), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: '6px 16px'
    }
  }, transactions.map(function (t, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        borderTop: i === 0 ? 'none' : '0.5px solid var(--hair)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        paddingRight: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-subhead)',
        fontWeight: 'var(--fw-medium)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, t.description), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-footnote)',
        color: 'var(--text-3)',
        marginTop: 3
      }
    }, t.date, " \xB7 ", t.category)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-body)',
        whiteSpace: 'nowrap',
        color: t.type === 'income' ? '#4cd964' : 'var(--red)'
      }
    }, t.type === 'income' ? '+' : '−', fmt(t.amount)));
  }))));
}
Object.assign(__ds_scope, { FinancesScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/FinancesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/HomeScreen.jsx
try { (() => {
const {
  useState
} = React;
const statsByProject = {
  'BAZZAR SERTS': {
    messages: 26,
    orders: 14,
    open: 5,
    closed: 9
  },
  'Veil VPN': {
    messages: 11,
    orders: 7,
    open: 2,
    closed: 5
  }
};
function HomeScreen({
  onOpenNotifications,
  onOpenServices,
  onStartLine,
  onOpen,
  project,
  onChangeProject
}) {
  const [bannerVisible, setBannerVisible] = useState(true);
  const s = statsByProject[project] || statsByProject['BAZZAR SERTS'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'calc(var(--tabbar-h) + 16px)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
    large: true,
    onBell: onOpenNotifications,
    bellDot: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '0 var(--screen-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.ProjectPicker, {
    projects: ['BAZZAR SERTS', 'Veil VPN'],
    value: project,
    onChange: onChangeProject
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    icon: "message-square",
    value: s.messages,
    label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    tone: "blue"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    icon: "package",
    value: s.orders,
    label: "\u0417\u0430\u043A\u0430\u0437\u043E\u0432 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    icon: "circle-dot",
    value: s.open,
    label: "\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043E\u0432",
    tone: "amber"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    icon: "circle-check",
    value: s.closed,
    label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043E\u0432",
    tone: "green"
  })), /*#__PURE__*/React.createElement(__ds_scope.Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)',
      marginBottom: 6
    }
  }, "\u0420\u0430\u0437\u043C\u0435\u0442\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-subhead)',
      color: 'var(--text-2)',
      marginBottom: 16
    }
  }, "\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    block: true,
    onClick: function () {
      onOpen('coming:Разметка данных');
    }
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0443")), /*#__PURE__*/React.createElement(__ds_scope.Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)',
      marginBottom: 6
    }
  }, "\u0412\u044B\u0445\u043E\u0434 \u043D\u0430 \u043B\u0438\u043D\u0438\u044E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-subhead)',
      color: 'var(--text-2)',
      marginBottom: 16
    }
  }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0439\u0442\u0435 \u0437\u0432\u043E\u043D\u043A\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "tonal",
    block: true,
    onClick: onStartLine
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443")), bannerVisible ? /*#__PURE__*/React.createElement(__ds_scope.PromoBanner, {
    title: "\u0427\u0430\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",
    subtitle: "\u041E\u0431\u0441\u0443\u0436\u0434\u0430\u0439\u0442\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u0441 \u043A\u043E\u043B\u043B\u0435\u0433\u0430\u043C\u0438 \u043F\u0440\u044F\u043C\u043E \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438",
    icon: "message-square",
    onDismiss: function () {
      setBannerVisible(false);
    }
  }) : null, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: '20px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function (e) {
      e.preventDefault();
      if (onOpenServices) onOpenServices();
    },
    style: {
      fontSize: 'var(--fs-body)'
    }
  }, "\u0412\u0441\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      padding: '0 20px 4px',
      scrollbarWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ServiceTile, {
    icon: "newspaper",
    label: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
    onClick: function () {
      onOpen('news');
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ServiceTile, {
    icon: "calendar-clock",
    label: "TWFM",
    onClick: function () {
      onOpen('coming:TWFM');
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ServiceTile, {
    icon: "chart-line",
    label: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
    onClick: function () {
      onOpen('coming:Статистика');
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ServiceTile, {
    icon: "package",
    label: "\u0417\u0430\u043A\u0430\u0437\u044B",
    onClick: function () {
      onOpen('orders');
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ServiceTile, {
    icon: "wallet",
    label: "\u0424\u0438\u043D\u0430\u043D\u0441\u044B",
    onClick: function () {
      onOpen('finances');
    }
  }))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: '20px 20px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)',
      marginBottom: 8
    }
  }, "\u0421\u043F\u0440\u0430\u0432\u043A\u0430 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430"), /*#__PURE__*/React.createElement(__ds_scope.ListRow, {
    icon: "lightbulb",
    title: "\u0418\u0434\u0435\u0438",
    subtitle: "\u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0439\u0442\u0435 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432",
    onClick: function () {
      onOpen('coming:Идеи');
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ListRow, {
    icon: "list-checks",
    title: "\u0417\u0430\u0434\u0430\u0447\u0438",
    subtitle: "\u0412\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u044B \u0438\u0445 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",
    onClick: function () {
      onOpen('coming:Задачи');
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ListRow, {
    icon: "life-buoy",
    title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0435\u0440",
    subtitle: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 \u0442\u0435\u0445\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443",
    onClick: function () {
      onOpen('coming:Информер');
    }
  }))));
}
Object.assign(__ds_scope, { HomeScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/LoginScreen.jsx
try { (() => {
const {
  useState
} = React;
function LoginScreen({
  onLogin
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function submit(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Введите email и пароль');
      return;
    }
    setError('');
    onLogin(email.trim());
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 28px',
      color: 'var(--text)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: 1
    }
  }, "CO", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "NN"), "ECT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-subhead)',
      color: 'var(--text-2)',
      marginTop: 8
    }
  }, "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432")), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-footnote)',
      color: 'var(--text-2)',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: 6,
      paddingLeft: 4
    }
  }, "Email"), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    type: "email",
    placeholder: "you@connect.ru",
    value: email,
    onChange: function (e) {
      setEmail(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-footnote)',
      color: 'var(--text-2)',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: 6,
      paddingLeft: 4
    }
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: password,
    onChange: function (e) {
      setPassword(e.target.value);
    }
  })), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--red)',
      fontSize: 'var(--fs-footnote)',
      textAlign: 'center',
      background: 'var(--red-dim)',
      padding: '10px',
      borderRadius: 'var(--radius)'
    }
  }, error) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    block: true,
    style: {
      marginTop: 8
    }
  }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--accent)',
      fontSize: 'var(--fs-subhead)',
      fontWeight: 'var(--fw-medium)',
      cursor: 'pointer',
      padding: 10,
      fontFamily: 'var(--font-sans)'
    }
  }, "\u041D\u0435 \u043F\u043E\u043C\u043D\u044E \u043F\u0430\u0440\u043E\u043B\u044C")));
}
Object.assign(__ds_scope, { LoginScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/MoreScreen.jsx
try { (() => {
const {
  useState
} = React;
function MoreScreen({
  onOpenNotifications,
  theme,
  onThemeChange,
  onLogout
}) {
  const [cacheCleared, setCacheCleared] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const themes = [['light', 'Светлая'], ['dark', 'Тёмная']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'calc(var(--tabbar-h) + 16px)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: "\u0415\u0449\u0451",
    large: true,
    onBell: onOpenNotifications
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '0 var(--screen-pad)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: '20px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)',
      marginBottom: 14
    }
  }, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)'
    }
  }, "\u0422\u0435\u043C\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: 'var(--surface-2)',
      borderRadius: 'var(--radius-pill)',
      padding: 3
    }
  }, themes.map(function (t) {
    const on = theme === t[0];
    return /*#__PURE__*/React.createElement("button", {
      key: t[0],
      onClick: function () {
        onThemeChange(t[0]);
      },
      style: {
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        padding: '7px 16px',
        borderRadius: 'var(--radius-pill)',
        fontSize: 'var(--fs-subhead)',
        fontWeight: 'var(--fw-semibold)',
        background: on ? 'var(--accent)' : 'transparent',
        color: on ? '#fff' : 'var(--text-2)',
        transition: 'background 0.15s'
      }
    }, t[1]);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '0.5px solid var(--hair)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ListRow, {
    title: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u0435\u0448",
    subtitle: cacheCleared ? 'Кеш очищен' : 'Оптимизирует работу приложения',
    chevron: false,
    onClick: function () {
      setCacheCleared(true);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '0.5px solid var(--hair)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ListRow, {
    title: "\u0412\u0435\u0440\u0441\u0438\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F 1.49.0 (32)",
    chevron: false
  }))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "plain",
    block: true,
    onClick: function () {
      setConfirmLogout(true);
    }
  }, "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F"))), confirmLogout ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'flex-end',
      zIndex: 200
    },
    onClick: function () {
      setConfirmLogout(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function (e) {
      e.stopPropagation();
    },
    style: {
      width: '100%',
      padding: '0 8px calc(8px + env(safe-area-inset-bottom))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 16px 10px',
      marginBottom: 8,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-headline)',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: 6
    }
  }, "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-subhead)',
      color: 'var(--text-2)',
      marginBottom: 14
    }
  }, "\u041F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u0432\u043E\u0439\u0442\u0438 \u0437\u0430\u043D\u043E\u0432\u043E \u043F\u043E email \u0438 \u043F\u0430\u0440\u043E\u043B\u044E."), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      width: '100%',
      border: 'none',
      background: 'var(--red-dim)',
      color: 'var(--red)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-headline)',
      fontWeight: 'var(--fw-semibold)',
      padding: '14px',
      borderRadius: 'var(--radius)',
      cursor: 'pointer'
    }
  }, "\u0412\u044B\u0439\u0442\u0438")), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setConfirmLogout(false);
    },
    style: {
      width: '100%',
      border: 'none',
      background: 'var(--surface)',
      color: 'var(--accent)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-headline)',
      fontWeight: 'var(--fw-bold)',
      padding: '15px',
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer'
    }
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"))) : null);
}
Object.assign(__ds_scope, { MoreScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/MoreScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/NewsScreen.jsx
try { (() => {
const news = [{
  category: 'BAZZAR SERTS',
  date: '8 июля',
  time: '10:12',
  icon: 'newspaper',
  iconColor: 'var(--amber)',
  title: 'Обновили выдачу сертификатов',
  text: 'Теперь ключи Apple Certs приходят клиенту автоматически после согласования заявки.'
}, {
  category: 'Veil VPN',
  date: '7 июля',
  time: '18:40',
  icon: 'shield',
  iconColor: '#4cd964',
  title: 'Новые локации серверов',
  text: 'Добавили Японию и Бразилию — расскажите клиентам при обращении.'
}, {
  category: 'Компания',
  date: '5 июля',
  time: '14:30',
  icon: 'megaphone',
  iconColor: 'var(--violet)',
  title: 'Новый Бизнес StandUp на базе',
  text: 'Технологи, гики и дизайнеры — про то, как рождаются продукты, интерфейсы и мемы.'
}, {
  category: 'Компания',
  date: '1 июля',
  time: '15:04',
  icon: 'sun',
  iconColor: 'var(--amber)',
  title: 'Бери максимум от лета',
  text: 'В дайджесте: горячие новости, конкурсы и домашка от лидеров.'
}];
function NewsScreen({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--screen-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, news.map(function (n, i) {
    return /*#__PURE__*/React.createElement(__ds_scope.NotificationItem, {
      key: i,
      category: n.category,
      date: n.date,
      time: n.time,
      icon: n.icon,
      iconColor: n.iconColor,
      title: n.title,
      text: n.text
    });
  }))));
}
Object.assign(__ds_scope, { NewsScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/NewsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/NotificationsScreen.jsx
try { (() => {
const items = [{
  category: 'Новость',
  date: '2 июля',
  time: '14:30',
  icon: 'newspaper',
  iconColor: 'var(--amber)',
  title: 'Новый Бизнес StandUp на базе',
  text: 'Технологи, гики и дизайнеры — про то, как рождаются продукты, интерфейсы и мемы'
}, {
  category: 'Новость',
  date: '1 июля',
  time: '15:04',
  icon: 'newspaper',
  iconColor: 'var(--amber)',
  title: 'Бери максимум от лета',
  text: 'В дайджесте: горячие новости, конкурсы и домашка от лидеров'
}, {
  category: 'Расписание',
  date: '26 июня',
  time: '11:02',
  icon: 'calendar-days',
  iconColor: 'var(--violet)',
  title: 'Обновления в заявках на 26 июня'
}, {
  category: 'База знаний',
  date: '25 июня',
  time: '15:50',
  icon: 'book-open',
  iconColor: 'var(--accent)',
  title: 'Поиск операций',
  text: 'Опубликована новая статья.'
}, {
  category: 'Расписание',
  date: '24 июня',
  time: '16:37',
  icon: 'calendar-days',
  iconColor: 'var(--violet)',
  title: 'Обновился график работы на 24 июня'
}];
function NotificationsScreen({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--screen-pad)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '4px 0 14px',
      fontSize: 'var(--fs-large-title)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "\u0420\u0430\u043D\u0435\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(function (n, i) {
    return /*#__PURE__*/React.createElement(__ds_scope.NotificationItem, {
      key: i,
      category: n.category,
      date: n.date,
      time: n.time,
      icon: n.icon,
      iconColor: n.iconColor,
      title: n.title,
      text: n.text
    });
  }))));
}
Object.assign(__ds_scope, { NotificationsScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/NotificationsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/OrdersScreen.jsx
try { (() => {
const {
  useState
} = React;
// Grounded on repo src/pages/Orders.tsx: Apple Certs заявки, status cycle pending → in_progress → approved.
const initial = [{
  id: '1',
  udid: '00008110-001A2D3C1E88801E',
  plan: '1 год',
  platform: 'BAZZAR SERTS',
  source: 'AVITO',
  price: 1490,
  status: 'pending',
  at: '13:22'
}, {
  id: '2',
  udid: '00008030-000C4419023B802E',
  plan: '6 мес',
  platform: 'BAZZAR SERTS',
  source: 'GGSEL',
  price: 890,
  status: 'in_progress',
  at: '12:58'
}, {
  id: '3',
  udid: '00008120-0014premium9A01',
  plan: '1 год',
  platform: 'Veil VPN',
  source: 'САЙТ',
  price: 1990,
  status: 'in_progress',
  at: '12:40'
}, {
  id: '4',
  udid: '00008101-001E2233445566AA',
  plan: '3 мес',
  platform: 'BAZZAR SERTS',
  source: 'ПОЧТА',
  price: 590,
  status: 'approved',
  at: '11:05'
}];
const STATUS = {
  pending: {
    label: 'На рассмотрении',
    icon: 'clock',
    tone: 'neutral',
    btn: 'Взять в работу',
    btnVar: 'tonal'
  },
  in_progress: {
    label: 'В работе',
    icon: 'play-circle',
    tone: 'amber',
    btn: 'Завершить (выдать)',
    btnVar: 'primary'
  },
  approved: {
    label: 'Согласовано',
    icon: 'circle-check',
    tone: 'green',
    btn: 'Вернуть в новые',
    btnVar: 'tonal'
  }
};
const NEXT = {
  pending: 'in_progress',
  in_progress: 'approved',
  approved: 'pending'
};
function OrdersScreen({
  onBack
}) {
  const [orders, setOrders] = useState(initial);
  const [filter, setFilter] = useState('pending');
  const chips = [['pending', 'Новые'], ['in_progress', 'В работе'], ['all', 'Все']];
  function cycle(id) {
    setOrders(orders.map(function (o) {
      return o.id === id ? Object.assign({}, o, {
        status: NEXT[o.status]
      }) : o;
    }));
  }
  const visible = orders.filter(function (o) {
    return filter === 'all' || o.status === filter;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'calc(var(--tabbar-h) + 16px)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: "\u0417\u0430\u043A\u0430\u0437\u044B",
    subtitle: "Apple Certs",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '4px var(--screen-pad) 12px',
      overflowX: 'auto'
    }
  }, chips.map(function (ch) {
    const on = filter === ch[0];
    return /*#__PURE__*/React.createElement("button", {
      key: ch[0],
      onClick: function () {
        setFilter(ch[0]);
      },
      style: {
        flexShrink: 0,
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        padding: '8px 14px',
        borderRadius: 'var(--radius-pill)',
        fontSize: 'var(--fs-subhead)',
        fontWeight: 'var(--fw-semibold)',
        background: on ? 'var(--accent)' : 'var(--surface-2)',
        color: on ? '#fff' : 'var(--text-2)'
      }
    }, ch[1]);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '0 var(--screen-pad)'
    }
  }, visible.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-3)',
      textAlign: 'center',
      marginTop: 40
    }
  }, "\u0417\u0430\u043A\u0430\u0437\u043E\u0432 \u043D\u0435\u0442") : visible.map(function (o) {
    const st = STATUS[o.status];
    return /*#__PURE__*/React.createElement(__ds_scope.Card, {
      key: o.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 10,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-footnote)',
        fontWeight: 'var(--fw-semibold)',
        wordBreak: 'break-all',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "smartphone",
      size: 15,
      color: "var(--text-2)",
      style: {
        flexShrink: 0
      }
    }), " ", o.udid), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: "neutral"
    }, o.plan), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: o.platform === 'Veil VPN' ? 'violet' : 'blue'
    }, o.platform), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: "neutral"
    }, o.source))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-headline)'
      }
    }, o.price, " \u20BD"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-footnote)',
        color: 'var(--text-3)'
      }
    }, o.at))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: st.btnVar,
      block: true,
      icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: st.icon,
        size: 16
      }),
      onClick: function () {
        cycle(o.id);
      }
    }, st.btn));
  })));
}
Object.assign(__ds_scope, { OrdersScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/OrdersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/ServicesHRScreen.jsx
try { (() => {
const services = [{
  icon: 'newspaper',
  title: 'Новости',
  key: 'news'
}, {
  icon: 'calendar-clock',
  title: 'TWFM',
  key: 'coming:TWFM'
}, {
  icon: 'chart-line',
  title: 'Статистика',
  key: 'coming:Статистика'
}, {
  icon: 'package',
  title: 'Заказы',
  key: 'orders'
}, {
  icon: 'wallet',
  title: 'Финансы',
  key: 'finances'
}];
function ServicesHRScreen({
  onOpenNotifications,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'calc(var(--tabbar-h) + 16px)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: "\u0421\u0435\u0440\u0432\u0438\u0441\u044B HR",
    onBell: onOpenNotifications
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px var(--screen-pad) 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 16px',
      fontSize: 'var(--fs-large-title)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "\u0421\u0435\u0440\u0432\u0438\u0441\u044B"), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: '8px 20px'
    }
  }, services.map(function (s) {
    return /*#__PURE__*/React.createElement(__ds_scope.ListRow, {
      key: s.title,
      icon: s.icon,
      title: s.title,
      onClick: function () {
        onOpen(s.key);
      }
    });
  }))));
}
Object.assign(__ds_scope, { ServicesHRScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/ServicesHRScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/UsefulServicesScreen.jsx
try { (() => {
const services = [{
  icon: 'newspaper',
  title: 'Новости',
  key: 'news'
}, {
  icon: 'calendar-clock',
  title: 'TWFM',
  key: 'coming:TWFM'
}, {
  icon: 'chart-line',
  title: 'Статистика',
  key: 'coming:Статистика'
}, {
  icon: 'package',
  title: 'Заказы',
  key: 'orders'
}, {
  icon: 'wallet',
  title: 'Финансы',
  key: 'finances'
}];
function UsefulServicesScreen({
  onBack,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavBar, {
    title: "\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px var(--screen-pad) 0'
    }
  }, services.map(function (s) {
    return /*#__PURE__*/React.createElement(__ds_scope.ListRow, {
      key: s.title,
      icon: s.icon,
      title: s.title,
      onClick: function () {
        onOpen(s.key);
      }
    });
  })));
}
Object.assign(__ds_scope, { UsefulServicesScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/UsefulServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/connect-mobile/WelcomeScreen.jsx
try { (() => {
// Greeting shown right after login, before entering the app.
function WelcomeScreen({
  name,
  onEnter
}) {
  const label = name && name.indexOf('@') > -1 ? name.split('@')[0] : name || 'коллега';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 32px',
      color: 'var(--text)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      height: 96,
      borderRadius: 28,
      background: 'var(--promo-grad)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "hand-heart",
    size: 46,
    color: "#fff",
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 'var(--fw-bold)',
      marginBottom: 8
    }
  }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-2)',
      lineHeight: 'var(--lh-body)'
    }
  }, "\u0420\u0430\u0434\u044B \u0432\u0438\u0434\u0435\u0442\u044C, ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)'
    }
  }, label), ". \u041D\u043E\u0432\u043E\u0441\u0442\u0438, \u0447\u0430\u0442\u044B \u0438 \u0437\u0430\u043A\u0430\u0437\u044B \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C BAZZAR SERTS \u0438 Veil VPN \u2014 \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    block: true,
    onClick: onEnter
  }, "\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435")));
}
Object.assign(__ds_scope, { WelcomeScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/connect-mobile/WelcomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.NotificationItem = __ds_scope.NotificationItem;

__ds_ns.ProjectPicker = __ds_scope.ProjectPicker;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.ServiceTile = __ds_scope.ServiceTile;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.ChatScreen = __ds_scope.ChatScreen;

__ds_ns.ClientLineScreen = __ds_scope.ClientLineScreen;

__ds_ns.ComingSoonScreen = __ds_scope.ComingSoonScreen;

__ds_ns.FinancesScreen = __ds_scope.FinancesScreen;

__ds_ns.HomeScreen = __ds_scope.HomeScreen;

__ds_ns.LoginScreen = __ds_scope.LoginScreen;

__ds_ns.MoreScreen = __ds_scope.MoreScreen;

__ds_ns.NewsScreen = __ds_scope.NewsScreen;

__ds_ns.NotificationsScreen = __ds_scope.NotificationsScreen;

__ds_ns.OrdersScreen = __ds_scope.OrdersScreen;

__ds_ns.ServicesHRScreen = __ds_scope.ServicesHRScreen;

__ds_ns.UsefulServicesScreen = __ds_scope.UsefulServicesScreen;

__ds_ns.WelcomeScreen = __ds_scope.WelcomeScreen;

})();
