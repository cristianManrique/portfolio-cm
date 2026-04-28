import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StarTrail       from './components/StarTrail';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import HelmetComponent from './components/HelmetComponent';
import ProtectedRoute  from './components/ProtectedRoute';

// Lazy-loaded sections
const About       = lazy(() => import('./components/About'));
const Experience   = lazy(() => import('./components/Experience'));
const Projects     = lazy(() => import('./components/Projects'));
const Skills       = lazy(() => import('./components/Skills'));
const ContactForm  = lazy(() => import('./components/ContactForm'));
const Footer       = lazy(() => import('./components/Footer'));

// Admin pages (lazy — never in main bundle)
const AdminLogin     = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

// ── Portfolio page ─────────────────────────────────────────────────────────────
const Portfolio = () => (
  <StarTrail background="#02253B" trailAlpha={0.18} starCount={3}>
    <HelmetComponent />
    <Navbar />
    <main>
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ContactForm />
        <Footer />
      </Suspense>
    </main>
  </StarTrail>
);

// ── App ────────────────────────────────────────────────────────────────────────
const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Portfolio />} />

        {/* Admin — hidden from public, not linked anywhere */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
