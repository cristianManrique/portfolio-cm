# 🤖 README_AI — Portfolio CM · AI Project Guide

> **For AI assistants working on this project.**
> Read this file entirely before touching any code.

---

## 📌 Project Identity

| Field | Value |
|---|---|
| **Project Name** | `portfolio-pro` |
| **Owner** | Cristian Manrique |
| **Type** | Personal Portfolio — Front-End Developer & Web Designer UI/UX |
| **Stack** | React 19 + Vite 7 + Tailwind CSS 4 + Motion + styled-components v6 + Redux + i18next |
| **Local Path** | `C:\Users\admin\Documents\www\portfolio_cm` |
| **Dev Command** | `yarn run dev` → `http://localhost:3000` |
| **Build Command** | `vite build` |

---

## 🎨 Design Reference

> **Source of truth: `/cris-website-mockup3.pdf`**
> Every pixel must match this PDF. Do NOT improvise the layout.

### Color Palette (extracted from mockup)

| Role | Color |
|---|---|
| Background dark | `#021a2b` (deep navy) |
| Background mid | `#032d45` (teal-navy) |
| Background card | `#0a3a52` |
| Accent teal | `#00b4c8` |
| Accent red | `#e63946` |
| Text primary | `#ffffff` |
| Text muted | `#a0c4d8` |
| Border/line | `#00b4c8` (teal, 2px) |

### Typography

| Role | Style |
|---|---|
| Logo / Brand | `<- Cristian Manrique ->` — monospace or code-style font |
| Hero H1 | Large bold white — mixed weight ("The **FUTURE** of") |
| Section titles | Bold uppercase, large |
| Body text | Regular weight, muted color |
| Tags / Pills | Small, rounded border, `#00b4c8` outline |

### Brand Signature
The name always renders as: `<- Cristian Manrique ->` with `<-` and `->` in teal/accent color.

---

## 🗂️ File Structure

```
portfolio_cm/
│
├─ public/
│  ├─ hero-bg.mp4            ← Video background for Hero section
│  ├─ avatar.jpg             ← Profile photo (circular)
│  ├─ vite.svg
│  └─ projects/
│     ├─ project-01.jpg
│     └─ ...
│
├─ src/
│  ├─ components/
│  │  ├─ StarTrail.jsx      ← Mouse/touch star particle effect wrapper
│  │  ├─ Navbar.jsx         ← Fixed top nav
│  │  ├─ Hero.jsx           ← Video BG + big typography + intro
│  │  ├─ About.jsx          ← "Who Am I?" + photo + CV button
│  │  ├─ Experience.jsx     ← Timeline: Keyloop + Publitech
│  │  ├─ Projects.jsx       ← Carousel / slider with arrows
│  │  ├─ ProjectCard.jsx    ← Individual project card
│  │  ├─ ProjectLightbox.jsx ← Full-screen project detail modal
│  │  ├─ Skills.jsx         ← 3-column skills layout with animated bars
│  │  └─ Footer.jsx         ← LinkedIn, GitHub, Email + copyright
│  │
│  ├─ hooks/
│  │  └─ useTranslate.js    ← Custom hook: t, lang, isEN, isFR, switchLang, langLabel
│  ├─ assets/
│  │  ├─ CvButton.jsx       ← CV download button (standalone component)
│  │  ├─ CVButton.jsx       ← alias
│  │  ├─ EmailIcon.jsx      ← SVG icon
│  │  ├─ GitHubIcon.jsx     ← SVG icon
│  │  ├─ GitHubIconBlack.jsx← SVG icon (for lightbox)
│  │  ├─ LinkedInIcon.jsx   ← SVG icon
│  │  └─ PlaceholderSvg.jsx ← Placeholder for missing project images
│  │
│  ├─ store/
│  │  └─ store.js           ← Redux store + languageSlice
│  │
│  ├─ i18n/
│  │  ├─ i18n.js            ← i18next init (EN default, FR fallback)
│  │  └─ locales/
│  │     ├─ en.json         ← All English strings
│  │     └─ fr.json         ← All French strings
│  │
│  ├─ App.jsx               ← Main layout, section order
│  ├─ main.jsx              ← React DOM entry + Redux Provider
│  └─ index.css             ← Global styles + Tailwind imports + CSS vars
│
├─ index.html
├─ vite.config.js
├─ tailwind.config.js
├─ package.json
└─ README_AI.md             ← THIS FILE
```

