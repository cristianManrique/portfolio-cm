import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage, toggleLanguage } from '../redux/store';

/**
 * useTranslate — custom hook
 *
 * Returns:
 *  - t(key)       → translated string for current language
 *  - lang         → current language code ('en' | 'fr')
 *  - isEN         → boolean shorthand
 *  - isFR         → boolean shorthand
 *  - switchLang   → toggle between EN ↔ FR (dispatches Redux + syncs i18next)
 *  - setLang(l)   → set a specific language by code
 *  - langLabel    → display label for the toggle button e.g. "FR/EN"
 */
export default function useTranslate() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const lang = useSelector(state => state.language.current)

  const isEN = lang === 'en'
  const isFR = lang === 'fr'

  const switchLang = () => dispatch(toggleLanguage())
  const setLang = (code) => dispatch(setLanguage(code))

  // Display label in Navbar — shows the OTHER language you can switch to
  const langLabel = isEN ? 'EN' : 'FR'

  return { t, lang, isEN, isFR, switchLang, setLang, langLabel }
}
