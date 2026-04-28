import styled from 'styled-components';
import { motion } from 'motion/react';
 import {CAROUSEL_CARD_GAP } from './Constants';

// ─────────────────────────────────────────────────────────────────────────────
// PortfolioStyled.js — Portfolio CM
// ─────────────────────────────────────────────────────────────────────────────

/*
Mobile first — styles de base = mobile
Mobile L — iPhone 15/16
@media (min-width: 480px) {  }

Tablet — iPad
@media (min-width: 768px) {  }

Desktop — MacBook
@media (min-width: 1024px) {  }
*/

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
export const SectionTitle = styled(motion.h2)`
  font-family: var(--font-display);
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1;
  margin-bottom: 1rem;
  text-align: center;

  span { font-weight: 300; }

  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 0.01em;
  }
`

export const SectionFlipTitle = styled(motion.div)`
  font-family: var(--font-display);
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1;
  margin-bottom: 1rem;
  text-align: center;

  span {
  font-weight: 900;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    letter-spacing: 0.03em;
  }
`

export const TitleLine = styled(motion.div)`
  height: 3px;
  width: 80px;
  background: var(--accent);
  margin: 0 auto 2rem;
  transform-origin: left;
  box-shadow: 0 0 6px var(--accent);
`

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────
export const NavbarNav = styled(motion.nav)`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 2rem;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
  background: ${({ $scrolled }) => $scrolled ? 'rgba(2, 26, 43, 0.92)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(12px)' : 'none'};
  border-bottom: ${({ $scrolled }) => $scrolled ? '1px solid rgba(0,180,200,0.18)' : '1px solid transparent'};

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`

export const NavbarLogo = styled.a`
  font-family: var(--font-mono);
  font-size: 1rem;
  letter-spacing: 0.03em;
  text-decoration: none;
  color: var(--white);
  white-space: nowrap;
  transition: color 0.2s;
  &:hover { color: var(--accent); }
`

export const H1Title = styled.h1`
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  text-decoration: none;
  color: var(--text-muted);
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`

export const NavbarBracket = styled.span`
  color: var(--red);
`

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavbarLink = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-decoration: none;
  position: relative;
  transition: color 0.2s;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px; left: 0;
    width: 0; height: 1px;
    background: var(--accent);
    transition: width 0.25s ease;
  }
  &:hover { color: var(--white); }
  &:hover::after { width: 100%; }
`

export const NavbarCVLink = styled(motion.a)`
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--accent);
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  transition: color 0.2s;
  &:hover { color: var(--white); }
`

export const NavbarPortfolioLink = styled(motion.a)`
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  color: var(--white);
  transition: color 0.2s;
  &:hover { color: var(--accent); }
`

export const NavbarLangButton = styled.button`
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--accent);
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  border-left: 1px solid var(--border-dim);
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`

export const NavbarHamburger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  @media (max-width: 768px) { display: flex; }
`

export const NavbarHamBar = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background: ${({ $open }) => $open ? 'var(--accent)' : 'var(--white)'};
  transition: background 0.2s;
`

export const NavbarMobileMenu = styled(motion.div)`
  position: absolute;
  top: 64px; left: 0; right: 0;
  background: rgba(2, 26, 43, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-dim);
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const NavbarMobileLangButton = styled.button`
  font-family: var(--font-body);
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  font-weight: 700;
  color: var(--accent);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 0;
`

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: transparent;
  border: 1px solid var(--border-dim);
`

export const HeroVideoBackground = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
  z-index: -1;
`

export const HeroGradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(2,26,43,0.45) 0%,
    rgba(2,26,43,0.55) 60%,
    rgba(2,26,43,0.92) 100%
  );
  z-index: 1;
`

export const HeroGridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,180,200,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,180,200,0.04) 1px, transparent 1px);
  background-size: 80px 80px;
  z-index: 1;
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 1.5rem;
  max-width: 900px;
  margin-bottom: 0.75rem;
  gap: 1rem;
  width: 100%;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`

export const HeroHeadlineWrapper = styled.div`
  font-family: var(--font-display);
  line-height: 1;
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`

