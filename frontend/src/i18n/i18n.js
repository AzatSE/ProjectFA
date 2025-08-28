import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'ru', 'uz', 'es', 'ja',], // ✅ явно указываем доступные языки
    load: 'languageOnly',        // ✅ игнорирует регион (en-US → en)
    ns: ['homepage', 'about'],
    defaultNS: 'homepage',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // ✅ запоминает язык
    },
  })

export default i18n