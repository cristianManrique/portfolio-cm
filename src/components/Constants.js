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
      en: 'Confidential Client — Automotive Sector',
      fr: 'Client confidentiel — Secteur automobile',
    },
    images: ['/projects/webapp.png'],
    description: {
      en: 'Large-scale front-end project in the automotive sector. Redesign of a complex web application with a focus on UX improvement and performance. SOLUTION: Built with React and Redux, new component-based architecture and a unified design system from Figma and Adobe XD mockups. Client data anonymized — production project under NDA.',
      fr: 'Projet front-end de grande envergure dans le secteur automobile. Refonte d\'une application web complexe axée sur l\'amélioration de l\'UX et la performance. SOLUTION : Architecture React/Redux avec nouveau système de composants et design system unifié (Figma, Adobe XD). Données client anonymisées — projet en production sous NDA.',
    },
    tags: ['React', 'Redux', 'React Router', 'Design System', 'Figma', 'Adobe XD'],
    github: null,
  },

  // ── 2 ─────────────────────────────────────────────────────────────────────
  {
    id: uuidv4(),
    title: {
      en: 'AI Form Builder — Claude AI',
      fr: 'Générateur de formulaires IA — Claude AI',
    },
    images: ['/projects/form.png'],
    description: {
      en: 'Internal tooling project for the automotive sector. Developed an AI-assisted workflow to accelerate form creation — reducing a multi-step manual process to a matter of minutes. SOLUTION: Integration of Claude AI with React to automate form structure generation, JSON schema output, and a live preview rendering. Internal tooling project — data anonymized for confidentiality.',
      fr: 'Outil interne pour le secteur automobile. Développement d\'un workflow assisté par IA pour accélérer la création de formulaires — réduisant un processus manuel de plusieurs étapes à quelques minutes. SOLUTION : Intégration de Claude AI avec React pour automatiser la génération de structure, l\'export JSON Schema et le rendu live. Données anonymisées.',
    },
    tags: ['Claude AI', 'React', 'PDF Analysis', 'JSON Schema', 'i18n', 'UX'],
    github: null,
  },

  // ── 3 ─────────────────────────────────────────────────────────────────────
  {
    id: uuidv4(),
    title: {
      en: 'Notes Dashboard — Kanban Board',
      fr: 'Tableau de bord Notes — Kanban',
    },
    images: ['/projects/notes-dashboard.png'],
    description: {
      en: 'Personal project — a drag-and-drop Kanban board to master modern front-end engineering concepts. 3-column board (To Do · In Progress · Done) with note management, dark/light mode, and persistent storage. Built step by step, from skeleton to production-ready app.',
      fr: 'Projet personnel — un tableau Kanban drag-and-drop pour maîtriser des concepts front-end modernes. 3 colonnes (À faire · En cours · Terminé) avec gestion des notes, mode sombre/clair et stockage persistant. Construit pas à pas, du squelette à l\'app prête pour la production.',
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'DnD Kit', 'localStorage'],
    github: null,
  },

  // ── 4 ─────────────────────────────────────────────────────────────────────
  {
    id: uuidv4(),
    title: {
      en: 'Portfolio Admin — CMS Dashboard',
      fr: 'Portfolio Admin — Tableau de bord CMS',
    },
    images: ['/projects/dashboard.png'],
    description: {
      en: 'Built a private CMS to manage portfolio content without touching the codebase. SOLUTION: Secure admin dashboard with JWT authentication — add and remove bilingual projects, upload images auto-optimized to WebP via Cloudinary, data persisted in MongoDB Atlas through Netlify serverless functions.',
      fr: 'CMS privé pour gérer le contenu du portfolio sans toucher au code. SOLUTION : Dashboard admin sécurisé avec authentification JWT — ajout/suppression de projets bilingues, upload d\'images auto-optimisées en WebP via Cloudinary, données persistées dans MongoDB Atlas via les fonctions serverless Netlify.',
    },
    tags: ['React', 'React Router', 'MongoDB', 'Netlify Functions', 'Cloudinary', 'JWT', 'Node.js'],
    github: null,
  },

  // ── Coming soon ────────────────────────────────────────────────────────────
  {
    id: uuidv4(),
    title: {
      en: 'Brand Identity',
      fr: 'Identité de marque',
    },
    images: ['/projects/project-placeholder.svg'],
    description: {
      en: 'Coming soon.',
      fr: 'Bientôt disponible.',
    },
    tags: ['Figma', 'Affinity', 'Adobe XD'],
    github: null,
  },
  {
    id: uuidv4(),
    title: {
      en: 'Next.js Application',
      fr: 'Application Next.js',
    },
    images: ['/projects/project-placeholder.svg'],
    description: {
      en: 'Coming soon.',
      fr: 'Bientôt disponible.',
    },
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: null,
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
      en: 'Worked on complex features within a large-scale web platform using React, Redux, and Material UI. Designed UX mockups (Adobe XD, Figma) and contributed to AI integration in the workflow.',
      fr: 'Développement de fonctionnalités complexes dans une plateforme web à grande échelle avec React, Redux et Material UI. Création de maquettes UX (Adobe XD, Figma) et intégration de l\'IA dans le workflow.'
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
      en: 'Developed Angular applications and redesigned WordPress sites for corporate clients, including gaetanfrigon.com. Created logos, wireframes and UI/UX mockups.',
      fr: 'Développement Angular et refonte de sites WordPress pour des clients corporatifs, incluant gaetanfrigon.com. Conception de logos, wireframes et maquettes UI/UX.'
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
      en: 'Integrated Photoshop mockups into web platforms with pixel-perfect precision using HTML, Symfony/Twig, jQuery, and LESS.',
      fr: 'Intégration de maquettes Photoshop pour les plateformes web avec précision pixel perfect (HTML, Symfony/Twig, jQuery, LESS).'
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
      en: 'Designed and developed WordPress websites for industrial clients (Summa Metal, Ledaan Interiors) using HTML5, Sass, and Gulp.',
      fr: 'Conception et intégration de sites WordPress pour des clients industriels (Summa Metal, Ledaan Intérieurs) avec HTML5, Sass et Gulp.'
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
      en: 'Designed and developed an internal web application with a UX-driven architecture using jQuery, AJAX, SASS, and Symfony/PHP MVC.',
      fr: 'Conception et développement d\'une application web interne avec architecture UX utilisant jQuery, AJAX, SASS et Symfony/PHP MVC.'
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

export const SKILLS = [
   {
    "category": {
      en:"Development",
      fr:"Développement"
    },
    "icon": "{ }",
    "skills": [
      {
        "name": "JavaScript",
        "level": 95
      },
      {
        "name": "Typescript",
        "level": 65
      },
      {
        "name": "Node.js",
        "level": 90
      },
      {
        "name": "React",
        "level": 95
      },
      {
        "name": "Next",
        "level": 40
      },
      {
        "name": "Angular",
        "level": 40
      },
      {
        "name": "Redux & Redux Thunk",
        "level": 85
      },
      {
        "name": "CSS/SCSS/SASS/Styled",
        "level": 98
      }
    ]
  },
  {
    "category": {
      en:"Design & UX/UI",
      fr: "Design & UX/UI"
  },
    "icon": "✦",
    "skills": [
      {
        "name": "Figma",
        "level": 75
      },
      {
        "name": "Adobe XD",
        "level": 85
      },
      {
        "name": "Affinity",
        "level": 95
      },
      {
        "name": "Adobe CC",
        "level": 82
      },
      {
        "name": [
          "Branding",
          "Image de marque"
        ],
        "level": 88
      }
    ]
  },
  {
    "category":{
      en:"Tools & AI",
      fr:"Outils et IA"
    },
    "icon": "⚡",
    "skills": [
      {
        "name": "GitHub + Copilot AI",
        "level": 90
      },
      {
        "name": "Claude AI",
        "level": 92
      },
      {
        "name": "Copilot AI",
        "level": 88
      },
      {
        "name": "Affinity AI",
        "level": 85
      },
      {
        "name": "Adobe AI",
        "level": 90
      }
    ]
  }

];


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

export const NAV_LINKS = [
  { key: 'nav.about',      href: '#about' },
  { key: 'nav.work',       href: '#experience' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.projects',   href: '#projects' },
  { key: 'nav.skills',     href: '#skills' },
  { key: 'nav.contacts',   href: '#contacts' },
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