---

## 📐 Section-by-Section Spec

### 1. `<Navbar />` — Fixed Top
- **Position:** `fixed top-0`, full width, `z-50`
- **Left:** `<- Cristian Manrique ->` logo (teal brackets)
- **Center/Right nav links:** `About · Work · Experience · Projects · Skills · Contacts`
- **Far right:** `FR/EN` language toggle
- **Background:** transparent → blur/dark on scroll
- **Underline hover:** teal accent

---

### 2. `<Hero />` — Full Screen Video Section
- **Background:** Looping video (tech/neural network visual — dark teal)
- **Video tag:** `<video autoPlay muted loop playsInline>`
- **Overlay:** dark gradient `rgba(2,26,43,0.6)` over video
- **Content (centered):**
  ```
  The FUTURE of
  DESIGN & DEVELOPMENT
  is HUMAN + AI
  ```
  - "FUTURE", "DESIGN", "DEVELOPMENT" → **bold/heavy**
  - `hero.line4_human` + `hero.line4_ai` → `<AiBold>` styled component (teal colored)
  - "of", "is", "&" → regular weight
- **Below headline:** `<FutureTitle>` — `The FUTURE is NOW` subtitle
- **Name chip:** `<HeroNameChip>` — circular avatar + logo SVG side by side
- **CV Button:** `<CvButton />` component placed below HeroNameChip
- **Animation:** Staggered reveal with `motion` (lineVariants + scrollVariants)
- **i18n keys:** `hero.line1_pre/bold/post`, `hero.line2`, `hero.line_and`, `hero.line3`, `hero.line4_pre`, `hero.line4_human`, `hero.line4_ai`, `hero.subtitle_*`, `hero.scroll`

---

### 3. `<About />` — "Who Am I?"
- **Layout:** Left = circular photo + name + CV button | Right = text block with teal left-border
- **Title:** `<SectionFlipTitle>` — uses `t('about.who')` + `t('about.am_i')` keys, `isFR` for `" ?"` vs `"?"`
- **Text:** 3 paragraphs — `about.p1`, `about.p2`, `about.p3`
  - p1: "Front-end developer who designs. Designer who codes."
  - p2: Full paragraph on bridging design & code
  - p3: "12 years in art direction... 7 years React in production."
- **Photo:** circular avatar — `src="/avatar.png"` with `onError` fallback gradient
- **CV Button:** `<CvButton />` — standalone component from `src/assets/CvButton.jsx`
- **Left border:** `4px solid #00b4c8` on `AboutRightCol`
- **i18n keys:** `about.who`, `about.am_i`, `about.p1`, `about.p2`, `about.p3`, `about.cv`

---

### 4. `<Experience />` — Work Experience
- **Section title:** `<SectionTitle>` — `t('experience.section_pre')` + `<span>{t('experience.section_bold')}</span>`
- **Data source:** `EXPERIENCE` constant from `Constants.js` — **NOT from i18n**
- **Container:** `<ExperienceTimelineCard>` → `<ExperienceScrollList>` (height: 420px, scrollable)
- **Each entry:**
  - `<ExperiencePeriod>` — inline red dot `<ExperienceRedDot>` + period text
  - `<ExperienceCompany>` — teal, bold uppercase
  - `<ExperienceRole>` — `isEN ? exp.role.en : exp.role.fr`
  - `<ExperienceDesc>` — `isEN ? exp.description.en : exp.description.fr`
- **EXPERIENCE entries (6):** Keyloop Canada Ltd. · Publitech (Contract) · Groupe TVA (Contract) · P3F Solutions (Contract) · Gameloft (Internship) · Graphisme Avant-Première
- **No tags** — uses `description` paragraph instead
- **Scroll:** internal scroll zone, height 420px, thin teal scrollbar
- **Animation:** `motion.div` per item, `opacity 0→1`, `x -30→0`, staggered by index

---

