// ES6 module syntax
import I18n from 'react-native-i18n';
import en from './en';
import it from './it';
import es from './es';
import gm from './gm';
import sc from './sc';

I18n.fallbacks = true;
I18n.defaultLocale = "en";
I18n.locale = "it";
// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');
I18n.translations = {
    'en':en,
    'it':it,
    'es':es,
    'gm':gm,
    'sc':sc
};
I18n.locale = "sc";

console.log(I18n.t('header'))

export default I18n;