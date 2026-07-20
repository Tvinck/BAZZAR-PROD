# Connect Mobile — Design System

**Connect Mobile** — внутреннее iOS web-приложение для сотрудников: новости компании, чат между сотрудниками, ответы клиентам, просмотр и обработка заказов по проектам **BAZZAR SERTS** и **Veil VPN**.

Дизайн — тёмный, iOS-нативный, «как по фото»: чёрный фон, крупные мягкие карточки, синий акцент, жёлтая главная CTA, зелёный промо-баннер. Логотип — словесный знак **CONNECT** (предоставлен фото-сканом, `assets/connect-logo.jpg`).

## Sources

- GitHub: [Tvinck/connect-mobille](https://github.com/Tvinck/connect-mobille) — рабочий CRM-прототип (Vite + React + Supabase): страницы Orders / Finances / CRM / Support / Login, токены в `src/index.css`. Explore it further for exact page logic when building new designs.
- 8 product photos in `uploads/` — ground truth for the target visual style (Главная, Сервисы HR, Чат, Ещё, Уведомления, Полезные сервисы) and the CONNECT logo.

The repo's original theme (violet accent, hairline-bordered cards) was intentionally **redesigned** per the photos: blue accent, borderless 24px-radius cards, yellow CTA.

## CONTENT FUNDAMENTALS

- Language: Russian, informal **«ты»** with employees: «Выполняйте задания и получайте вознаграждения», «Не пропусти комментарии».
- Sentence case everywhere; no ALL CAPS except product names (BAZZAR SERTS, TWFM, TQM).
- Verbs first for actions: «Начать разметку», «Начать работу», «Выйти из приложения», «Очистить кеш».
- Card pattern: bold short title (2–4 слова) + one gray sentence of benefit + one CTA.
- Meta lines use middle dots: «Новость • 2 июля • 14:30».
- Emoji: sparingly, only in chat messages (🙌, 💛) — never in UI chrome.
- Latin product/system names stay Latin: TWFM, Informer → «Информер» when localized.

## VISUAL FOUNDATIONS

- **Colors**: pure black `--bg`; card `--surface #1c1c1e`; nested fill `--surface-2 #2c2c2e`; text 3 levels (`--text`, `--text-2 #a1a1a6`, `--text-3 #6e6e73`); accent iOS blue `#0a84ff`; CTA yellow `#ffdd2d` with near-black text; semantic green/red/amber/violet each with 15% dim tints; green promo gradient `--promo-grad`.
- **Type**: SF Pro via native stack (`--font-sans`); iOS scale — large title 34/700, section title 22/700, headline 17/600, subhead 15/400, footnote 13, caption 11. **No font binaries provided** — system stack renders; Inter is the web fallback (repo's choice).
- **Backgrounds**: flat black; no imagery, textures or patterns. Only the promo banner uses a gradient.
- **Cards**: `--surface` fill, **24px radius, no border, no shadow**. Nested elements (buttons-in-card, tiles) use `--surface-2`, 16px radius. Elevation = lighter surface, never shadows (only menus/sheets get a soft black shadow).
- **Buttons**: full-width in cards; yellow primary (one per screen), tonal `--surface-2` + blue text secondary, plain blue text tertiary.
- **Hover/press**: press = scale(0.98) + opacity 0.75, 150ms; no hover states (touch-first).
- **Animation**: minimal — 150–200ms ease transitions on color/transform; no bounces, no infinite loops.
- **Borders/hairlines**: 0.5–1px `rgba(255,255,255,0.06–0.12)` only on the tab bar top edge and swatch outlines.
- **Blur**: tab bar only — `rgba(22,22,24,0.92)` + 20px backdrop blur.
- **Layout**: 16px screen padding; 12px gap between cards; fixed bottom tab bar (82px incl. home-indicator); large title left-aligned on root tabs, compact centered title on pushed screens.
- **Corner radii**: 10 (badges) / 16 (inner) / 24 (cards) / pill (chips, toggles).
- **Imagery**: none in UI; avatars are initials on `--surface-2/3` circles.

## ICONOGRAPHY

- Source app uses **lucide-react**; photos use SF Symbols. We standardize on **Lucide from CDN** (`https://unpkg.com/lucide@0.462.0/dist/umd/lucide.min.js`) — closest stroke style to SF Symbols. ⚠️ Substitution: SF Symbols themselves are not redistributable.
- Usage: through the `Icon` component (React) or `<i data-lucide="…">` + `lucide.createIcons()` (plain HTML).
- Glyphs sit in **IconTile** rounded squares (gray `--surface-3`, or colored fill for featured services) — or bare, tinted `--accent` (bell, back chevron) / `--text-3` (chevrons, inactive nav).
- The repo's `public/icons.svg` (social symbols) is Vite-template boilerplate — not brand iconography, not copied.
- Emoji never used as icons.
- Logo: only `assets/connect-logo.jpg` (photo scan on light background). No vector mark was provided — flagged below.

## Components

Namespace: `window.ConnectMobileDesignSystem_60c434`.

- **core/** — `Button` (primary / tonal / plain / blue), `Badge`, `Switch`, `Field`, `Icon`
- **layout/** — `Card`, `NavBar` (large / compact), `TabBar`
- **content/** — `IconTile`, `ListRow`, `ServiceTile`, `StatCard`, `PromoBanner`, `NotificationItem`, `ChatBubble`, `ProjectPicker`

Intentional additions (not in repo code, derived from photos + brief): `Icon` (glyph wrapper), `IconTile`, `ServiceTile`, `StatCard`, `PromoBanner`, `NotificationItem`, `ProjectPicker`, `NavBar`, `Switch` — each matches a pattern visible in the product photos or explicitly requested (project picker, daily stats).

## UI kits

- `ui_kits/connect-mobile/` — interactive click-through of the app (`index.html`): Главная (project picker, daily stats, Разметка данных, Выход на линию, promo, Полезные сервисы, Справка и поддержка), Сервисы HR, Чат (messenger between employees, working send), Ещё (Тема / Очистить кеш / Версия / Выход), Уведомления, Полезные сервисы. Screens: `HomeScreen`, `ServicesHRScreen`, `ChatScreen`, `MoreScreen`, `NotificationsScreen`, `UsefulServicesScreen`.

Per the brief, the kit **omits**: одноразовый пароль (the banner design is kept as `PromoBanner`), проверка звука и микрофона, вход по отпечатку/скану лица, лицензии.

## Index

- `styles.css` → `tokens/{colors,typography,spacing,base}.css`
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/{core,layout,content}/` — primitives + per-directory demo cards
- `ui_kits/connect-mobile/` — the app recreation
- `assets/connect-logo.jpg` — CONNECT wordmark (photo scan)
- `SKILL.md` — agent skill entry point

## Known gaps

- No font files (SF Pro is Apple-licensed) — native stack used; upload `.woff2` if a licensed web build exists.
- Logo exists only as a light-background photo scan; a vector/PNG-on-transparent version is needed for dark UI (currently the wordmark is set in plain type where a mark is needed on dark).