### 5. `<Projects />` — Projects Carousel
- **Section title:** `<SectionTitle>` — `t('projects.section')`
- **Data source:** `PROJECTS` constant from `Constants.js` (6 projects)
- **Layout:** Horizontal carousel with `<` `>` arrow buttons
- **Cards:** Responsive — `ResizeObserver` calculates visible count dynamically
- **Card width:** `CAROUSEL_CARD_WIDTH = 280px`, gap `CAROUSEL_CARD_GAP = 24px`
- **Lightbox:** `<ProjectLightbox>` — full modal with image gallery, tags, GitHub button
- **Arrows:** disabled when at boundaries (`$disabled` transient prop)
- **Dots:** hidden if only 1 page, animated pill shape for active dot
- **Animation:** `motion` slide transition on `ProjectsTrackInner`

---

### 6. `<Skills />` — Skills Grid
- **Section title:** `<SectionTitle>` — `t('skills.section')`
- **Data source:** `SKILLS` constant from `Constants.js` — **NOT from i18n**
- **Layout:** 3-column grid (`SkillsGrid`) — responsive 1 col on mobile
- **Each column:** `SkillsColumnCard` with header (icon + category name)
- **Category names:** `isEN ? col.category.en : col.category.fr`
- **Skill names:** string OR `["EN", "FR"]` array — resolved via `isEN`
- **Animated bars:** `<SkillsBarFill>` — `whileInView` width animation (0 → level%)
- **3 categories:** Development · Design & UX/UI · Tools & AI

---


---

### 8. `<StarTrail />` — Mouse Star Particle Effect
- **File:** `src/components/StarTrail.jsx`
- **Usage:** Wraps the entire app in `App.jsx` — renders a `<canvas>` fixed behind all content
- **Mechanism:** Canvas `z-index: -1`, content wrapper `z-index: 1`, `html/body/#root` forced `background: transparent`
- **Stars:** Spawned on `mousemove` / `touchmove` — throttled to 1× per 30ms
- **Cap:** Max 120 stars alive at once (hard cap)
- **Performance:** Plain objects (no classes), cached hex→rgb, bg fill string computed once
- **Props:**
  ```jsx
  <StarTrail
    background="#02253B"   // Canvas bg color = --bg-deep
    trailAlpha={0.2}       // Trail fade — lower = longer trail
    starCount={3}          // Stars per event
    speed={2}              // Initial velocity
    decay={0.022}          // Alpha decay rate
    gravity={0.05}         // Downward pull
    glowColor="#00b4c8"    // Star glow color
    glowBlur={8}           // Glow blur radius px
    colors={["#00b4c8","#007a8a","#a0c4d8","#ffffff"]}
  >
    {children}
  </StarTrail>
  ```
- **CRITICAL:** Section backgrounds must be `transparent` — not `var(--bg-deep)` or `var(--bg-mid)` — otherwise canvas is hidden behind sections

### 7. `<Footer />` — Contacts
- **Section title:** `CONTACTS` — large bold uppercase
- **Links:** `LinkedIn` · `GitHub` · `Email` with icons
- **Copyright:** `© 2026 Cristian Manrique`
- **Layout:** centered or spread, minimal dark background

---

## ⚙️ Tech Constraints

### Animations — **Motion only** (`motion.dev`)
```jsx
import { motion } from 'motion/react'
// OR
import { animate, stagger } from 'motion'
```
- Use `motion.div`, `motion.h1` etc. for animated elements
- Stagger hero text lines on load
- Fade-in sections on scroll (`whileInView`)
- Carousel transitions via `motion` `AnimatePresence`
- **Do NOT use** CSS animations or Framer Motion legacy API

### styled-components v6 — **All styling**
```jsx
import styled from 'styled-components'

// Basic styled element
const Section = styled.section`
  background: var(--bg-deep);
  padding: 6rem 2.5rem;
`

// Extend a motion element
const Nav = styled(motion.nav)`
  position: fixed;
  background: ${({ $scrolled }) => $scrolled ? 'rgba(2,26,43,0.92)' : 'transparent'};
`

// Use inside component
const MyComponent = () => <Section>...</Section>
```