export const HeroLineThin = styled(motion.div)`
  font-size: clamp(1.5rem, 2vw, 2.8rem);
  font-weight: 300;
  color: var(--white);
  text-transform: none;
  letter-spacing: 0.06em;
  line-height: 1.3;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: clamp(1.3rem, 2.8vw, 2.2rem);
  }

  @media (max-width: 768px)  {
    font-size: clamp(1.15rem, 2.8vw, 1.8rem);
  }

  @media (max-width: 480px)  {
    font-size: clamp(1rem, 3.2vw, 1.5rem);
  }
`

export const HeroLineBold = styled(motion.div)`
  font-size: clamp(3.5rem, 9vw, 7rem);
  font-weight: 900;
  color: var(--white);
  text-transform: uppercase;
  line-height: 0.9;
  margin: 0;

  @media (max-width: 768px)  {
    font-size: clamp(3rem, 8.5vw, 5.5rem);
    letter-spacing: -0.03em;
   }

  @media (max-width: 480px)  {
    font-size: clamp(2.8rem, 10vw, 4.5rem);
    letter-spacing: -0.03em;
   }
`

export const HeroThin = styled.span`
  font-size: clamp(2rem, 10vw, 4rem);
  color: var(--accent);
  font-weight: 900;
  text-transform: none;
`

export const HeroBold = styled.span`
  font-size: inherit;
  color: var(--white);
  font-weight: 900;
  letter-spacing: 0.03em;
`

export const AiBold = styled.span`
  font-size: inherit;
  color: var(--accent);
  font-weight: 900;
  letter-spacing: 0.03em;
`

export const HeroTealDivider = styled(motion.div)`
  display: block;
  height: 2px;
  background: var(--accent);
  max-width: 520px;
  margin: 0 auto 0.75rem;
  transform-origin: left;
  box-shadow: 0 0 12px var(--accent);
`

export const HeroSubtitle = styled(motion.h2)`
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.8rem);
  font-weight: 400;
  color: var(--white);
  letter-spacing: 0.06em;
  box-shadow: 0 0 32px var(--shadow);
`

export const HeroScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`

export const HeroScrollLabel = styled.span`
  font-family: var(--font-body);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  text-transform: uppercase;
`

export const HeroScrollLine = styled(motion.div)`
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, var(--accent), transparent);
`


// ─── Hero Name Chip ───────────────────────────────────────────────────────────
export const HeroNameChip = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 16px 4px 4px;
  border: 1px solid var(--border-dim);
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
   box-shadow: 0 0 32px rgba(0,180,200,0.25);
   width: fit-content;
`

export const HeroNameCard = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  margin: 0 auto 1.8rem;
`

export const HeroAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
`

export const HeroLogo = styled.img`
  width: 245px;
  height: 43px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 160px;
    height: auto;
  }
`

export const HeroNameText = styled.h3`
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: var(--white);
  letter-spacing: 0.03em;
  white-space: nowrap;
  margin-bottom: 6px;
`

export const HeroNameBracket = styled.span`
  color: var(--red);
`

export const HeroPillsRow = styled.div`
  display: flex;
  gap: 6px;
`

export const HeroPill = styled.span`
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 3px 10px;
  border-radius: 3px;
  background: ${({ $variant }) => $variant === 'red' ? 'var(--red)' : 'var(--accent)'};
  color: var(--white);
  text-transform: uppercase;
`

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────────────
export const AboutSection = styled.section`
  background: transparent;
  padding: 6rem 2.5rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`

export const AboutContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  @media (max-width: 480px) {
    gap: 2rem;
  }
`

export const AboutLeftCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;

 @media (max-width: 768px) {
    gap: 0.5rem;
  }
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`

export const AboutAvatarWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--bg-card);
  flex-shrink: 0;
  border: 2px solid var(--border-dim);
`

export const AboutAvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AboutBrandName = styled.h1`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  color: var(--white);
`

export const AboutBracket = styled.span`
  color: var(--red);
`


export const AboutCvButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border: 1px solid var(--border-dim);
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  box-shadow: 0 0 32px rgba(0,180,200,0.25);

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: var(--accent-glow);
  }
`

export const DownloadIconImg = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`

export const AboutRightCol = styled(motion.div)`
  border-left: 4px solid var(--accent);
  padding-left: 2.5rem;

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;
    border-top: 4px solid var(--accent);
    padding-top: 1.5rem;
  }
