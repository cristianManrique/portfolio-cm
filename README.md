# <- Cristian Manrique -> · Portfolio

> **ALPHA VERSION** — This repository is a public showcase of the codebase architecture and front-end work.  
> The full production version is live and private — source code not publicly available.

---

## Overview

Personal portfolio built with **React 19** and **Vite**, featuring a bilingual UI (EN/FR), a serverless CMS backend, and an admin dashboard — all without a traditional server.

This alpha version demonstrates the architecture, component structure, and tooling used in the production build. The admin panel is a **UI placeholder only** — connect your own `.env` to activate the live backend.

---

## Tech Stack

### Frontend
| | |
|---|---|
| React 19 | Component framework |
| Vite 7 | Build tool & dev server |
| Styled Components v6 | CSS-in-JS styling (130+ exported components) |
| Framer Motion (motion/react) | Animations & transitions |
| React Router v7 | Client-side routing |
| Redux Toolkit | Language state management |
| i18next | EN / FR internationalization |
| EmailJS | Contact form (no server needed) |
| React Helmet Async | SEO meta tags |

### Backend (Netlify Serverless Functions)
| | |
|---|---|
| Netlify Functions | Serverless API handlers |
| MongoDB Atlas + Mongoose | Database & ODM |
| JWT + bcryptjs | Admin authentication |
| Cloudinary | Image hosting & optimization |

---

## Features

- **Bilingual** — full EN/FR switch, all content translated
- **Projects section** — dynamic cards with lightbox, tags, GitHub + Live Demo links
- **Contact form** — validation, honeypot anti-spam, reCAPTCHA v2, auto-reply
- **Admin CMS** *(placeholder in this repo)* — full CRUD for projects, drag-and-drop reordering, image upload to Cloudinary
- **Serverless API** — 8 Netlify Functions for auth, projects, experience, and image upload
- **SEO** — Open Graph, Twitter Card, canonical URL, dynamic lang attribute

---

## Project Structure

```
portfolio_cm/
├── src/
│   ├── components/        # Shared UI components + styled system
│   │   ├── Constants.js       # PROJECTS, EXPERIENCE, SKILLS, animation variants
│   │   ├── PortfolioStyled.js # 130+ styled-components exports
│   │   ├── ProjectLightbox.jsx
│   │   ├── ContactForm.jsx
│   │   ├── HelmetComponent.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/             # AdminLogin, AdminDashboard (placeholders)
│   ├── hooks/             # useTranslate
│   ├── i18n/              # EN/FR locale files + i18n.js init
│   ├── redux/             # Store + languageSlice
│   ├── utils/             # Axios client with JWT interceptor
│   └── App.jsx            # Router — /, /admin/login, /admin/dashboard
├── netlify/
│   └── functions/
│       ├── lib/           # db.js · models.js · auth.js
│       ├── auth-login.js
│       ├── projects-get.js
│       ├── projects-post.js
│       ├── projects-update.js
│       ├── projects-delete.js
│       ├── projects-reorder.js
│       ├── experience-get.js
│       └── upload-image.js
├── public/projects/       # Project screenshots (gitignored — add your own)
├── .env.example           # All required env vars documented
└── netlify.toml           # Build config + SPA redirects
```

---

## Key Code Patterns

### Component signature — arrow function, named export default
```jsx
const ProjectLightbox = ({ project, onClose, lang = 'en' }) => {
  // ...
}
export default ProjectLightbox
```

### Styled components — template literals, transient props
```jsx
import styled from 'styled-components'
import { motion } from 'motion/react'

const Card = styled(motion.div)`
  background: var(--bg-card);
  border-top: 3px solid var(--accent);
  opacity: ${({ $isDragging }) => $isDragging ? 0.8 : 1};
`
```

### i18n — always via useTranslate hook
```jsx
import useTranslate from '../hooks/useTranslate'

const { t, lang, isEN, isFR, switchLang, langLabel } = useTranslate()
// t('nav.about') → 'About' | 'À propos'
// lang           → 'en' | 'fr'
```

### PROJECTS constant — bilingual, with demo field
```js
export const PROJECTS = [
  {
    id: uuidv4(),
    title:       { en: 'My Project', fr: 'Mon Projet' },
    images:      ['/projects/screenshot.png'],
    description: { en: '...', fr: '...' },
    tags:        ['React', 'MongoDB'],
    github:      'https://github.com/...',   // null if not public
    demo:        'https://...',              // null if no live demo
  },
]
```

### Axios client — JWT auto-attached
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

### Drag-and-drop reordering — @dnd-kit
```jsx
// Admin dashboard — drag handle + sortable context
const SortableRow = ({ project, onEdit, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging }
    = useSortable({ id: project._id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 'auto',
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
```

### Netlify Function — bulk order update (MongoDB bulkWrite)
```js
// netlify/functions/projects-reorder.js
await Project.bulkWrite(
  items.map(({ id, order }) => ({
    updateOne: { filter: { _id: id }, update: { $set: { order } } }
  }))
)
```

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/cristianManrique/portfolio-cm.git
cd portfolio-cm
yarn install
```

### 2. Configure environment

```bash
cp .env.example .env
# Fill in your own values — see .env.example for instructions
```

### 3. Run locally

```bash
yarn dev
```

> The admin panel at `/admin/dashboard` requires a live backend (MongoDB + Netlify Functions).  
> In this alpha, all admin actions show a **demo mode** message.

---

## Environment Variables

All required variables are documented in [`.env.example`](.env.example).  
**Never commit `.env`** — it is gitignored.

| Variable | Purpose |
|---|---|
| `VITE_EMAILJS_*` | Contact form email sending |
| `VITE_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 (optional — bypassed if missing) |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `ADMIN_PASSWORD_HASH` | bcrypt hash of admin password |
| `ADMIN_JWT_SECRET` | JWT signing secret |
| `CLOUDINARY_*` | Image upload & optimization |

---

## Deployment

This project is designed for **Netlify**:

```bash
yarn build        # outputs to /dist
```

`netlify.toml` handles build config, function paths, and SPA redirects automatically.

---

## Note on this Repository

This is an **alpha / showcase version** of my portfolio.

- The **production version** is live at **[crisman.dev](https://crisman.dev)** — not open source
- Admin credentials and database access are not included
- Project screenshots in `/public/projects/` are gitignored — add your own locally

---

## Author

**Cristian Manrique**  
Front-End Developer & UI/UX Designer — Montréal  
[linkedin.com/in/cristian-manrique](https://linkedin.com/in/cristian-manrique) · [github.com/cristianManrique](https://github.com/cristianManrique)