**Rules:**
- **Zero** inline `style={{}}` objects — everything goes in a styled component
- Use **transient props** (`$propName`) for dynamic styling to avoid DOM attribute warnings
- Name styled components semantically: `Section`, `Container`, `Grid`, `Card`, `Button` etc.
- CSS variables (`var(--accent)`) work natively inside template literals
- Media queries go inside the styled component, not in a separate file
- Sub-components (e.g. `SkillBar`) also use styled components, not inline styles

### Font — **Dosis** (Google Fonts)
```css
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');
```
- Single font family used for all roles: display, body, and mono
- `--font-display`, `--font-body`, `--font-mono` all resolve to `'Dosis', sans-serif`
- Weight `800` for bold headlines, `300`/`200` for light text, `400`–`600` for body
- Preconnect in `index.html` for performance

### Tailwind CSS v4
```css
/* index.css */
@import "tailwindcss";
```
- Config in `tailwind.config.js`
- Used for utility classes when needed alongside styled-components

### Video Background (Hero)
- Video file: `public/hero-bg.mp4` (user must supply)
- Fallback: dark gradient if no video
- Always: `autoPlay muted loop playsInline`

### i18n — **react-i18next + Redux**

#### Architecture
```
User clicks FR/EN button in Navbar
  → switchLang()                    ← from useTranslate hook
  → dispatch(toggleLanguage())      ← Redux action (store/store.js)
  → languageSlice updates state     ← Redux state: { current: 'fr' }
  → i18n.changeLanguage('fr')       ← i18next syncs language
  → all t() calls re-render         ← components update automatically
```

#### useTranslate Hook — always use this, never import useTranslation directly
```js
import useTranslate from '../hooks/useTranslate'

const MyComponent = () => {
  const { t, lang, isEN, isFR, switchLang, setLang, langLabel } = useTranslate()
  // t('nav.about')     → 'About' or 'À propos'
  // lang               → 'en' or 'fr'
  // isEN / isFR        → boolean shorthands
  // switchLang()       → toggle EN ↔ FR
  // setLang('fr')      → set specific language
  // langLabel          → 'FR / EN' or 'EN / FR' for the toggle button
}
```

#### Translation Keys Structure (`en.json` / `fr.json`)
```
nav.about / nav.work / nav.experience / nav.projects / nav.skills / nav.contacts
hero.line1_pre / hero.line1_bold / hero.line1_post / hero.line2 / hero.line_and / hero.line3
hero.line4_pre / hero.line4_human / hero.line4_ai
hero.subtitle_pre / hero.subtitle_bold1 / hero.subtitle_mid / hero.subtitle_bold2 / hero.scroll
about.who / about.am_i / about.p1 / about.p2 / about.p3 / about.cv
experience.section_pre / experience.section_bold / experience.expand / experience.collapse
projects.section
skills.section
footer.section / footer.links.linkedin / footer.links.github / footer.links.email / footer.copyright
```
> ⚠️ `experience.jobs[]` and `skills.columns[]` are **removed from i18n** — data now lives in `Constants.js`

#### Arrays from i18n (Experience jobs, Skills columns)
```js
// Use returnObjects: true for arrays
const jobs = t('experience.jobs', { returnObjects: true })
const columns = t('skills.columns', { returnObjects: true })
```

### Data Constants — `Constants.js`
EXPERIENCE and SKILLS data live in `Constants.js` — **NOT in i18n/locales.json**:
```js
// EXPERIENCE — multilingual via { en, fr } objects
export const EXPERIENCE = [
  {
    id: 1,
    company: 'Keyloop Canada Ltd.',
    role: { en: "Front-End React Developer", fr: "Développeur Front-End React" },
    period: '2018 - 2026',
    description: { en: '...', fr: '...' }
  },
  // ... 6 total entries
]

// SKILLS — multilingual category names, supports ["EN","FR"] name pairs
export const SKILLS = [
  {
    category: { en: "Development", fr: "Développement" },
    icon: "{ }",
    skills: [{ name: "JavaScript", level: 95 }, ...]
  },
  // ... 3 columns
]
```
In components: `isEN ? exp.role.en : exp.role.fr` — never use `t()` for EXPERIENCE or SKILLS data.

