import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';  
import ar from './ar.json'; 
import languageDetector from 'i18next-browser-languagedetector'; 

const resources =  {
  en: { translation: en },
  ar: { translation: ar },
}

i18n
  .use(languageDetector) //لتحدد اللغة الحالية
  .use(initReactI18next)
  .init({
    resources,
    // lng: 'en',  // اللغة الافتراضية
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,  // React يحمي النصوص تلقائيًا
    },
    detection:{
      order: ['htmlTag', 'cookie', 'localStorage', 'navigatorLanguage', 'path', 'subdomain'],
      caches: [] //لو سكرت الموقع بيضل حافظ اللغة يلي اخترتها
      //'localStorage', 'cookie'
    },
    react: {
      useSuspense: false
    }
});

export default i18n;