`

export const AboutSectionLabel = styled.div`
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`

export const AboutParaBold = styled.p`
  font-family: var(--font-body);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;

  &:last-child { margin-bottom: 0; }
`

export const AboutPara = styled.p`
  font-family: var(--font-body);
  font-size: 1.1rem;
  letter-spacing: 0.03em;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;

  &:last-child { margin-bottom: 0; }
`

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────────────────────
export const ExperienceSection = styled.section`
  background: var(--bg-section);
  padding: 6rem 2.5rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
  @media (max-width: 480px) {
    padding: 3rem 1rem;
   }
`

export const ExperienceContainer = styled.div`
  max-width: 820px;
  margin: 0 auto;
`

export const ExperienceTimelineCard = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-dim);
  border-left: 4px solid var(--accent);
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const ExperienceScrollList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem 2.5rem 2.5rem 3rem;
  height: 420px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,180,200,0.3) transparent;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,180,200,0.3);
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0,180,200,0.6);
  }

  @media (max-width: 768px) {
    height: 360px;
    padding: 1.5rem 1.5rem 1.5rem 2.5rem;
    gap: 2rem;
  }
  @media (max-width: 480px) {
    height: 300px;
    padding: 1.2rem 1rem 1.2rem 2rem;
    gap: 1.5rem;
  }
`

export const ExperienceExpandFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8rem 1rem;
  border-top: 1px solid var(--border-dim);
  background: var(--bg-card);
`

export const ExperienceTimelineLine = styled.div`
  position: absolute;
  left: 2rem;
  top: 3rem;
  bottom: 3rem;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), var(--accent-dim));
  border-radius: 1px;
`

export const ExperienceJobItem = styled(motion.div)`
  padding-left: 1.5rem;
  position: relative;
`

export const ExperienceRedDot = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e63946;
  box-shadow: 0 0 8px rgba(230,57,70,0.6);
  flex-shrink: 0;
  margin-right: 8px;
  position: absolute;
  top: 5px;
  left: 0px;
`

export const ExperiencePeriod = styled.div`
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  margin-bottom: 0.35rem;
  display: flex;
  align-items: center;
`

export const ExperienceCompany = styled.div`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`

export const ExperienceRole = styled.div`
  font-family: var(--font-body);
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 0.8rem;
  letter-spacing: 0.03em;
`

export const ExperienceDesc = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-top: 0.3rem;
  letter-spacing: 0.03em;
  opacity: 0.85;
`

export const ExperienceTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const ExperienceTag = styled.span`
  display: inline-block;
  padding: 3px 12px;
  border: 1px solid var(--border-dim);
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--text-muted);
  letter-spacing: 0.03em;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`

export const ExperienceExpandBtn = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 1rem auto 0;
  padding: 6px 16px 6px 12px;
  background: transparent;
  border: 1px solid rgba(0,180,200,0.35);
  border-radius: 999px;
  color: var(--accent);
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(0,180,200,0.08);
    border-color: var(--accent);
  }
`

export const ExperienceExpandIcon = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  line-height: 1;
  transform: ${({ $expanded }) => $expanded ? 'rotate(-90deg)' : 'rotate(90deg)'};
  transition: transform 0.3s ease;
  color: var(--accent);
`

export const FutureTitle = styled(motion.h2)`
  margin-top: 1rem;
  z-index: 2;
  color: var(--white);
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2.3rem);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-align: center;
  box-shadow: 0 0 32px var(--shadow);

  span {
  color: var(--accent);
  font-weight: 900;
  }
`

export const AboutTitle = FutureTitle

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectsSection = styled.section`
  background: transparent;
  padding: 6rem 0;
  overflow: hidden;

  @media (max-width: 768px) { padding: 4rem 0; }
  @media (max-width: 480px) { padding: 3rem 0; }
`

export const ProjectsHeader = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2.5rem;

  @media (max-width: 480px) { padding: 0 1rem; }
`

