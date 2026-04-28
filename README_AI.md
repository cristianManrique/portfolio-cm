# 🤖 README_AI — Portfolio CM · AI Project Guide

> **For AI assistants working on this project.**
> Read this file entirely before touching any code.

---

## 📌 Project Identity

| Field | Value |
|---|---|
| **Project Name** | `portfolio-cm` |
| **Owner** | Cristian Manrique |
| **Type** | Personal Portfolio — Front-End Developer & Web Designer UI/UX |
| **Stack** | React 19 · Vite 7 · styled-components v6 · motion/react · Redux · i18next · Netlify Functions · MongoDB |
| **Local Path (beta)** | `C:\Users\admin\Documents\www\portfolio_cm` |
| **Local Path (alpha)** | `C:\Users\admin\Documents\www\portfolio_cm_alpha` |
| **Dev Command** | `yarn dev` → `http://localhost:3000` |
| **Build Command** | `yarn build` |
| **Deployed** | [crisman.dev](https://crisman.dev) (production, private) |

---

## 🎨 Design Reference

### Color Palette

| Role | Color |
|---|---|
| Background dark | `#021a2b` (deep navy) |
| Background mid | `#032d45` (teal-navy) |
| Background card | `#0a3a52` |
| Accent teal | `#00b4c8` |
| Accent red | `#e63946` |
| Text primary | `#ffffff` |
| Text muted | `#a0c4d8` |
| Border/line | `rgba(0,180,200,0.2)` |

### Typography

| Role | Style |
|---|---|
| Logo / Brand | `<- Cristian Manrique ->` — brackets in teal accent |
| Section titles | Bold uppercase, large |
| Body text | Regular weight, muted color |
| Tags / Pills | Small, rounded border, `#00b4c8` outline |
| Font family | Dosis (Google Fonts) — `--font-display`, `--font-body`, `--font-mono` |

---

## 🗂️ File Structure

```
portfolio_cm/
├── src/
│   ├── components/
│   │   ├── Constants.js         ← PROJECTS · EXPERIENCE · SKILLS · animation variants
│   │   ├── PortfolioStyled.js   ← 130+ styled-component exports (single source)
│   │   ├── StarTrail.jsx        ← Mouse/touch star particle canvas wrapper
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx         ← Carousel + lightbox
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectLightbox.jsx  ← Full-screen modal: image gallery, tags, GitHub + Demo buttons
│   │   ├── Skills.jsx
│   │   ├── ContactForm.jsx      ← EmailJS + reCAPTCHA (optional) + honeypot
│   │   ├── HelmetComponent.jsx  ← SEO meta tags (react-helmet-async)
│   │   ├── Footer.jsx
│   │   └── ProtectedRoute.jsx   ← sessionStorage JWT guard
│   ├── pages/
│   │   ├── AdminLogin.jsx       ← JWT login form
│   │   └── AdminDashboard.jsx   ← Full CRUD + dnd-kit drag-and-drop reorder
│   ├── hooks/
│   │   └── useTranslate.js      ← { t, lang, isEN, isFR, switchLang, langLabel }
│   ├── i18n/
│   │   ├── i18n.js              ← i18next init
│   │   └── locales.json         ← EN/FR arrays: nav · hero · about · experience · projects · skills · contact · footer
│   ├── redux/
│   │   └── store.js             ← languageSlice only
│   ├── utils/
│   │   └── Api.js               ← Axios + Bearer token interceptor
│   ├── assets/                  ← SVG icon components
│   ├── App.jsx                  ← BrowserRouter: / · /admin/login · /admin/dashboard
│   └── main.jsx                 ← StrictMode > HelmetProvider > Provider > App
│
├── netlify/
│   └── functions/
│       ├── lib/
│       │   ├── db.js            ← connectDB() — mongoose singleton
│       │   ├── models.js        ← ProjectSchema · ExperienceSchema
│       │   └── auth.js          ← verifyToken · unauthorized · ok · err helpers
│       ├── auth-login.js        ← POST — bcrypt verify + JWT sign
│       ├── projects-get.js      ← GET — sorted by order
│       ├── projects-post.js     ← POST — create project (auth required)
│       ├── projects-update.js   ← PATCH ?id= — update project (auth required)
│       ├── projects-delete.js   ← DELETE ?id= — delete project (auth required)
│       ├── projects-reorder.js  ← PATCH — bulk order via bulkWrite (auth required)
│       ├── experience-get.js    ← GET — sorted by order
│       └── upload-image.js      ← POST — base64 → Cloudinary (auth required)
│
├── public/
│   ├── projects/                ← Screenshots (gitignored, add your own)
│   └── projects/project-placeholder.svg
│
├── .env.example
└── netlify.toml
```

---

## 🔑 Key Code Patterns

### 1. Component signature — always arrow function + default export
```jsx
const ProjectLightbox = ({ project, onClose, lang = 'en' }) => {
  const [imgIndex, setImgIndex] = useState(0)
  // ...
}
export default ProjectLightbox
```

### 2. Styled components — template literals + transient props
```jsx
import styled from 'styled-components'
import { motion } from 'motion/react'

// Extend motion element
const Card = styled(motion.div)`
  background: var(--bg-card);
  border-top: 3px solid var(--accent);
  opacity: ${({ $isDragging }) => $isDragging ? 0.8 : 1};
`
// ❌ NEVER object syntax: styled.div({}) or styled(x)(({}) => ({}))
// ❌ NEVER inline style={{}} — everything is a named styled component
// ✅ Transient props ($propName) prevent DOM attribute warnings
```

### 3. PortfolioStyled.js — import pattern
```jsx
// Import all styled exports as a namespace
import * as Styled from '../components/PortfolioStyled'

// Use in JSX
<Styled.LightboxModal>
  <Styled.LightboxTitle>{project.title[lang]}</Styled.LightboxTitle>
  <Styled.LightboxBtnRow>
    {project.github && <Styled.LightboxGithubBtn href={project.github}>GitHub</Styled.LightboxGithubBtn>}
    {project.demo   && <Styled.LightboxDemoBtn   href={project.demo}>Live Demo ↗</Styled.LightboxDemoBtn>}
  </Styled.LightboxBtnRow>
</Styled.LightboxModal>
```

### 4. i18n — always via useTranslate hook
```jsx
import useTranslate from '../hooks/useTranslate'

const MyComponent = () => {
  const { t, lang, isEN, isFR, switchLang, langLabel } = useTranslate()
  return <h1>{t('hero.line1_pre')}</h1>
}
// NEVER: import { useTranslation } from 'react-i18next'
```

### 5. PROJECTS constant — structure with demo field
```js
// src/components/Constants.js
export const PROJECTS = [
  {
    id: uuidv4(),
    title:       { en: 'My Project', fr: 'Mon Projet' },
    images:      ['/projects/screenshot.png'],
    description: { en: 'English description', fr: 'Description française' },
    tags:        ['React', 'MongoDB', 'Node.js'],
    github:      'https://github.com/...',   // null → GitHub button hidden
    demo:        'https://...',              // null → Demo button hidden
  },
]
```

### 6. Axios client — JWT auto-attached via interceptor
```js
// src/utils/Api.js
import axios from 'axios'

const client = axios.create()

client.interceptors.request.use(config => {
  const token = sessionStorage.getItem('admin_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export const apiGet    = (url)         => client.get(url)
export const apiPost   = (url, data)   => client.post(url, data)
export const apiPatch  = (url, data)   => client.patch(url, data)
export const apiDelete = (url)         => client.delete(url)
```

### 7. Drag-and-drop — @dnd-kit/sortable pattern
```jsx
// Admin dashboard SortableRow sub-component
const SortableRow = ({ project, onEdit, onDelete }) => {
  const {
    attributes, listeners, setNodeRef,
    transform, transition, isDragging,
  } = useSortable({ id: project._id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 'auto',
    position: isDragging ? 'relative' : 'static',
  }

  return (
    <div ref={setNodeRef} style={style}>
      <ProjectRow $isDragging={isDragging}>
        <DragHandle {...attributes} {...listeners}>
          <span /><span /><span />
        </DragHandle>
        {/* ... */}
      </ProjectRow>
    </div>
  )
}

// Wrap list in DndContext + SortableContext
<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
  <SortableContext items={projects.map(p => p._id)} strategy={verticalListSortingStrategy}>
    {projects.map(p => <SortableRow key={p._id} project={p} ... />)}
  </SortableContext>
</DndContext>
```

### 8. Netlify Function — auth + response helpers
```js
// netlify/functions/lib/auth.js pattern
export const verifyToken = (event) => {
  const auth = event.headers.authorization || ''
  const token = auth.replace('Bearer ', '')
  try { jwt.verify(token, process.env.ADMIN_JWT_SECRET); return true }
  catch { return false }
}
export const ok  = (data, status = 200) => ({ statusCode: status, body: JSON.stringify(data) })
export const err = (msg,  status = 500) => ({ statusCode: status, body: JSON.stringify({ error: msg }) })
```

### 9. Netlify Function — bulk order update (MongoDB bulkWrite)
```js
// netlify/functions/projects-reorder.js
await Project.bulkWrite(
  items.map(({ id, order }) => ({
    updateOne: { filter: { _id: id }, update: { $set: { order } } }
  }))
)
```

### 10. ContactForm — reCAPTCHA optional
```jsx
// reCAPTCHA is bypassed if VITE_RECAPTCHA_SITE_KEY is not set
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || null
const [captchaDone, setCaptchaDone] = useState(!RECAPTCHA_SITE_KEY)

// Render only when key exists
{RECAPTCHA_SITE_KEY && (
  <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={() => setCaptchaDone(true)} />
)}
```

---

## 📐 Section-by-Section Spec

### `<App />` — Router
```
/                  → <Portfolio /> (all sections)
/admin/login       → <AdminLogin />
/admin/dashboard   → <ProtectedRoute><AdminDashboard /></ProtectedRoute>
```

### `<Navbar />` — Fixed Top
- Logo: `<- Cristian Manrique ->` (brackets in accent teal)
- Nav links: About · Experience · Projects · Skills · Contacts
- Far right: FR/EN toggle via `switchLang()` from `useTranslate`
- Scroll effect: transparent → `rgba(2,26,43,0.92)` blur background

### `<Hero />` — Full Screen
- Video background: `<video autoPlay muted loop playsInline src="/hero-bg.mp4">`
- Headline: staggered `motion` reveal — "The FUTURE of DESIGN & DEVELOPMENT is HUMAN + AI"
- `<StarTrail>` wraps entire app — canvas `z-index: -1`

### `<ProjectLightbox />` — Modal
```jsx
const ProjectLightbox = ({ project, onClose, lang = 'en' }) => {
  // Left panel: image carousel with dots
  // Right panel: title, description, tags
  // CTA row: LightboxGithubBtn (outline) + LightboxDemoBtn (filled teal)
  //   — both hidden if their respective url is null
}
```

### `<ContactForm />` — EmailJS
- Fields: name, email, message, _trap (honeypot hidden field)
- reCAPTCHA v2 — optional (bypassed if no VITE_RECAPTCHA_SITE_KEY)
- Sends via EmailJS: contact template + auto-reply template
- 60s cooldown after successful submission

### `<AdminDashboard />` — Full CRUD + DnD
- Left card: Add/Edit project form (title EN/FR, desc EN/FR, tags, github, demo URL, image upload)
- Right card: Project list with drag-and-drop (dnd-kit), SAVE/RESET order toolbar
- Save order → `PATCH /.netlify/functions/projects-reorder` → MongoDB `bulkWrite`
- Image upload → base64 → `POST /.netlify/functions/upload-image` → Cloudinary

---

## ⚙️ Tech Constraints

### Motion — import from `motion/react`
```jsx
import { motion, AnimatePresence } from 'motion/react'
// NOT: from 'framer-motion'
```

### styled-components v6 — template literals only
```jsx
// ✅ Correct
const Btn = styled(motion.button)`color: var(--accent);`

// ❌ Wrong — never object syntax
const Btn = styled(motion.button)(({ theme }) => ({ color: theme.accent }))
```

### i18n structure — `src/i18n/locales.json`
```
en[] / fr[]  keys:
  nav · hero · about · experience · projects · skills · contact · footer
```
- EXPERIENCE and SKILLS data → `Constants.js` only, never in locales
- Use `isEN ? data.en : data.fr` for bilingual constants, never `t()` for them

### Redux — language only
```js
// store shape: { language: { current: 'en' } }
// Only use via useTranslate hook — never direct useDispatch in components
```

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19 | UI framework |
| `vite` | ^7 | Build tool |
| `styled-components` | ^6 | All styling |
| `motion` | ^12 | Animations (`motion/react`) |
| `react-router-dom` | ^7 | Routing |
| `@reduxjs/toolkit` | ^2 | Redux store |
| `react-redux` | ^9 | React bindings |
| `i18next` | ^24 | i18n engine |
| `react-i18next` | ^15 | React bindings |
| `react-helmet-async` | latest | SEO meta tags |
| `emailjs-com` | latest | Contact form |
| `react-google-recaptcha` | latest | reCAPTCHA v2 |
| `@dnd-kit/core` | latest | Drag-and-drop (admin) |
| `@dnd-kit/sortable` | latest | Sortable list |
| `axios` | latest | HTTP client |
| `uuid` | latest | Project IDs (Constants.js) |
| `mongoose` | latest | MongoDB ODM (functions) |
| `jsonwebtoken` | latest | JWT (functions) |
| `bcryptjs` | latest | Password hash (functions) |
| `cloudinary` | latest | Image upload (functions) |

---

## 🚀 Development Phases

### ✅ Phase 1 — Pixel-Perfect UI (COMPLETE)
- All sections: Navbar, Hero, About, Experience, Projects, Skills, Contact, Footer ✅
- Motion animations throughout ✅
- EN/FR bilingual (i18next + Redux) ✅
- StarTrail canvas particle effect ✅
- Projects carousel + ProjectLightbox modal ✅
- PortfolioStyled.js — 130+ exported components ✅
- Responsive (mobile-first) ✅
- SEO (react-helmet-async, Open Graph, JSON-LD) ✅

### ✅ Phase 2 — Serverless CMS Backend (COMPLETE)
- 8 Netlify Functions: auth, projects CRUD+reorder, experience, image upload ✅
- MongoDB Atlas + Mongoose (Project + Experience schemas with `demo` field) ✅
- JWT authentication + bcrypt password verify ✅
- Cloudinary image upload ✅
- Admin Dashboard: full CRUD + drag-and-drop reordering (dnd-kit) ✅
- SAVE/RESET order toolbar with MongoDB `bulkWrite` persistence ✅
- Axios interceptor: auto-attach Bearer token ✅
- ProtectedRoute: JWT sessionStorage guard ✅

### 📋 Phase 3 — Content & Polish (In Progress)
- Real project screenshots (WebP, Cloudinary-optimized)
- Live Demo URLs for all public projects
- Additional projects when available
- Performance audit (Core Web Vitals)

---

## 🧠 AI Instructions

1. **All components are arrow functions** — never `function MyComponent() {}`
2. **All styling is styled-components** — zero inline `style={{}}`, zero Tailwind in components
3. **All animations use `motion/react`** — never CSS keyframes for entrance animations
4. **i18n always through `useTranslate` hook** — never direct `useTranslation`
5. **Bilingual data** (EXPERIENCE, SKILLS, PROJECTS) lives in `Constants.js` — never in locales
6. **Transient props** (`$propName`) for any dynamic styled-component prop
7. **`yarn`** is the package manager — never `npm install`
8. **Admin pages in alpha are placeholders** — never include real API calls
9. **`demo` field** is part of every project — `null` hides the button, a URL shows it
10. **`PortfolioStyled.js`** is the single source for all styled components — never duplicate

---

*Last updated: April 2026 · Portfolio CM · Alpha v2.0 · Phases 1 & 2 complete*
