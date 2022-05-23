import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import translationEN from "../src/locales/en/translation.json";
import translationAR from "../src/locales/ar/translation.json";
import i18n from "i18next";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ar: {
      translation: translationAR,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
