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
| Styled Components | CSS-in-JS styling |
| Framer Motion | Animations & transitions |
| React Router v7 | Client-side routing |
| Redux Toolkit | State management |
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
- **Projects section** — dynamic cards with lightbox, tags, and GitHub links
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
│   ├── pages/             # AdminLogin, AdminDashboard (placeholders)
│   ├── hooks/             # useTranslate
│   ├── i18n/              # EN/FR locale files
│   ├── redux/             # Store
│   ├── utils/             # Axios client with JWT interceptor
│   └── App.jsx            # Router — /, /admin/login, /admin
├── netlify/
│   └── functions/
│       ├── lib/           # db.js · models.js · auth.js
│       ├── auth-login.js
│       ├── projects-get/post/update/delete/reorder.js
│       ├── experience-get.js
│       └── upload-image.js
├── public/projects/       # Project screenshots (gitignored — add your own)
├── .env.example           # All required env vars documented
└── netlify.toml           # Build config + SPA redirects
```

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/cristianManrique/portfolio_cm.git
cd portfolio_cm
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

> The admin panel at `/admin` requires a live backend (MongoDB + Netlify Functions).  
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
