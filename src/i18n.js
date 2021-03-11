import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n.use(HttpApi)
    .use(initReactI18next)
    .init({
        debug: process.env.REACT_APP_I18N_LOG_LEVEL || false,

        fallbackLng: 'en',
        supportedLngs: ['en', 'ru', 'uk'],

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: true,
        },
        backend: {
            loadPath: '/translations/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