### Redux — **Language state only**
```js
import { useSelector, useDispatch } from 'react-redux'
import { toggleLanguage, setLanguage } from '../store/store'

// State shape
{ language: { current: 'en', available: ['en', 'fr'] } }
```
- Redux store is **only for language state** — do not add other state here unless instructed
- Always use `useTranslate` hook instead of accessing Redux directly in components

---

## 🧹 ESLint Configuration

### Installation

```bash
yarn add -D eslint \
  @eslint/js \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y \
  eslint-plugin-import \
  globals \
  prettier \
  eslint-config-prettier \
  eslint-plugin-prettier
```

---

### Config File — `eslint.config.js` (ESLint v9 flat config)

```js
import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  // ─── Ignore generated / dependency folders ───────────────────────
  {
    ignores: ['dist/', 'build/', 'node_modules/', '*.min.js', 'public/'],
  },

  // ─── Base JS recommended rules ───────────────────────────────────
  js.configs.recommended,

  // ─── Main config for all .js / .jsx files ────────────────────────
  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      prettier: prettierPlugin,
    },

    settings: {
      react: { version: 'detect' }, // auto-detect React 19
    },

    rules: {
      // ── Prettier (formatting) ──────────────────────────────────────
      'prettier/prettier': 'warn',

      // ── React ─────────────────────────────────────────────────────
      'react/react-in-jsx-scope': 'off',        // not needed in React 17+
      'react/prop-types': 'off',                // project uses no PropTypes
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/self-closing-comp': 'warn',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

      // ── React Hooks ───────────────────────────────────────────────
      'react-hooks/rules-of-hooks': 'error',    // enforce hook rules
      'react-hooks/exhaustive-deps': 'warn',    // warn on missing deps

      // ── Import order ──────────────────────────────────────────────
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-duplicates': 'error',

      // ── Code quality ──────────────────────────────────────────────
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'no-duplicate-imports': 'error',

      // ── Arrow functions (project uses arrow-only components) ──────
      'prefer-arrow-callback': 'error',
      'arrow-body-style': ['warn', 'as-needed'],

      // ── Accessibility (jsx-a11y) ───────────────────────────────────
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
    },
  },

  // ─── Disable formatting rules that conflict with Prettier ─────────
  prettier,
]
```

---

### Prettier Config — `.prettierrc`

```json
{
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "arrow"
}
```

---

### ESLint Ignore — `.eslintignore`

```
node_modules/
dist/
build/
public/
*.min.js
*.config.js
vite.config.js
tailwind.config.js
```

> In ESLint v9 flat config, ignores can also live in `eslint.config.js` under the `ignores` key (already included above). The `.eslintignore` file is a fallback for tools that don't yet read flat config.

---

### VS Code Integration — `.vscode/settings.json`

```json
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact"
  ],
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

### `.editorconfig` — Cross-Editor Consistency

```ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

---

