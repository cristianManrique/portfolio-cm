import React from 'react';
import {
  fadeUp,
  BRAND_NAME,
  BRAND_PREFIX,
  BRAND_SUFFIX,
  EASE_OUT_EXPO,
  subtitleVariants
 } from '../components/Constants';
import useTranslate from '../hooks/useTranslate';

// Assets
import CvButton from '../assets/CvButton';

import * as Styled from '../components/PortfolioStyled';


// ─── Component ────────────────────────────────────────────────────────────────

const About = () => {
  const { t, isFR } = useTranslate();
  return (
    <Styled.AboutSection id="about">
       <Styled.SectionFlipTitle
        variants={subtitleVariants} initial="hidden" animate="visible"

      >
        <h2>{t('about.who')} {" "}
          <span>{t('about.am_i')}</span>
          {isFR ? " ?" : "?"}
        </h2>
      </Styled.SectionFlipTitle>

      <Styled.TitleLine
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5, ease: EASE_OUT_EXPO }}
      />

      <Styled.AboutContainer>
        <Styled.AboutGrid>
          <Styled.AboutLeftCol
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Styled.AboutAvatarWrapper>
              <Styled.AboutAvatarImg
                src="/avatar.png"
                alt="Cristian Manrique"
                loading="lazy"
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.parentNode.style.background =
                    'linear-gradient(135deg, var(--bg-card) 0%, var(--accent-dim) 100%)'
                }}
              />
            </Styled.AboutAvatarWrapper>

            <Styled.AboutBrandName>
              <Styled.AboutBracket>{BRAND_PREFIX}</Styled.AboutBracket>
                {BRAND_NAME}
              <Styled.AboutBracket>{BRAND_SUFFIX}</Styled.AboutBracket>
            </Styled.AboutBrandName>

            <Styled.H1Title>{t('about.title')}</Styled.H1Title>

            <CvButton />
          </Styled.AboutLeftCol>

          <Styled.AboutRightCol
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Styled.AboutPara>{t('about.p1')}</Styled.AboutPara>
            <Styled.AboutPara>{t('about.p2')}</Styled.AboutPara>
            <Styled.AboutPara>{t('about.p3')}</Styled.AboutPara>
          </Styled.AboutRightCol>
        </Styled.AboutGrid>
      </Styled.AboutContainer>
    </Styled.AboutSection>
  )
}

export default About
