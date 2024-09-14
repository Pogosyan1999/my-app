import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './menu/en.json';
import ru from './menu/ru.json';

const resources = {
   en:{
     translation:en
   },
   ru:{
     translation:ru
   }
   // arm:{
   //   translation:arm
   // }
 }
 
 
 i18n
   .use(initReactI18next)
   .init({
     resources,
     lng: 'en',
     interpolation: {
       escapeValue: false,
     },
 
   });
 
 export default i18n;