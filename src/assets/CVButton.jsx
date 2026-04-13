import React from 'react'
import styled from 'styled-components';
import { motion } from 'motion/react';
import useTranslate from '../hooks/useTranslate';
import downloadIcon from '../assets/download-icon.svg';
import { EASE_OUT_EXPO } from '../components/Constants';

// Styled Components
export const CvDownloadButton = styled(motion.a)`
  z-index: 2;
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
  width: fit-content;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: var(--accent-glow);
  }
`;

export const DownloadIconImg = styled.img`
  width: 16px;
  margin-right: 8px;
`;

// ─── Component ────────────────────────────────────────────────────────────────
const CvButton = () => {
  const { t, isEN } = useTranslate();

  const pdfLink = isEN
    ? '/cristian_manrique_cv_en.pdf'
    : '/cristian_manrique_cv_fr.pdf';

  return (
    <CvDownloadButton
      href={pdfLink}
      target="_blank"
      rel="noopener noreferrer"
       initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1, y: 0,
        boxShadow: [
          '0 0 6px rgba(0,180,200,0.15)',
          '0 0 32px rgba(0,180,200,0.55)',
          '0 0 6px rgba(0,180,200,0.15)',
        ],
      }}
      transition={{
        delay: 1.3,
        duration: 2.5,
        ease: EASE_OUT_EXPO,
        repeat: Infinity,
      }}
    >
      <DownloadIconImg src={downloadIcon} alt="Download CV" />
      {t('about.cv')}
    </CvDownloadButton>
  )
}

export default CvButton;
