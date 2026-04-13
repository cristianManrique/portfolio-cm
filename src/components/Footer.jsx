import React from 'react';
import {
  CONTACT_LINKS,
  EASE_OUT_EXPO,
  BRAND_NAME,
  BRAND_PREFIX,
  BRAND_SUFFIX,
} from '../components/Constants';
import useTranslate from '../hooks/useTranslate';

// ─── Assets ───────────────────────────────────────────────────────────────
import EmailIcon from '../assets/EmailIcon';
import GitHubIcon from '../assets/GitHubIcon';
import LinkedInIcon from '../assets/LinkedInIcon';


import * as Styled from '../components/PortfolioStyled';

export const ICON_MAP = {
  'footer.links.linkedin': LinkedInIcon,
  'footer.links.github':   GitHubIcon,
  'footer.links.email':    EmailIcon,
};

const Footer = () => {
  const { t } = useTranslate();

  const handleLogoClick = e => {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Styled.FooterEl id="contacts">
      <Styled.FooterContainer>
        <Styled.SectionTitle
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          {t('footer.section')}
        </Styled.SectionTitle>

        <Styled.TitleLine
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        <Styled.FooterContactsRow
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          {CONTACT_LINKS.map(({ key, href }) => {
            const Icon = ICON_MAP[key]
            return (
              <Styled.FooterContactLink
                key={key}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <Icon />
                {t(key)}
              </Styled.FooterContactLink>
            )
          })}
        </Styled.FooterContactsRow>
      </Styled.FooterContainer>

      <Styled.FooterDivider />
      <Styled.FooterCopyrightRow>
          <Styled.FooterBrandName href="#" onClick={handleLogoClick}>
            <Styled.FooterBracket>{BRAND_PREFIX}</Styled.FooterBracket>
            {BRAND_NAME}
            <Styled.FooterBracket>{BRAND_SUFFIX}</Styled.FooterBracket>
          </Styled.FooterBrandName>
          <Styled.FooterCopyright>{t('footer.copyright')}</Styled.FooterCopyright>
        </Styled.FooterCopyrightRow>
    </Styled.FooterEl>
  )
}

export default Footer;
