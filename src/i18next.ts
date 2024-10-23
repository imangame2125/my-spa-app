import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import TRANSLATION_FA from './locales/fa/translation.json'

export const defaultNS = 'fa'
export const resources = {
  fa: {
    fa: TRANSLATION_FA
  }
}

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: 'fa',
  ns: ['fa'],
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