export const ProjectsCarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  padding: 0 1.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`

export const ProjectsPrevButton = styled(motion.button)`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background: ${({ $disabled }) => $disabled ? 'rgba(10,58,82,0.4)' : 'var(--bg-card)'};
  border: 1px solid ${({ $disabled }) => $disabled ? 'var(--border-dim)' : 'var(--accent)'};
  color: ${({ $disabled }) => $disabled ? 'var(--text-muted)' : 'var(--white)'};
  border-radius: 50%;
  cursor: ${({ $disabled }) => $disabled ? 'default' : 'pointer'};
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  margin-right: 1rem;

   @media (max-width: 480px) {
    margin-right: 0.35rem;
     width: 35px;
    height: 35px;
  }
`

export const ProjectsNextButton = styled(motion.button)`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background: ${({ $disabled }) => $disabled ? 'rgba(10,58,82,0.4)' : 'var(--bg-card)'};
  border: 1px solid ${({ $disabled }) => $disabled ? 'var(--border-dim)' : 'var(--accent)'};
  color: ${({ $disabled }) => $disabled ? 'var(--text-muted)' : 'var(--white)'};
  border-radius: 50%;
  cursor: ${({ $disabled }) => $disabled ? 'default' : 'pointer'};
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  margin-left: 1rem;

  @media (max-width: 480px) {
    margin-left: 0.35rem;
     width: 35px;
    height: 35px;
  }
`

// ── ProjectsTrackCenter ───────────────────────────────────────────────────────
// Wraps TrackInner — fixed width = N cards + gaps, clips overflow
// $visible and $cardWidth passed as transient props
export const ProjectsTrackCenter = styled.div`
  width: ${({ $visible, $cardWidth }) =>
    $visible * $cardWidth + ($visible - 1) * CAROUSEL_CARD_GAP}px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`

export const ProjectsTrackOuter = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 1rem 0 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0.5rem 0 1.5rem;
  }
`

export const ProjectsTrackInner = styled(motion.div)`
  display: flex;
  gap: ${CAROUSEL_CARD_GAP}px;
  justify-content: flex-start;
`

export const ProjectsDotsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
`

export const ProjectsDot = styled.button`
  width: ${({ $active }) => $active ? '24px' : '8px'};
  height: 8px;
  border-radius: 4px;
  background: ${({ $active }) => $active ? 'var(--accent)' : 'var(--border-dim)'};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: width 0.3s, background 0.3s;
`

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectCardCard = styled(motion.div)`
  flex-shrink: 0;
  width: 280px;
  height: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-dim);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  @media (max-width: 480px) {
    width: calc(100vw - 7rem);
    max-width: 300px;
  }
`

export const ProjectCardImageWrapper = styled.div`
  width: 100%;
  height: 285px;
  overflow: hidden;
  background: var(--bg-card-alt);
  position: relative;
`

export const ProjectCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  &:hover { transform: scale(1.06); }
`

export const ProjectCardImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--accent-dim) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: var(--font-body);
`

export const ProjectCardHoverOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: rgba(0,180,200,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProjectCardBody = styled.div`
  padding: 1rem 1.2rem 1.4rem;
`

export const ProjectCardTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
`

export const ProjectCardDesc = styled.p`
  font-family: var(--font-body);
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  line-height: 1.6;
`

export const ProjectCardAccentLine = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(to right, var(--accent), transparent);
  opacity: 0.5;
`

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT LIGHTBOX
// ─────────────────────────────────────────────────────────────────────────────
export const LightboxOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(2, 26, 43, 0.88);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export const LightboxModal = styled(motion.div)`
  display: flex;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  background: var(--bg-card);
  border: 1px solid rgba(0, 180, 200, 0.25);
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 90vh;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    max-height: 90vh;
  }
`

export const LightboxImageSide = styled.div`
  flex: 1.3;
  position: relative;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 420px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 240px;
    flex: none;
  }
`

export const LightboxImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
`

export const LightboxPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-deep);
  position: absolute;
  inset: 0;
`

export const LightboxWrapperDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const LightboxCloseBtn = styled(motion.button)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: transparent;
  border: 1px solid rgba(0, 180, 200, 0.35);
  border-radius: 50%;
  color: var(--accent);
  font-size: 13px;
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 1;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    background: rgba(0, 180, 200, 0.1);
    border-color: var(--accent);
  }
`

export const LightboxImageDots = styled.div`
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
`

