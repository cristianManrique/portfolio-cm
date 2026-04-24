import React, { useCallback } from 'react';
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

  const handleLogoClick = useCallback((e) => {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[]);

  return (
    <Styled.FooterEl id="contacts">
      <Styled.FooterContainer>
        <Styled.FooterBrandName href="#" onClick={handleLogoClick}>
            <Styled.FooterBracket>{BRAND_PREFIX}</Styled.FooterBracket>
            {BRAND_NAME}
            <Styled.FooterBracket>{BRAND_SUFFIX}</Styled.FooterBracket>
          </Styled.FooterBrandName>

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

        <Styled.FooterCopyright>
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </Styled.FooterCopyright>
      </Styled.FooterContainer>
    </Styled.FooterEl>
  )
}

export default Footer;
