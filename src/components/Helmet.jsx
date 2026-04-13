import React from "react";
import { Helmet } from "react-helmet-async";

const HelmetComponent = () => {
  return (
    <Helmet>
      <title>React Developer Montreal | Cristian Portfolio</title>

      <meta
        name="description"
        content="Front-end developer spécialisé en React, Redux et performance basé à Montréal."
      />

      <link rel="canonical" href="https://crisman.dev" />

      {/* Open Graph */}
      <meta property="og:title" content="React Developer Montreal | Cristian Portfolio" />
      <meta property="og:description" content="Front-end developer spécialisé en React, Redux et performance basé à Montréal." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://crisman.dev" />
      <meta property="og:image" content="https://crisman.dev/preview.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="React Developer Montreal | Cristian Portfolio" />
      <meta name="twitter:description" content="Front-end developer spécialisé en React." />
      <meta name="twitter:image" content="https://crisman.dev/preview.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Cristian Manrique",
          jobTitle: "Front-End Developer, UI/UX Designer",
          url: "https://crisman.dev",
          sameAs: [
            "https://github.com/cristianManrique",
            "https://www.linkedin.com/in/cristian-manrique/"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default HelmetComponent;
