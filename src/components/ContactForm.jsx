import React, { useState, useRef } from 'react';
import emailjs                     from '@emailjs/browser';
import ReCAPTCHA                   from 'react-google-recaptcha';
import { AnimatePresence }         from 'motion/react';
import useTranslate                from '../hooks/useTranslate';
import { EASE_OUT_EXPO }           from '../components/Constants';
import * as Styled                 from '../components/PortfolioStyled';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || null;

// ── EmailJS config (VITE_ prefix = exposed to browser bundle) ─────────────────
const EJS_PUBLIC_KEY       = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EJS_SERVICE_ID       = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJS_TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
const EJS_TEMPLATE_REPLY   = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY;

const EMPTY        = { name: '', email: '', message: '', _trap: '' };
const EMPTY_ERRORS = { name: '',  email: '',  message: ''  };
const EMPTY_TOUCHED = { name: false, email: false, message: false };
const COOLDOWN_MS  = 60_000;
const EMAIL_REGEX  = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ── Auto-reply copy per language ───────────────────────────────────────────────
const replyContent = (name, isEN) => isEN
  ? {
      greeting : `Hello ${name},`,
      body     : `Thank you for reaching out! I've received your message and will get back to you within 3 business days.\n\nIn the meantime, feel free to explore my portfolio at crisman.dev.`,
      sign     : 'Best regards,\n <- Cristian Manrique ->\n/* Front-End developer - Graphic Web Designer UI/UX */',
    }
  : {
      greeting : `Bonjour ${name},`,
      body     : `Merci de m'avoir contacté ! J'ai bien reçu votre message et vous répondrai dans un délai de 3 jours ouvrables.\n\nEn attendant, n'hésitez pas à explorer mon portfolio sur crisman.dev.`,
      sign     : 'Cordialement,\n <- Cristian Manrique ->\n/* Front-End developer - Graphic Web Designer UI/UX */',
    };