### Package.json Scripts

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "start":      "yarn dev",
    "dev":        "concurrently \"vite\" \"node src/i18n/watch-locales.js\"",
    "build":      "vite build",
    "prebuild":   "node src/i18n/generate-locales.js",
    "i18n":       "node src/i18n/generate-locales.js",
    "i18n:watch": "node src/i18n/watch-locales.js",
    "lint":       "eslint .",
    "preview":    "vite preview"
  }
}
```
> ⚠️ `react-snap` and `postbuild` have been **removed** — incompatible with React 19 (`SyntaxError: Unexpected token '?'`). Pre-rendering is handled by the hosting platform (Netlify/Vercel).

Usage:
```bash
yarn lint          # check for ESLint errors
yarn lint:fix      # auto-fix all fixable issues
yarn format        # format all files with Prettier
yarn format:check  # check formatting without writing
```

---

### Tool Priority & Override Order

When all tools are active, they apply in this order:

```
.editorconfig → VS Code settings → Prettier (on save) → ESLint (on save)
```

Prettier handles all **formatting** — ESLint handles **code quality**. They never conflict because `eslint-config-prettier` disables all ESLint formatting rules.

---

### ESLint Rules Quick Reference for This Project

| Rule | Level | Reason |
|---|---|---|
| `react/react-in-jsx-scope` | off | React 19 — no import needed |
| `react/prop-types` | off | Project does not use PropTypes |
| `react-hooks/rules-of-hooks` | error | Enforce hook placement |
| `react-hooks/exhaustive-deps` | warn | Catch stale closure bugs |
| `prefer-const` | error | All variables use `const` or `let` |
| `no-var` | error | No `var` declarations |
| `prefer-arrow-callback` | error | All components are arrow functions |
| `no-unused-vars` | warn | Ignore `_` prefixed vars |
| `no-console` | warn | Allow `console.warn` / `console.error` |
| `import/order` | warn | Consistent import grouping |
| `prettier/prettier` | warn | Formatting via Prettier |

---

## 🚀 Development Phases

### ✅ Phase 1 — Pixel-Perfect UI (COMPLETE)
- Match PDF mockup exactly ✅
- All sections built as components ✅
- Motion animations on all sections ✅
- Video background in Hero ✅
- FR/EN language toggle (i18n) ✅
- `StarTrail` mouse particle effect ✅
- Experience scrollable list + expand/collapse ✅
- Projects carousel with lightbox ✅
- Skills animated bars from `SKILLS` constant ✅
- `CVButton` standalone component ✅
- `PortfolioStyled.js` — 130+ exported components ✅
- Responsive (mobile-first) — 33 @media rules ✅
- `FutureTitle` loop animation (offset, hidden on mobile) ✅
- Deployed on Netlify ✅

### ⏳ Phase 2 — API + Database
- REST API (Node.js / Express)
- SQL Database (MySQL or PostgreSQL)
- Endpoints for: Projects, Skills, Experience
- Admin panel to update content without code
- Contact form → DB storage + email notification
- Environment: `.env` for DB credentials

### 📋 Phase 3 — Content & Projects
- Add real project screenshots (WebP format)
- Update `PROJECTS` constant with actual images
- Add NDA-safe mockup projects (recreated UIs)
- Add graphisme/art direction works (Loto-Québec, etc.)
- Update GitHub profile + pin portfolio repo

---

## 🧠 AI Instructions

### General
1. **Always reference the PDF mockup** as the visual source of truth
2. **Never change the color palette** without explicit instruction
3. **All animations use `motion` library** — no CSS keyframes for entrance animations
4. **Maintain component structure** as defined above
5. **The brand signature** `<- Cristian Manrique ->` must always use the exact bracket format
6. **Phase 1 before Phase 2** — do not add DB logic until UI is complete
7. **Video is a `<video>` HTML tag**, not a canvas, not an iframe, not a GIF
8. **`yarn`** is the package manager — use `yarn add` not `npm install`

### Component Syntax — Arrow Functions only
9. **Every component must be a `const` arrow function**, never `function MyComponent() {}`
   ```jsx
   // ✅ CORRECT
   const Hero = () => {
     return <Section>...</Section>
   }
   export default Hero

   // ❌ WRONG — never use this pattern
   export default function Hero() { ... }
   ```
10. Sub-components (e.g. `SkillBar` inside `Skills.jsx`) also use arrow syntax:
    ```jsx
    const SkillBar = ({ name, level, delay }) => (
      <BarRow>...</BarRow>
    )
    ```

### Styling — styled-components only
10. **ALWAYS template literals** — never object style `styled.div({})` or `styled(motion.div)(({}) => ({}))`
    ```jsx
    // ✅ CORRECT — template literal
    const Nav = styled(motion.nav)`
      position: fixed;
      background: ${({ $scrolled }) => $scrolled ? 'rgba(2,26,43,0.92)' : 'transparent'};
    `

    // ❌ WRONG — object style, never use this
    const Nav = styled(motion.nav)(({ $scrolled }) => ({
      position: 'fixed',
      background: $scrolled ? 'rgba(2,26,43,0.92)' : 'transparent',
    }))
    ```
11. **Zero inline `style={{}}` objects** — every style must be a named styled component
12. **Import pattern** — always at top of file after React/motion imports:
    ```jsx
    import styled from 'styled-components'
    ```
13. **Transient props** — use `$propName` for dynamic props to avoid DOM warnings:
    ```jsx
    const Nav = styled.nav`
      background: ${({ $scrolled }) => $scrolled ? 'dark' : 'transparent'};
    `
    // Pass as: <Nav $scrolled={scrolled}>
    ```
14. **Extend motion elements** using `styled(motion.div)`:
    ```jsx
    const Card = styled(motion.div)`
      background: var(--bg-card);
    `
    ```
15. **CSS variables** from `index.css` work natively inside styled-components template literals
16. **Media queries** go inside the styled component definition, not separately


### PortfolioStyled.js — New Components (added since initial build)

| Component | Purpose |
|---|---|
| `SectionTitle` | Generic reusable section title — used in Experience, Projects, Skills, Footer |
| `SectionFlipTitle` | Animated title for About section |
| `FutureTitle` | Hero subtitle "The FUTURE is NOW" |
| `AiBold` | Teal-colored bold span for "HUMAN" and "AI" in hero line4 |
| `HeroNameChip` | Pill container: avatar + logo side by side |
| `HeroAvatar` | Circular avatar image `/cris.png` |
| `HeroLogo` | SVG logo `/cris-logo.svg` (245×43px) |
| `ExperienceScrollList` | Internal scroll zone (height: 420px, teal scrollbar) |
| `ExperienceExpandFooter` | Sticky footer inside timeline card for expand/collapse |
| `ExperienceExpandBtn` | Pill button for expand/collapse |
| `ExperienceExpandIcon` | Rotating `›` chevron |
| `ExperienceDesc` | Job description paragraph |

> **Section backgrounds:** All section backgrounds are `transparent` to allow `StarTrail` canvas to show through.

### i18n — always use useTranslate
17. **Never import `useTranslation` directly** — always use the custom hook:
    ```jsx
    import useTranslate from '../hooks/useTranslate'
    const { t, switchLang, langLabel } = useTranslate()
    ```
18. **No hardcoded strings** in any component — every user-facing string must use `t('key')`
19. **Arrays** from translations need `{ returnObjects: true }`:
    ```jsx
    const jobs = t('experience.jobs', { returnObjects: true })
    ```
20. **Both `en.json` and `fr.json` must be updated** whenever new text is added

### Redux
21. **Redux is language-only** — do not add other global state without instruction
22. Language toggle always goes through `switchLang()` from `useTranslate`, never direct dispatch

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19.2.0 | UI framework |
| `react-dom` | ^19.2.0 | DOM rendering |
| `motion` | ^12.35.2 | All animations |
| `framer-motion` | ^12.35.2 | (same lib, aliased) |
| `styled-components` | ^6.1.13 | All component styling |
| `i18next` | ^24.2.0 | i18n engine |
| `react-i18next` | ^15.4.0 | React bindings for i18next |
| `@reduxjs/toolkit` | ^2.3.0 | Redux store + slices |
| `react-redux` | ^9.2.0 | React bindings for Redux |
| `tailwindcss` | ^4.2.1 | Utility CSS (alongside styled-components) |
| `@tailwindcss/vite` | ^4.2.1 | Vite plugin for TW4 |
| `vite` | ^7.3.1 | Build tool |
| `@vitejs/plugin-react` | ^5.1.1 | React + Babel |
| `eslint` | ^9.x | Linting engine |
| `@eslint/js` | ^9.x | ESLint JS recommended rules |
| `eslint-plugin-react` | latest | React-specific lint rules |
| `eslint-plugin-react-hooks` | latest | Hooks rules enforcement |
| `eslint-plugin-jsx-a11y` | latest | Accessibility warnings |
| `eslint-plugin-import` | latest | Import order + deduplication |
| `globals` | latest | Browser/ES globals for flat config |
| `prettier` | latest | Code formatter |
| `eslint-config-prettier` | latest | Disables ESLint formatting rules |
| `eslint-plugin-prettier` | latest | Runs Prettier as an ESLint rule |

### Install command
```bash
yarn add styled-components i18next react-i18next @reduxjs/toolkit react-redux

