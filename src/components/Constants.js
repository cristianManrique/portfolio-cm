import { v4 as uuidv4 } from 'uuid'

// ─────────────────────────────────────────────────────────────────────────────
// Constants.js — Portfolio CM
// Central file for all shared constants across components
// ─────────────────────────────────────────────────────────────────────────────


// ─── API Data ─────────────────────────────────────────────────────────────
export const PROJECTS = [
  // ── 1 ─────────────────────────────────────────────────────────────────────
  {
    id: uuidv4(),
    title: {
      en: '<- Cristian Manrique -> — Portfolio && CMS Dashboard',
      fr: '<- Cristian Manrique -> — Portfolio && Tableau de bord CMS',
    },
    images: ['/projects/project-placeholder.svg'],
    description: {
      en: 'Build my portfolio that manages itself. Update projects, swap images and reorder content live, without touching the code. SOLUTION: Full-stack CMS with JWT admin dashboard, bilingual CRUD, drag-and-drop reordering and Cloudinary image uploads. Data persisted in MongoDB Atlas via Netlify serverless functions. Architecture built in close collaboration with Claude AI.',
      fr: 'Construire mon portfolio qui se gère lui-même. Mettre à jour les projets, changer les images et réordonner le contenu en direct, sans toucher au code. SOLUTION : CMS full-stack avec dashboard admin JWT, CRUD bilingue, réorganisation drag-and-drop et upload Cloudinary. Données persistées dans MongoDB Atlas via les fonctions serverless Netlify. Architecture développée en collaboration étroite avec Claude AI.',
    },
    tags: ['React', 'React Router', 'MongoDB', 'Netlify Functions', 'Cloudinary', 'JWT', 'Node.js'],
    github: 'https://github.com/cristianManrique/portfolio-cm',
    demo: 'https://crisman.dev',
  },

  // ── 2 ─────────────────────────────────────────────────────────────────────
  {
    id: uuidv4(),
    title: {
      en: 'Notes Dashboard — Kanban Board',
      fr: 'Tableau de bord Notes — Kanban',
    },
    images: ['/projects/project-placeholder.svg'],
    description: {
      en: 'Personal project — a drag-and-drop Kanban board to master modern front-end engineering concepts. 3-column board (To Do · In Progress · Done) with note management, dark/light mode, and persistent storage. Built step by step, from skeleton to production-ready app.',
      fr: 'Projet personnel — un tableau Kanban drag-and-drop pour maîtriser des concepts front-end modernes. 3 colonnes (À faire · En cours · Terminé) avec gestion des notes, mode sombre/clair et stockage persistant. Construit pas à pas, du squelette à l\'app prête pour la production.',
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Context API', 'dnd-kit', 'Prisma + SQLite', 'Jest + RTL'],
    github: 'https://github.com/cristianManrique/notes-dashboard',
    demo: 'https://notes-dashboard-demo.netlify.app/',
  },

  // ── 3 ─────────────────────────────────────────────────────────────────────
  {
    id: uuidv4(),
    title: {
      en: 'AI Form Builder — Claude AI',
      fr: 'Générateur de formulaires IA — Claude AI',
    },
    images: ['/projects/project-placeholder.svg'],
    description: {
      en: 'Internal tooling project for the automotive sector. Developed an AI-assisted workflow to accelerate form creation — reducing a multi-step manual process to a matter of minutes. SOLUTION: Integration of Claude AI with React to automate form structure generation, JSON schema output, and a live preview rendering. Internal tooling project — data anonymized for confidentiality.',
      fr: 'Outil interne pour le secteur automobile. Développement d\'un workflow assisté par IA pour accélérer la création de formulaires — réduisant un processus manuel de plusieurs étapes à quelques minutes. SOLUTION : Intégration de Claude AI avec React pour automatiser la génération de structure, l\'export JSON Schema et le rendu live. Données anonymisées.',
    },
    tags: ['Claude AI', 'React', 'PDF Analysis', 'JSON Schema', 'i18n', 'UX'],
    github: null,
    demo: null,
  },

  // ── 4 ─────────────────────────────────────────────────────────────────────
  {
    id: uuidv4(),
    title: {
      en: 'Confidential Client — Automotive Sector',
      fr: 'Client confidentiel — Secteur automobile',
    },
    images: ['/projects/project-placeholder.svg'],
    description: {
      en: 'Large-scale front-end project in the automotive sector. Redesign of a complex web application with a focus on UX improvement and performance. SOLUTION: Built with React and Redux, new component-based architecture and a unified design system from Figma and Adobe XD mockups. Client data anonymized — production project under NDA.',
      fr: 'Projet front-end de grande envergure dans le secteur automobile. Refonte d\'une application web complexe axée sur l\'amélioration de l\'UX et la performance. SOLUTION : Architecture React/Redux avec nouveau système de composants et design system unifié (Figma, Adobe XD). Données client anonymisées — projet en production sous NDA.',
    },
    tags: ['React', 'Redux', 'React Router', 'Design System', 'Figma', 'Adobe XD'],
    github: null,
    demo: null,
  },

  // ── Coming soon ────────────────────────────────────────────────────────────
  {
    id: uuidv4(),
    title: { en: 'Brand Identity', fr: 'Identité de marque' },
    images: ['/projects/project-placeholder.svg'],
    description: { en: 'Coming soon.', fr: 'Bientôt disponible.' },
    tags: ['Figma', 'Affinity', 'Adobe XD'],
    github: null,
    demo: null,
  },
  {
    id: uuidv4(),
    title: { en: 'Next.js Application', fr: 'Application Next.js' },
    images: ['/projects/project-placeholder.svg'],
    description: { en: 'Coming soon.', fr: 'Bientôt disponible.' },
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: null,
    demo: null,
  },
];

export const EXPERIENCE = [
  {
    id: uuidv4(),
    company: 'Keyloop Canada Ltd.',
    role: {
      en: "Front-End React Developer",
      fr: "Développeur Front-End React"
    },
    period: '2018 - 2026',
    description: {
      en: 'Modular micro-frontend SaaS platform for automotive dealerships across Canada. Redux store with isolated sub-spaces, dynamic reducers, functional components (controller/view pattern), design system with Context API. Full modules refactoring — lazy loading, EN/FR i18n, Cypress coverage. Designed a Claude AI agents system reducing development time from 5 days to 2 days. 60% productivity gain. Agile Scrum — daily standups, sprint planning, code reviews. Tools: JIRA, Confluence, Teams, GitHub Copilot.',
      fr: 'Plateforme SaaS micro-frontend modulaire pour concessionnaires automobiles à travers le Canada. Redux store avec sous-espaces isolés, reducers dynamiques, composants fonctionnels (pattern controller/vue), design system avec Context API. Refactorisation complète de modules — lazy loading, i18n EN/FR, couverture Cypress. Système d\'agents Claude AI pour accélérer le workflow — réduisant le temps de développement de 5 jours à 2 jours. 60% de gain de productivité. Agile Scrum — daily standups, sprint planning, code reviews. Outils : JIRA, Confluence, Teams, GitHub Copilot.'
    },
  },
  {
    id: uuidv4(),
    company: 'Publitech (Contract)',
    role: {
      en: 'Front-End Developer (Angular & WordPress)',
      fr: 'Développeur Front-End (Angular & WordPress)'
    },
    period: '2017 - 2018',
    description: {
      en: 'Angular development and WordPress redesign for corporate clients. Kanban methodology. Local dev with VirtualBox/Linux internal server. Logo design, wireframes, UI/UX mockups.',
      fr: 'Développement Angular et refonte WordPress pour clients corporatifs. Méthode Kanban. Environnement local VirtualBox/Linux avec serveur interne. Logos, wireframes, maquettes UI/UX.'
    },
  },
  {
    id: uuidv4(),
    company: 'Groupe TVA (Contract)',
    role: {
      en: 'Web Integrator (Pixel Perfect)',
      fr: 'Intégrateur Web (Pixel Perfect)'
    },
    period: '2017',
    description: {
      en: 'Photoshop mockup integration for TVA web platforms — HTML, Symfony/Twig, jQuery, LESS.',
      fr: 'Intégration de maquettes Photoshop pour plateformes web TVA — HTML, Symfony/Twig, jQuery, LESS'
    },
  },
  {
    id: uuidv4(),
    company: 'P3F Solutions (Contract)',
    role: {
      en: 'Web Designer & Front-End WordPress Developer',
      fr: 'Designer Web & Développeur Front-End WordPress'
    },
    period: '2017',
    description: {
      en: 'Pixel-perfect Photoshop mockup integration for WordPress sites — HTML5, Sass, Gulp. Kanban methodology.',
      fr: 'Intégration pixel-perfect de maquettes Photoshop pour sites WordPress — HTML5, Sass, Gulp. Méthode Kanban.'
    },
  },
  {
    id: uuidv4(),
    company: 'Gameloft (Internship)',
    role: {
      en: 'Front-End Developer & UI/UX Designer',
      fr: 'Développeur Front-End & Designer UI/UX'
    },
    period: '2016 - 2017',
    description: {
      en: 'Internal web application with UX architecture — jQuery, AJAX, SASS, Symfony/PHP MVC. Agile methodology.',
      fr: 'Application web interne avec architecture UX — jQuery, AJAX, SASS, Symfony/PHP MVC. Méthode Agile.'
    },
  },
  {
    id: uuidv4(),
    company: 'Graphisme Avant-Première',
    role: {
      en: 'Lead Graphic Designer',
      fr: 'Graphiste principal'
    },
    period: '2006 - 2011',
    description: {
      en: 'Led art direction for major clients including Loto-Québec (La Poule aux œufs d\'or, Gagnant à Vie). Produced posters, DVD covers, and magazine spreads. Managed prepress and offset printing.',
      fr: 'Direction artistique pour des clients majeurs dont Loto-Québec (La Poule aux œufs d\'or, Gagnant à Vie). Réalisation d\'affiches, boîtiers DVD et doubles pages. Gestion du prépresse et impression offset.'
    },
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
// category label stays in locales.json (skills.columns[n].category)
// Only skill names + levels live here
export const SKILLS = [
  {
    // Developement
    // category: t('skills.columns.0.category') — in locales.json
    icon: '{ }',
    skills: [
      { name: 'JavaScript',             level: 90 },
      { name: 'TypeScript',             level: 85 },
      { name: 'Redux & Thunk',          level: 85 },
      { name: 'HTML5,CSS3/SASS, MUI',   level: 85 },
      { name: 'React.js',               level: 95 },
      { name: 'Next.js',                level: 85 },
      { name: 'Angular.js',             level: 60 },
      { name: 'REST APIs, GraphQL',     level: 75 },
      { name: 'Context API',            level: 75 }
    ],
  },
  {
    // Design & UI/UX
    // category: t('skills.columns.1.category') — in locales.json
    icon: '✦',
    skills: [
      { name: 'Affinity',      level: 95 },
      { name: 'Adobe XD',      level: 85 },
      { name: 'Illustrator',   level: 80 },
      { name: 'Photoshop',     level: 80 },
      { name: 'Indesign',      level: 80 },
      { name: 'After Effect',  level: 80 },
      { name: 'Premiere Pro',  level: 80 },
      { name: 'Figma',         level: 85 },
    ],
  },
  {
    // Tools & AI
    // category: t('skills.columns.2.category') — in locales.json
    icon: '⚡',
    skills: [
      { name: 'Claude AI, Gemini AI',             level: 90 },
      { name: 'Adobe AI, Affinity AI',            level: 85 },
      { name: 'Agile Scrum, Kanban, Code Review', level: 80 },
      { name: 'Mobile-first, WCAG Accessibility', level: 80 },
      { name: 'Git, GitHub + Copilot AI',         level: 80 },
      { name: 'Jira, Confluance',                 level: 80 },
      { name: 'Vite, Webpack, npm/yarn',          level: 80 },
      { name: 'Cypress, Jest, React Testing',     level: 80 },
    ],
  },
];

// ── Recaptcha config  ────────────────────────────────────────────────────────
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

// ── EmailJS config ────────────────────────────────────────────────────────
export const EJS_PUBLIC_KEY       = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export const EJS_SERVICE_ID       = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EJS_TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
export const EJS_TEMPLATE_REPLY   = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY;

export const EMPTY        = { name: '', email: '', message: '', _trap: '' };
export const EMPTY_ERRORS = { name: '',  email: '',  message: ''  };
export const EMPTY_TOUCHED = { name: false, email: false, message: false };
export const COOLDOWN_MS  = 60_000;
export const EMAIL_REGEX  = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


// ─── Projects Carousel ────────────────────────────────────────────────────────
// images: array of 1–3 paths
// github: string url or null (button hidden if null)
export const CAROUSEL_PROJECTS = PROJECTS.slice(0, 4) // Show first 4 projects in carousel
export const CAROUSEL_CARD_WIDTH = 280  // px
export const CAROUSEL_CARD_GAP   = 24   // px

// ─── Animation Easings ───────────────────────────────────────────────────────

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

// ─── Animation Variants ──────────────────────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: EASE_OUT_EXPO },
  }),
};

