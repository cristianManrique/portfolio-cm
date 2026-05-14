import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: false, // supprime logs i18next en console
  saveMissing: false, // supprime le message Locize (v25)
  missingKeyHandler: false, // désactive le handler qui trigger le log
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
