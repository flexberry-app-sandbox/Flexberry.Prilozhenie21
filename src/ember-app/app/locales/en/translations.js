import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie2СпрВидыРаботLForm from './forms/i-i-s-prilozhenie2-спр-виды-работ-l';
import IISPrilozhenie2СпрЕдИзмерLForm from './forms/i-i-s-prilozhenie2-спр-ед-измер-l';
import IISPrilozhenie2СпрКонтрАгLForm from './forms/i-i-s-prilozhenie2-спр-контр-аг-l';
import IISPrilozhenie2СпрНоменLForm from './forms/i-i-s-prilozhenie2-спр-номен-l';
import IISPrilozhenie2СпрОбъектСтрLForm from './forms/i-i-s-prilozhenie2-спр-объект-стр-l';
import IISPrilozhenie2СпрТипТрансСрLForm from './forms/i-i-s-prilozhenie2-спр-тип-транс-ср-l';
import IISPrilozhenie2СпрТранспСрLForm from './forms/i-i-s-prilozhenie2-спр-трансп-ср-l';
import IISPrilozhenie2СпрВидыРаботEForm from './forms/i-i-s-prilozhenie2-спр-виды-работ-e';
import IISPrilozhenie2СпрЕдИзмерEForm from './forms/i-i-s-prilozhenie2-спр-ед-измер-e';
import IISPrilozhenie2СпрКонтрАгEForm from './forms/i-i-s-prilozhenie2-спр-контр-аг-e';
import IISPrilozhenie2СпрНоменEForm from './forms/i-i-s-prilozhenie2-спр-номен-e';
import IISPrilozhenie2СпрОбъектСтрEForm from './forms/i-i-s-prilozhenie2-спр-объект-стр-e';
import IISPrilozhenie2СпрТипТрансСрEForm from './forms/i-i-s-prilozhenie2-спр-тип-транс-ср-e';
import IISPrilozhenie2СпрТранспСрEForm from './forms/i-i-s-prilozhenie2-спр-трансп-ср-e';
import IISPrilozhenie2СпрВидыРабModel from './models/i-i-s-prilozhenie2-спр-виды-раб';
import IISPrilozhenie2СпрЕдИзмерModel from './models/i-i-s-prilozhenie2-спр-ед-измер';
import IISPrilozhenie2СпрКонтрАгModel from './models/i-i-s-prilozhenie2-спр-контр-аг';
import IISPrilozhenie2СпрНоменModel from './models/i-i-s-prilozhenie2-спр-номен';
import IISPrilozhenie2СпрОбъектСтрModel from './models/i-i-s-prilozhenie2-спр-объект-стр';
import IISPrilozhenie2СпрТипТрансСрModel from './models/i-i-s-prilozhenie2-спр-тип-транс-ср';
import IISPrilozhenie2СпрТранспСрModel from './models/i-i-s-prilozhenie2-спр-трансп-ср';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie2-спр-виды-раб': IISPrilozhenie2СпрВидыРабModel,
    'i-i-s-prilozhenie2-спр-ед-измер': IISPrilozhenie2СпрЕдИзмерModel,
    'i-i-s-prilozhenie2-спр-контр-аг': IISPrilozhenie2СпрКонтрАгModel,
    'i-i-s-prilozhenie2-спр-номен': IISPrilozhenie2СпрНоменModel,
    'i-i-s-prilozhenie2-спр-объект-стр': IISPrilozhenie2СпрОбъектСтрModel,
    'i-i-s-prilozhenie2-спр-тип-транс-ср': IISPrilozhenie2СпрТипТрансСрModel,
    'i-i-s-prilozhenie2-спр-трансп-ср': IISPrilozhenie2СпрТранспСрModel
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
          },
          'i-i-s-prilozhenie2-спр-тип-транс-ср-l': {
            caption: 'Справочник типы транспортного средства',
            title: ''
          },
          'i-i-s-prilozhenie2-спр-объект-стр-l': {
            caption: 'Справочник объекты строительства',
            title: ''
          },
          'i-i-s-prilozhenie2-спр-трансп-ср-l': {
            caption: 'Справочник транспортные средства',
            title: ''
          },
          'i-i-s-prilozhenie2-спр-виды-работ-l': {
            caption: 'Справочник виды работ',
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
    'i-i-s-prilozhenie2-спр-виды-работ-l': IISPrilozhenie2СпрВидыРаботLForm,
    'i-i-s-prilozhenie2-спр-ед-измер-l': IISPrilozhenie2СпрЕдИзмерLForm,
    'i-i-s-prilozhenie2-спр-контр-аг-l': IISPrilozhenie2СпрКонтрАгLForm,
    'i-i-s-prilozhenie2-спр-номен-l': IISPrilozhenie2СпрНоменLForm,
    'i-i-s-prilozhenie2-спр-объект-стр-l': IISPrilozhenie2СпрОбъектСтрLForm,
    'i-i-s-prilozhenie2-спр-тип-транс-ср-l': IISPrilozhenie2СпрТипТрансСрLForm,
    'i-i-s-prilozhenie2-спр-трансп-ср-l': IISPrilozhenie2СпрТранспСрLForm,
    'i-i-s-prilozhenie2-спр-виды-работ-e': IISPrilozhenie2СпрВидыРаботEForm,
    'i-i-s-prilozhenie2-спр-ед-измер-e': IISPrilozhenie2СпрЕдИзмерEForm,
    'i-i-s-prilozhenie2-спр-контр-аг-e': IISPrilozhenie2СпрКонтрАгEForm,
    'i-i-s-prilozhenie2-спр-номен-e': IISPrilozhenie2СпрНоменEForm,
    'i-i-s-prilozhenie2-спр-объект-стр-e': IISPrilozhenie2СпрОбъектСтрEForm,
    'i-i-s-prilozhenie2-спр-тип-транс-ср-e': IISPrilozhenie2СпрТипТрансСрEForm,
    'i-i-s-prilozhenie2-спр-трансп-ср-e': IISPrilozhenie2СпрТранспСрEForm
  },

});

export default translations;