yarn add -D eslint @eslint/js eslint-plugin-react eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y eslint-plugin-import globals \
  prettier eslint-config-prettier eslint-plugin-prettier
```

---

## 🔗 Useful References

- Motion docs: https://motion.dev/docs/react-transitions
- Tailwind v4: https://tailwindcss.com/docs/installation/using-vite
- styled-components v6: https://styled-components.com/docs
- react-i18next: https://react.i18next.com/
- Redux Toolkit: https://redux-toolkit.js.org/
- Dosis font: https://fonts.google.com/specimen/Dosis
- Vite config: https://vite.dev/config/
- React 19: https://react.dev/
- ESLint flat config: https://eslint.org/docs/latest/use/configure/configuration-files
- Prettier: https://prettier.io/docs/en/configuration.html
- eslint-plugin-react: https://github.com/jsx-eslint/eslint-plugin-react
- eslint-plugin-react-hooks: https://www.npmjs.com/package/eslint-plugin-react-hooks

## 🌐 SEO & Performance (React SPA Optimization)

### ⚠️ Important — SPA SEO limitations
This project uses a **React SPA (Vite)**.
To ensure proper indexing by search engines:

- Use **pre-rendering** (static HTML generation)
- Optimize **Core Web Vitals**
- Provide **structured data (JSON-LD)**

---

### ✅ Deployment — Netlify (recommended)

**react-snap has been REMOVED** — incompatible with React 19 (Puppeteer chokes on optional chaining `?.`).

**Deploy steps:**
```bash
yarn build
echo "/*  /index.html  200" > dist/_redirects
# Then drag & drop dist/ on netlify.com
```

**Or via Netlify CLI:**
```bash
npx netlify-cli deploy --prod --dir=dist
```

**Vercel alternative:**
```bash
npx vercel --prod
```

👉 Both Netlify and Vercel handle SPA routing automatically. The `_redirects` file ensures no 404 on hard refresh.

**Build output (Vite):**
```
dist/index.html                  0.81 kB
dist/assets/index-*.css         11.07 kB
dist/assets/index-*.js         485.38 kB  (gzip: 157 kB)
```
Total build time: ~4s ✅

---

### ✅ Netlify Configuration

Create `netlify.toml` in project root:
```toml
[build]
  command   = "yarn build"
  publish   = "dist"

