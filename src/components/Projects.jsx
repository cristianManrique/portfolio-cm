import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { apiGet } from '../utils/Api';
import {
  PROJECTS,
  CAROUSEL_CARD_WIDTH,
  CAROUSEL_CARD_GAP,
  EASE_OUT_EXPO,
} from '../components/Constants';
import ProjectCard from './ProjectCard';
import ProjectLightbox from './ProjectLightbox';
import useTranslate from '../hooks/useTranslate';

import * as Styled from '../components/PortfolioStyled';

const Projects = () => {
  const { t, isEN }              = useTranslate();
  const [index, setIndex]       = useState(0);
  const [selected, setSelected] = useState(null);
  const [visible, setVisible]   = useState(3);
  const [cardWidth, setCardWidth] = useState(CAROUSEL_CARD_WIDTH);
  const [projects, setProjects] = useState(PROJECTS);
  const trackRef                = useRef(null);
  const lang = isEN ? 'en' : 'fr';

  // ── Fetch projects from API, fallback to Constants ────────────────────────
  const fetchProjects = useCallback(() => {
    apiGet('/api/projects-get')
      .then(({ data }) => {
        if (Array.isArray(data) && data.length) {
          setProjects(data);
          console.log('[Projects] DB loaded —', data.length, 'projects');
        }
      })
      .catch((err) => console.warn('[Projects] API unavailable, using fallback —', err.message));
  }, []);

  useEffect(() => {
    fetchProjects();
    const channel = new BroadcastChannel('portfolio-sync');
    channel.onmessage = (e) => { if (e.data?.type === 'projects-updated') fetchProjects(); };
    return () => channel.close();
  }, [fetchProjects]);

  // ── Calculate cards visible from container width ──────────────────────────
  const calcVisible = useCallback(() => {
    if (!trackRef.current) return
    const width = trackRef.current.offsetWidth
    // On mobile, actual card width is fluid — measure from DOM if possible
    const firstCard = trackRef.current.querySelector('[data-card]')
    const actualCardWidth = firstCard ? firstCard.offsetWidth : CAROUSEL_CARD_WIDTH
    setCardWidth(actualCardWidth)
    const count = Math.max(1, Math.floor(
      (width + CAROUSEL_CARD_GAP) / (actualCardWidth + CAROUSEL_CARD_GAP)
    ));
    setVisible(count);
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return;
    calcVisible()
    const ro = new ResizeObserver(calcVisible)
    ro.observe(el)
    return () => ro.disconnect()
  }, [calcVisible]);

  const maxIndex = Math.max(0, projects.length - visible);

  useEffect(() => {
    setIndex(i => Math.min(i, maxIndex))
  }, [maxIndex]);

  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)),[setIndex]);
  const next = useCallback(() => setIndex(i => Math.min(maxIndex, i + 1)),[setIndex]);

  return (
    <Styled.ProjectsSection id="projects">
      <Styled.ProjectsHeader>
        <Styled.SectionTitle
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          {t('projects.section')}
        </Styled.SectionTitle>
        <Styled.TitleLine
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE_OUT_EXPO }}
        />
      </Styled.ProjectsHeader>

      <Styled.ProjectsCarouselWrapper>

        {/* Arrow LEFT */}
        <Styled.ProjectsPrevButton
          onClick={prev}
          $disabled={index === 0}
          disabled={index === 0}
          whileHover={index !== 0 ? { scale: 1.1 } : {}}
          whileTap={index !== 0 ? { scale: 0.95 } : {}}
          aria-label="Previous"
        >
          {'<'}
        </Styled.ProjectsPrevButton>

        {/* Track outer — measures available width via ref */}
        <Styled.ProjectsTrackOuter ref={trackRef}>

          {/* Track center — exact width for N visible cards, centered */}
          <Styled.ProjectsTrackCenter
            $visible={visible}
            $cardWidth={CAROUSEL_CARD_WIDTH}
          >
            <Styled.ProjectsTrackInner
              animate={{ x: -(index * (cardWidth + CAROUSEL_CARD_GAP)) }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            >
              {projects.map(project => (
                <div key={project._id || project.id} data-card>
                  <ProjectCard
                    project={project}
                    onClick={() => setSelected(project)}
                    lang={lang}
                  />
                </div>
              ))}
            </Styled.ProjectsTrackInner>
          </Styled.ProjectsTrackCenter>

        </Styled.ProjectsTrackOuter>

        {/* Arrow RIGHT */}
        <Styled.ProjectsNextButton
          onClick={next}
          $disabled={index >= maxIndex}
          disabled={index >= maxIndex}
          whileHover={index < maxIndex ? { scale: 1.1 } : {}}
          whileTap={index < maxIndex ? { scale: 0.95 } : {}}
          aria-label="Next"
        >
          {'>'}
        </Styled.ProjectsNextButton>

      </Styled.ProjectsCarouselWrapper>

      {/* Dots — dynamic, hidden if only 1 page */}
      {maxIndex > 0 && (
        <Styled.ProjectsDotsRow>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <Styled.ProjectsDot
              key={i}
              $active={i === index}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </Styled.ProjectsDotsRow>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <ProjectLightbox
            project={selected}
            lang={lang}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>

    </Styled.ProjectsSection>
  )
}

export default Projects;
