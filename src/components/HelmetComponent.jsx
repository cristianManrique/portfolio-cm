import React from 'react';
import { Helmet } from 'react-helmet-async';
import useTranslate from '../hooks/useTranslate';

const HelmetComponent = () => {
  const { isEN } = useTranslate();

  const title = isEN
    ? 'Cristian Manrique — Front-End Developer & Designer | Montréal'
    : 'Cristian Manrique — Développeur Front-End & Designer | Montréal';

  const description = isEN
    ? 'Portfolio of Cristian Manrique, Front-End React developer and UI/UX designer based in Montréal. 7+ years building modern web interfaces.'
    : 'Portfolio de Cristian Manrique, développeur Front-End React et designer UI/UX basé à Montréal. 7+ ans à concevoir des interfaces web modernes.';

  return (
    <Helmet>
      <html lang={isEN ? 'en' : 'fr'} />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* ── Open Graph ── */}
      <meta property="og:type"        content="website" />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content="/cris.png" />
      <meta property="og:url"         content="https://crisman.dev" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content="/cris.png" />

      {/* ── Canonical ── */}
      <link rel="canonical" href="https://crisman.dev" />
    </Helmet>
  );
};

export default HelmetComponent;
