import { createSlice, configureStore } from '@reduxjs/toolkit'
import i18n from '../i18n/i18n'

// ─── Slice ────────────────────────────────────────────────────────────────────
const languageSlice = createSlice({
  name: 'language',
  initialState: {
    current: 'en',          // 'en' | 'fr'
    available: ['en', 'fr'],
  },
  reducers: {
    setLanguage(state, action) {
      const lang = action.payload
      if (state.available.includes(lang)) {
        state.current = lang
        i18n.changeLanguage(lang)   // keep i18next in sync
      }
    },
    toggleLanguage(state) {
      const next = state.current === 'en' ? 'fr' : 'en'
      state.current = next
      i18n.changeLanguage(next)     // keep i18next in sync
    },
  },
})

export const { setLanguage, toggleLanguage } = languageSlice.actions

// ─── Store ────────────────────────────────────────────────────────────────────
const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
  },
})

export default store