export const LightboxImageDot = styled.button`
  width: ${({ $active }) => $active ? '20px' : '8px'};
  height: 8px;
  border-radius: 4px;
  background: ${({ $active }) => $active ? 'var(--accent)' : 'rgba(0,180,200,0.25)'};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: width 0.3s ease, background 0.3s ease;
`

export const LightboxPanel = styled.div`
  width: 290px;
  flex-shrink: 0;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-left: 1px solid rgba(0, 180, 200, 0.15);
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-left: none;
    border-top: 1px solid rgba(0, 180, 200, 0.15);
    padding: 20px 16px;
    flex: 1;
  }
`

export const LightboxTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.2;
`

export const LightboxAccent = styled.div`
  width: 40px;
  height: 2px;
  background: var(--accent);
  margin-top: 10px;
`

export const LightboxDesc = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  letter-spacing: 0.03em;
  color: var(--text-muted);
  line-height: 1.75;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    letter-spacing: 0.02em;
    line-height: 1.3;
  }
`

export const LightboxTagsLabel = styled.div`
  font-family: var(--font-body);
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
`

export const LightboxTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const LightboxTag = styled.span`
  padding: 3px 12px;
  border: 1px solid rgba(0, 180, 200, 0.35);
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 0.03em;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`

export const LightboxBtnRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
`

export const LightboxGithubBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--accent);
  background: transparent;
  border: 1px solid rgba(0, 180, 200, 0.4);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(0, 180, 200, 0.08);
    border-color: var(--accent);
  }
`

export const LightboxDemoBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #021a2b;
  background: var(--accent);
  border: none;
  text-decoration: none;
  transition: background 0.2s, opacity 0.2s;

  &:hover {
    background: #00cce0;
    opacity: 0.95;
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────────────────────
export const SkillsSection = styled.section`
  background: var(--bg-section);
  padding: 6rem 2.5rem;

  @media (max-width: 768px) { padding: 4rem 1.5rem; }
  @media (max-width: 480px) { padding: 3rem 1rem; }
`

export const SkillsContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const SkillsColumnCard = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-dim);
  border-top: 3px solid var(--accent);
  border-radius: 4px;
  padding: 2rem 1.8rem;
`

export const SkillsColHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.8rem;
`

export const SkillsColIcon = styled.span`
  font-family: var(--font-mono);
  font-size: 1.2rem;
  color: var(--accent);
`

export const SkillsColName = styled.h3`
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

export const SkillsBarRow = styled.div`
  margin-bottom: 1rem;
`

export const SkillsBarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`

export const SkillsBarName = styled.p`
  font-family: var(--font-body);
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  color: var(--text-muted);
  font-weight: 500;
`

export const SkillsBarPercent = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.03em;
  color: var(--accent);
`

export const SkillsBarTrack = styled.div`
  height: 4px;
  background: rgba(0,180,200,0.12);
  border-radius: 2px;
  overflow: hidden;
`

export const SkillsBarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(to right, var(--accent), var(--accent-dim));
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(0,180,200,0.4);
`

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
export const FooterEl = styled.footer`
  background: transparent;
  border-top: 1px solid var(--border-dim);

  /* ── Desktop ── */
  padding: 2rem 4rem;

  /* ── Tablet ── */
  @media (max-width: 768px) {
    padding: 1.75rem 2.5rem;
  }

  /* ── Mobile ── */
  @media (max-width: 480px) {
    padding: 1.5rem 1.25rem;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  /* ── Desktop ── */
  flex-direction: row;
  gap: 2rem;

  /* ── Tablet ── */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
  }

  /* ── Mobile ── */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
  }
`

export const FooterContactsRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  /* ── Desktop ── */
  gap: 2rem;

  /* ── Tablet ── */
  @media (max-width: 768px) {
    gap: 1.25rem;
  }

  /* ── Mobile ── */
  @media (max-width: 480px) {
    gap: 0.75rem;
    flex-direction: row;
  }
`

export const FooterContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: color 0.2s;

  /* ── Desktop ── */
  font-size: 0.9rem;
  padding: 6px 0;

  /* ── Tablet ── */
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  /* ── Mobile ── */
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 4px 0;
  }
  transition: color 0.2s;
  &:hover { color: var(--accent); }

  svg {
    /* ── Mobile — slightly smaller icons ── */
    @media (max-width: 480px) {
      width: 16px;
      height: 16px;
    }
  }
`

