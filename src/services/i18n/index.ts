import en from './locales/en.json'
import hu from './locales/hu.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

//TODO timezone, languagekey from storage/env

const resources = {
  en: {
    translation: en
  },
  hu: {
    translation: hu
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'hu',
  fallbackLng: 'hu',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
