import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/translation.json" // adjust the path to your folder structure
    },
    react: { useSuspense: false },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: {
      order: ["cookies", "htmlTag", "localstorage", "path"]
    }
  });

export default i18n;