export const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.75, ease: EASE_OUT_EXPO },
  }),
};

export const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.9, duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

export const scrollVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 0.6 } },
};

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

export const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

export const sectionTitleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

export const titleLineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 0.2, duration: 0.5 },
  },
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const NAV_HEIGHT = 64 // px

// ─── Navigation ──────────────────────────────────────────────────────────────
// Order matches page section order: About → Experience → Projects → Skills → Contact
export const NAV_LINKS = [
  { key: 'nav.about',      href: '#about'      },
  { key: 'nav.experiences', href: '#experience' },
  { key: 'nav.projects',   href: '#projects'   },
  { key: 'nav.skills',     href: '#skills'     },
  { key: 'nav.contacts',   href: '#contacts'   },
];

// ─── Brand ───────────────────────────────────────────────────────────────────

export const BRAND_NAME   = ' Cristian Manrique ';
export const BRAND_PREFIX = '<-';
export const BRAND_SUFFIX = '->';

// ─── Footer Contacts ─────────────────────────────────────────────────────────
// Icon components are defined in Footer.jsx — only link data lives here.

export const CONTACT_LINKS = [
  { key: 'footer.links.linkedin', href: 'https://linkedin.com/in/cristian-manrique' },
  { key: 'footer.links.github',   href: 'https://github.com/cristianManrique' },
  { key: 'footer.links.email',    href: 'mailto:contact@cristian-manrique.com' },
];
