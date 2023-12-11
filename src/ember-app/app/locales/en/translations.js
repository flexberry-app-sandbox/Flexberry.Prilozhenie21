import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie2СпрЕдИзмерLForm from './forms/i-i-s-prilozhenie2-спр-ед-измер-l';
import IISPrilozhenie2СпрКонтрАгLForm from './forms/i-i-s-prilozhenie2-спр-контр-аг-l';
import IISPrilozhenie2СпрНоменLForm from './forms/i-i-s-prilozhenie2-спр-номен-l';
import IISPrilozhenie2СпрЕдИзмерEForm from './forms/i-i-s-prilozhenie2-спр-ед-измер-e';
import IISPrilozhenie2СпрКонтрАгEForm from './forms/i-i-s-prilozhenie2-спр-контр-аг-e';
import IISPrilozhenie2СпрНоменEForm from './forms/i-i-s-prilozhenie2-спр-номен-e';
import IISPrilozhenie2СпрЕдИзмерModel from './models/i-i-s-prilozhenie2-спр-ед-измер';
import IISPrilozhenie2СпрКонтрАгModel from './models/i-i-s-prilozhenie2-спр-контр-аг';
import IISPrilozhenie2СпрНоменModel from './models/i-i-s-prilozhenie2-спр-номен';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie2-спр-ед-измер': IISPrilozhenie2СпрЕдИзмерModel,
    'i-i-s-prilozhenie2-спр-контр-аг': IISPrilozhenie2СпрКонтрАгModel,
    'i-i-s-prilozhenie2-спр-номен': IISPrilozhenie2СпрНоменModel
  },

  'application-name': 'Prilozhenie2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie2',
          title: 'Prilozhenie2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        prilozhenie2: {
          caption: 'Prilozhenie2',
          title: 'Prilozhenie2',
          'i-i-s-prilozhenie2-спр-контр-аг-l': {
            caption: 'Справочник контрагенты',
            title: ''
          },
          'i-i-s-prilozhenie2-спр-номен-l': {
            caption: 'Справочник номенклатуры',
            title: ''
          },
          'i-i-s-prilozhenie2-спр-ед-измер-l': {
            caption: 'Справочник единицы измерения',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie2-спр-ед-измер-l': IISPrilozhenie2СпрЕдИзмерLForm,
    'i-i-s-prilozhenie2-спр-контр-аг-l': IISPrilozhenie2СпрКонтрАгLForm,
    'i-i-s-prilozhenie2-спр-номен-l': IISPrilozhenie2СпрНоменLForm,
    'i-i-s-prilozhenie2-спр-ед-измер-e': IISPrilozhenie2СпрЕдИзмерEForm,
    'i-i-s-prilozhenie2-спр-контр-аг-e': IISPrilozhenie2СпрКонтрАгEForm,
    'i-i-s-prilozhenie2-спр-номен-e': IISPrilozhenie2СпрНоменEForm
  },

});

export default translations;
