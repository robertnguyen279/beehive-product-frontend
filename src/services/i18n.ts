import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const isProduction = process.env.NODE_ENV === 'production';

export default i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init(
    {
      debug: !isProduction,
      backend: {
        loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      },
      whitelist: ['en', 'vi'],
      interpolation: {
        escapeValue: false, // not needed for react.
      },
      ns: ['homePage'],
      react: {
        wait: false,
      },
      fallbackLng: false,
    },
    (err) => {
      if (err) {
        return console.error('Load i18n instance failed.', err);
      }
    },
  );
