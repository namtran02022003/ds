import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import translationEN from "./languages/en.json";
import translationJP from "./languages/ja.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJP,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: i18n.language || window.localStorage.i18nextLng,
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
