import React from "react";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(backend)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        },
        fallbackLng: "en", // use en if detected lng is not available
        keySeparator: '.', // we do not use keys in form messages.welcome
        load: 'languageOnly',
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        debug: false,
    });

export default i18n;