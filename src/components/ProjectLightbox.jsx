import React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import PropTypes from 'prop-types';
import { EASE_OUT_EXPO } from '../components/Constants';

// ─── Assets ───────────────────────────────────────────────────────────────
import GitHubIcon from '../assets/GitHubIconBlack';
import PlaceholderSVG from '../assets/PlaceholderSvg';

import * as Styled from '../components/PortfolioStyled';

const ProjectLightbox = ({ project, onClose, lang = 'en' }) => {
  const [imgIndex, setImgIndex] = useState(0)
  const images = project.images || []
  const hasMultiple = images.length > 1

  // Close on Escape key
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <Styled.LightboxOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <Styled.LightboxModal
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
        onClick={e => e.stopPropagation()}
      >

        {/* ── Left — Image side ── */}
        <Styled.LightboxImageSide>
          <AnimatePresence mode="wait">
            {images[imgIndex]
              ? (
                <Styled.LightboxImage
                  key={imgIndex}
                  src={images[imgIndex]}
                  alt={`${project.title} — ${imgIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <Styled.LightboxPlaceholder>
                  <PlaceholderSVG />
                </Styled.LightboxPlaceholder>
              )
            }
          </AnimatePresence>

          {/* Image dots — only if multiple images */}
          {hasMultiple && (
            <Styled.LightboxImageDots>
              {images.map((_, i) => (
                <Styled.LightboxImageDot
                  key={i}
                  $active={i === imgIndex}
                  onClick={() => setImgIndex(i)}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </Styled.LightboxImageDots>
          )}
        </Styled.LightboxImageSide>

        {/* ── Right — Info panel ── */}
        <Styled.LightboxPanel>

          {/* Close button — top right of panel */}
          <Styled.LightboxWrapperDiv>
            <Styled.LightboxCloseBtn
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close"
            >
              ✕
            </Styled.LightboxCloseBtn>
          </Styled.LightboxWrapperDiv>

          <div>
            <Styled.LightboxTitle>{project.title[lang]}</Styled.LightboxTitle>
            <Styled.LightboxAccent />
          </div>

          {project.description && (
            <Styled.LightboxDesc>{project.description[lang]}</Styled.LightboxDesc>
          )}

          {project.tags?.length > 0 && (
            <div>
              <Styled.LightboxTagsLabel>Stack &amp; Tools</Styled.LightboxTagsLabel>
              <Styled.LightboxTagsRow>
                {project.tags.map(tag => (
                  <Styled.LightboxTag key={tag}>{tag}</Styled.LightboxTag>
                ))}
              </Styled.LightboxTagsRow>
            </div>
          )}

          {/* GitHub button — only if github url exists */}
          {project.github && (
            <Styled.LightboxGithubBtn
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <GitHubIcon />
              View on GitHub
            </Styled.LightboxGithubBtn>
          )}
        </Styled.LightboxPanel>

      </Styled.LightboxModal>
    </Styled.LightboxOverlay>
  )
}

ProjectLightbox.propTypes = {
  project: PropTypes.shape({
    title:       PropTypes.string.isRequired,
    images:      PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    tags:        PropTypes.arrayOf(PropTypes.string),
    github:      PropTypes.string,
  }).isRequired,
  lang: PropTypes.oneOf(['en', 'fr']),
  onClose: PropTypes.func.isRequired,
}

export default ProjectLightbox;