export const FooterBrandName = styled.a`
  font-family: var(--font-mono);
  color: var(--text-muted);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s;

  /* ── Desktop ── */
  font-size: 0.85rem;
  letter-spacing: 0.05em;

  /* ── Tablet ── */
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  /* ── Mobile ── */
  @media (max-width: 480px) {
    font-size: 0.78rem;
  }
  transition: color 0.2s;
  &:hover { color: var(--accent); }
`

export const FooterBracket = styled.span`
  color: var(--red);
`

export const FooterCopyright = styled.small`
  font-family: var(--font-body);
  color: var(--text-muted);
  opacity: 0.8;
  white-space: nowrap;

  /* ── Desktop ── */
  font-size: 0.8rem;
  letter-spacing: 0.03em;

  /* ── Tablet ── */
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  /* ── Mobile ── */
  @media (max-width: 480px) {
    font-size: 0.72rem;
    opacity: 0.5;
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────────────────────────────────────
export const ContactSection = styled.section`
  padding: 6rem 2.5rem;
  @media (max-width: 768px) { padding: 4rem 1.5rem; }
  @media (max-width: 480px) { padding: 3rem 1rem; }
`

export const ContactInner = styled.div`
  max-width: 660px;
  margin: 0 auto;
`

export const ContactSubtitle = styled(motion.p)`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  margin: 0.5rem 0 3rem;
  text-align: center;
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const ContactLabel = styled.label`
  display: block;
  font-size: 0.72rem;
  font-family: var(--font-display);
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`

export const ContactInput = styled.input`
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ $error }) => $error ? '#e63946' : 'var(--border-dim)'};
  border-radius: 4px;
  padding: 0.7rem 1rem;
  color: var(--white);
  font-family: var(--font-body);
  font-size: 0.92rem;
  letter-spacing: 0.03em;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s, background 0.2s;
  &:focus {
    border-color: ${({ $error }) => $error ? '#e63946' : 'var(--accent)'};
    background: rgba(0, 180, 200, 0.04);
  }
  &::placeholder { color: var(--text-muted); opacity: 0.6; }
`

export const ContactTextarea = styled.textarea`
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ $error }) => $error ? '#e63946' : 'var(--border-dim)'};
  border-radius: 4px;
  padding: 0.7rem 1rem;
  color: var(--white);
  font-family: var(--font-body);
  font-size: 0.92rem;
  letter-spacing: 0.03em;
  outline: none;
  box-sizing: border-box;
  resize: vertical;
  min-height: 130px;
  transition: border-color 0.2s, background 0.2s;
  &:focus {
    border-color: ${({ $error }) => $error ? '#e63946' : 'var(--accent)'};
    background: rgba(0, 180, 200, 0.04);
  }
  &::placeholder { color: var(--text-muted); opacity: 0.6; }
`

export const ContactFieldError = styled.span`
  display: block;
  font-size: 0.72rem;
  color: #e63946;
  margin-top: 0.3rem;
  letter-spacing: 0.03em;
`

export const ContactSubmitBtn = styled(motion.button)`
  align-self: flex-end;
  padding: 0.75rem 2.5rem;
  background: var(--accent);
  color: #021a2b;
  border: none;
  border-radius: 4px;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.2s;
  &:disabled { opacity: 0.45; cursor: default; }

  @media (max-width: 480px) { align-self: stretch; text-align: center; }
`

export const ContactStatus = styled(motion.p)`
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  padding: 0.65rem 1rem;
  border-radius: 4px;
  text-align: center;
  background: ${({ $ok }) => $ok ? 'rgba(0,180,200,.1)' : 'rgba(230,57,70,.1)'};
  color:      ${({ $ok }) => $ok ? 'var(--accent)' : '#e63946'};
  border:     1px solid ${({ $ok }) => $ok ? 'rgba(0,180,200,.25)' : 'rgba(230,57,70,.25)'};
`

export const ContactCaptchaRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  /* Dark theme override for the reCAPTCHA iframe border */
  iframe {
    border-radius: 4px;
    filter: invert(0.9) hue-rotate(180deg);
  }
`