// ── Component ─────────────────────────────────────────────────────────────────
const ContactForm = () => {
  const { t, isEN }             = useTranslate();
  const captchaRef              = useRef(null);
  const [form, setForm]         = useState(EMPTY);
  const [errors, setErrors]     = useState(EMPTY_ERRORS);
  const [touched, setTouched]   = useState(EMPTY_TOUCHED);
  // If no sitekey is configured, bypass captcha requirement
  const [captchaDone, setCaptchaDone] = useState(!RECAPTCHA_SITE_KEY);
  const [status, setStatus]     = useState(null);   // null | 'sending' | 'ok' | 'error' | 'cooldown'
  const [disabled, setDisabled] = useState(false);

  const setField = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  // ── Validate a single field, returns error key or '' ──────────────────────
  const validateField = (k, v) => {
    if (k === 'name')    return v.trim() === '' ? 'contact.err_name_required'    : '';
    if (k === 'email')   return v.trim() === '' ? 'contact.err_email_required'
                              : !EMAIL_REGEX.test(v.trim()) ? 'contact.err_email_invalid' : '';
    if (k === 'message') return v.trim() === '' ? 'contact.err_message_required' : '';
    return '';
  };

  // ── Validate all fields, update errors state, return true if valid ─────────
  const validateAll = () => {
    const next = {
      name:    validateField('name',    form.name),
      email:   validateField('email',   form.email),
      message: validateField('message', form.message),
    };
    setErrors(next);
    setTouched({ name: true, email: true, message: true });
    return !next.name && !next.email && !next.message;
  };

  const handleBlur = (k) => {
    setTouched(prev => ({ ...prev, [k]: true }));
    setErrors(prev => ({ ...prev, [k]: validateField(k, form[k]) }));
  };

  const handleChange = (k, v) => {
    setField(k, v);
    if (touched[k]) setErrors(prev => ({ ...prev, [k]: validateField(k, v) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ── Honeypot — silently abort if bot filled the hidden field ──────────────
    if (form._trap) return;

    if (disabled) { setStatus('cooldown'); return; }

    if (!validateAll()) return;
    if (!captchaDone) return;

    setStatus('sending');

    const reply = replyContent(form.name, isEN);

    try {
      // 1 — Notify owner
      await emailjs.send(
        EJS_SERVICE_ID,
        EJS_TEMPLATE_CONTACT,
        {
          from_name  : form.name,
          from_email : form.email,
          message    : form.message,
          lang       : isEN ? 'EN' : 'FR',
        },
        EJS_PUBLIC_KEY,
      );

      // 2 — Auto-reply to sender in their language
      await emailjs.send(
        EJS_SERVICE_ID,
        EJS_TEMPLATE_REPLY,
        {
          from_name : form.name,
          to_email  : form.email,
          greeting  : reply.greeting,
          body      : reply.body,
          sign      : reply.sign,
        },
        EJS_PUBLIC_KEY,
      );

      setStatus('ok');
      setForm(EMPTY);
      setErrors(EMPTY_ERRORS);
      setTouched(EMPTY_TOUCHED);
      if (RECAPTCHA_SITE_KEY) {
        setCaptchaDone(false);
        setTimeout(() => captchaRef.current?.reset(), 500);
      }

      // Hide success message after 4s, keep form disabled for full cooldown
      setTimeout(() => setStatus(null), 4_000);

      setDisabled(true);
      setTimeout(() => setDisabled(false), COOLDOWN_MS);

    } catch (err) {
      console.error('[ContactForm] EmailJS error:', err?.text || err);
      if (RECAPTCHA_SITE_KEY) {
        setCaptchaDone(false);
        setTimeout(() => captchaRef.current?.reset(), 500);
      }
      setStatus('error');
    }
  };

  const isSending = status === 'sending';

  return (
    <Styled.ContactSection id="contact">
      <Styled.ContactInner>

        <Styled.SectionTitle
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          style={{ textAlign: 'center' }}
        >
          {t('contact.section')}
        </Styled.SectionTitle>

        <Styled.TitleLine
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE_OUT_EXPO }}
        />

        <Styled.ContactSubtitle
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.55, ease: EASE_OUT_EXPO }}
        >
          {t('contact.subtitle')}
        </Styled.ContactSubtitle>

        <Styled.ContactForm onSubmit={handleSubmit} noValidate>

          {/* ── Name ── */}
          <div>
            <Styled.ContactLabel htmlFor="cf-name">
              {t('contact.name_label')}
            </Styled.ContactLabel>
            <Styled.ContactInput
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={t('contact.name_placeholder')}
              value={form.name}
              $error={touched.name && !!errors.name}
              onChange={e => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
            />
            {touched.name && errors.name && (
              <Styled.ContactFieldError>{t(errors.name)}</Styled.ContactFieldError>
            )}
          </div>

          {/* ── Email ── */}
          <div>
            <Styled.ContactLabel htmlFor="cf-email">
              {t('contact.email_label')}
            </Styled.ContactLabel>
            <Styled.ContactInput
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t('contact.email_placeholder')}
              value={form.email}
              $error={touched.email && !!errors.email}
              onChange={e => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
            />
            {touched.email && errors.email && (
              <Styled.ContactFieldError>{t(errors.email)}</Styled.ContactFieldError>
            )}
          </div>

          {/* ── Message ── */}
          <div>
            <Styled.ContactLabel htmlFor="cf-message">
              {t('contact.message_label')}
            </Styled.ContactLabel>
            <Styled.ContactTextarea
              id="cf-message"
              name="message"
              placeholder={t('contact.message_placeholder')}
              value={form.message}
              $error={touched.message && !!errors.message}
              onChange={e => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
            />
            {touched.message && errors.message && (
              <Styled.ContactFieldError>{t(errors.message)}</Styled.ContactFieldError>
            )}
          </div>

          {/* ── reCAPTCHA v2 (skipped when VITE_RECAPTCHA_SITE_KEY is not set) ── */}
          {RECAPTCHA_SITE_KEY && (
            <Styled.ContactCaptchaRow>
              <ReCAPTCHA
                ref={captchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                theme="dark"
                onChange={(token) => setCaptchaDone(!!token)}
                onExpired={() => setCaptchaDone(false)}
              />
            </Styled.ContactCaptchaRow>
          )}

          {/* ── Honeypot — hidden from real users, bots fill it ─────────────── */}
          <input
            type="text"
            name="_trap"
            value={form._trap}
            onChange={e => setField('_trap', e.target.value)}
            tabIndex={-1}
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
          />

          {/* ── Status message ── */}
          <AnimatePresence mode="wait">
            {status && status !== 'sending' && (
              <Styled.ContactStatus
                key={status}
                $ok={status === 'ok'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {t(`contact.${status === 'ok' ? 'success' : status === 'cooldown' ? 'cooldown' : 'error'}`)}
              </Styled.ContactStatus>
            )}
          </AnimatePresence>

          {/* ── Submit ── */}
          <Styled.ContactSubmitBtn
            type="submit"
            disabled={isSending || disabled || !captchaDone}
            whileTap={!isSending && !disabled && captchaDone ? { scale: 0.97 } : {}}
            whileHover={!isSending && !disabled && captchaDone ? { opacity: 0.85 } : {}}
          >
            {isSending ? t('contact.sending') : t('contact.send')}
          </Styled.ContactSubmitBtn>

        </Styled.ContactForm>
      </Styled.ContactInner>
    </Styled.ContactSection>
  );
};

export default React.memo(ContactForm);
