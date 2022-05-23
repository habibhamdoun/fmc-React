import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
