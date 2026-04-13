import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import HelmetComponent from './components/HelmetComponent';
import ProtectedRoute  from './components/ProtectedRoute';

const About          = lazy(() => import('./components/About'));
const Experience     = lazy(() => import('./components/Experience'));
const Projects       = lazy(() => import('./components/Projects'));
const Skills         = lazy(() => import('./components/Skills'));
const ContactForm    = lazy(() => import('./components/ContactForm'));
const Footer         = lazy(() => import('./components/Footer'));
const StarTrail      = lazy(() => import('./components/StarTrail'));
const AdminLogin     = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

const Main = styled.main`
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Loader = () => (
  <div className="flex items-center justify-center h-screen text-white">
    Loading...
  </div>
);

const Portfolio = () => (
  <StarTrail>
    <HelmetComponent />
    <Navbar />
    <Main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </Main>
  </StarTrail>
);

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/"             element={<Portfolio />} />
        <Route path="/admin/login"  element={<AdminLogin />} />
        <Route path="/admin"        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
