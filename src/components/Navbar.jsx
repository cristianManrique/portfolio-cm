import React from 'react';
import { useState, useEffect } from 'react';
import {
  EASE_OUT_EXPO, NAV_LINKS,
  BRAND_NAME,
  BRAND_PREFIX,
  BRAND_SUFFIX,
 } from '../components/Constants';

import useTranslate from '../hooks/useTranslate';

import * as Styled from '../components/PortfolioStyled';

const Navbar = () => {
  const { t, switchLang, langLabel, isEN } = useTranslate();
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  const pdfLink = isEN
    ? '/cristian_manrique_cv_en.pdf'
    : '/cristian_manrique_cv_fr.pdf';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  const handleLogoClick = e => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Styled.NavbarNav
     // Apply C scrolled or menu is open (to keep navbar visible when menu is open)
      $scrolled={scrolled || menuOpen}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
    >
      <Styled.NavbarLogo
        href="#"
        onClick={handleLogoClick}
      >
        <Styled.NavbarBracket>{BRAND_PREFIX}</Styled.NavbarBracket>
          {BRAND_NAME}
        <Styled.NavbarBracket>{BRAND_SUFFIX}</Styled.NavbarBracket>
      </Styled.NavbarLogo>

      <Styled.NavbarLinks>
        {NAV_LINKS.map(link => (
          <Styled.NavbarLink key={link.key} href={link.href} onClick={e => handleNav(e, link.href)}>
            {t(link.key)}
          </Styled.NavbarLink>
        ))}
        <div>
          <Styled.NavbarCVLink
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </Styled.NavbarCVLink>
        <Styled.NavbarLangButton onClick={switchLang} aria-label="Toggle language">
          {langLabel}
        </Styled.NavbarLangButton>
        </div>
      </Styled.NavbarLinks>

      <Styled.NavbarHamburger onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        {[0, 1, 2].map(i => <Styled.NavbarHamBar key={i} $open={menuOpen} />)}
      </Styled.NavbarHamburger>

      {menuOpen && (
        <Styled.NavbarMobileMenu
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {NAV_LINKS.map(link => (
            <Styled.NavbarLink
              key={link.key}
              href={link.href}
              onClick={e => handleNav(e, link.href)}
            >
              {t(link.key)}
            </Styled.NavbarLink>
          ))}
          <Styled.NavbarLink
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </Styled.NavbarLink>
          <Styled.NavbarMobileLangButton onClick={switchLang}>{langLabel}</Styled.NavbarMobileLangButton>
        </Styled.NavbarMobileMenu>
      )}
    </Styled.NavbarNav>
  )
}

export default Navbar;
