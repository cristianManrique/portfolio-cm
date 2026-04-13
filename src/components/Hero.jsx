import React from 'react';
import {
  lineVariants,
  scrollVariants,
  EASE_OUT_EXPO,
} from '../components/Constants';
import useTranslate from '../hooks/useTranslate';
import * as Styled from '../components/PortfolioStyled';

const Hero = () => {
  const { t } = useTranslate();

  return (
    <Styled.HeroSection id="hero">
      <Styled.HeroVideoBackground autoPlay muted loop playsInline>
        <source src="/hero-bg.mp4" type="video/mp4" />
      </Styled.HeroVideoBackground>
      <Styled.HeroGradientOverlay />
      <Styled.HeroGridOverlay />

      <Styled.HeroContent>
        <Styled.HeroHeadlineWrapper>

          {/* ── Line 1 : "The FUTURE of" ── thin, small */}
          <Styled.HeroLineThin
            custom={0} variants={lineVariants} initial="hidden" animate="visible"
          >
            {t('hero.line1_pre')}{' '}
            <Styled.HeroBold>{t('hero.line1_bold')}</Styled.HeroBold>{' '}
            {t('hero.line1_post')}
          </Styled.HeroLineThin>

          {/* ── Line 2 : "DESIGN" ── bold, massive */}
          <Styled.HeroLineBold
            custom={1} variants={lineVariants} initial="hidden" animate="visible"
          >
            {t('hero.line2')}
          </Styled.HeroLineBold>

          {/* ── Line 3 : "& DEVELOPMENT" ── bold, & in teal */}
          <Styled.HeroLineBold
            custom={2} variants={lineVariants} initial="hidden" animate="visible"
          >
            <Styled.HeroThin>&</Styled.HeroThin>{' '}{t('hero.line3')}
          </Styled.HeroLineBold>

          {/* ── Line 4 : "is HUMAN + AI" ── thin, small */}
          <Styled.HeroLineThin
            custom={3} variants={lineVariants} initial="hidden" animate="visible"
          >
            {t('hero.line4_pre')}{' '}
            <Styled.AiBold>{t('hero.line4_human')}</Styled.AiBold>
            {' '}+{' '}
            <Styled.AiBold>{t('hero.line4_ai')}</Styled.AiBold>
          </Styled.HeroLineThin>

        </Styled.HeroHeadlineWrapper>

        <Styled.HeroTealDivider
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6, ease: EASE_OUT_EXPO }}
        />

        <Styled.HeroNameChip
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          <Styled.HeroAvatar src="/cris.png" alt="Cristian Manrique" />
          <Styled.HeroLogo src="/cris-logo.svg" alt="Cristian Manrique Logo" />
        </Styled.HeroNameChip>
      </Styled.HeroContent>

      {/* ── "THE FUTURE IS NOW" — offset, looping in/out ── */}
      <Styled.FutureTitle
        animate={{
          opacity: [0, 0, 1, 1, 0],
          x:       [60, 60, 0, 0, -20],
        }}
        transition={{
          duration:    6,
          times:       [0, 0.1, 0.25, 0.75, 1],
          ease:        EASE_OUT_EXPO,
          repeat:      Infinity,
          repeatDelay: 4,
          delay:       2,
        }}
      >
        {t('hero.subtitle_pre')}
        <span>{t('hero.subtitle_bold1')}</span>
        {t('hero.subtitle_mid')}
        <span>{t('hero.subtitle_bold2')}</span>
      </Styled.FutureTitle>

      <Styled.HeroScrollIndicator variants={scrollVariants} initial="hidden" animate="visible">
        <Styled.HeroScrollLabel>{t('hero.scroll')}</Styled.HeroScrollLabel>
        <Styled.HeroScrollLine
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        />
      </Styled.HeroScrollIndicator>
    </Styled.HeroSection>
  );
};

export default Hero;