[[redirects]]
  from = "/*"
  to   = "/index.html"
  status = 200
```

This replaces the manual `_redirects` file and configures the build command for Netlify CI.

---

### ✅ Meta Management

**Library:** react-helmet-async

**Rules:**
- Every page MUST define:
  - `<title>`
  - `<meta name="description">`
- Use canonical URLs
- Include Open Graph + Twitter meta tags

---

### ✅ Structured Data (JSON-LD)

Use schema.org with valid types:

✔ `"Person"` (for portfolio)
❌ `"Portfolio"` (invalid)

---

### ⚡ Performance Optimization

#### Lazy Loading (code splitting)

Use:
```js
import { lazy, Suspense } from "react";
```

Rules:
- ❌ Do NOT lazy load above-the-fold components:
  - Hero
  - Navbar
  - Helmet
- ✅ Lazy load:
  - Projects
  - Skills
  - Experience
  - Footer

---

#### Images
- Use **WebP**
- Always include `loading="lazy"`
- Always include `alt`

---

### 🗺️ Sitemap & Robots

Generate:
- `/sitemap.xml`
- `/robots.txt`

---

### 🔗 Backlinks Strategy (Non-code SEO)

To rank on Google:
- GitHub profile → link portfolio
- LinkedIn → link portfolio
- Articles (Dev.to, Medium)

---

## 🚀 Additional AI Rules — Performance & SEO

### Performance — Code Splitting Rules
23. Use `React.lazy` for non-critical components only
24. Wrap lazy components in `<Suspense>` with a proper loader
25. Never lazy load:
   - `<Navbar />`
   - `<Hero />`
   - `<HelmetComponent />`
26. Prefer splitting by **section**, not by small components

---

### SEO Rules
27. Every page must include a `<Helmet>` block
28. Use only valid schema.org types (`Person`, `WebSite`)
29. Always include:
   - `canonical`
   - `og:*`
   - `twitter:*`
30. Avoid duplicate titles/descriptions across pages
31. No empty or placeholder meta content

---

## 🔧 Fixes

### Dev Server Port
Port is set to `3000` in `vite.config.js`:
```js
server: { port: 3000 }
```
→ `http://localhost:3000`

---

*Last updated: March 2026 · Cristian Manrique Portfolio — v3.0 · Alpha deployed on Netlify*
