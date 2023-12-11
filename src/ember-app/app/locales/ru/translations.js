import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrilozhenie2СпрЕдИзмерLForm from './forms/i-i-s-prilozhenie2-спр-ед-измер-l';
import IISPrilozhenie2СпрКонтрАгLForm from './forms/i-i-s-prilozhenie2-спр-контр-аг-l';
import IISPrilozhenie2СпрНоменLForm from './forms/i-i-s-prilozhenie2-спр-номен-l';
import IISPrilozhenie2СпрТипТрансСрLForm from './forms/i-i-s-prilozhenie2-спр-тип-транс-ср-l';
import IISPrilozhenie2СпрЕдИзмерEForm from './forms/i-i-s-prilozhenie2-спр-ед-измер-e';
import IISPrilozhenie2СпрКонтрАгEForm from './forms/i-i-s-prilozhenie2-спр-контр-аг-e';
import IISPrilozhenie2СпрНоменEForm from './forms/i-i-s-prilozhenie2-спр-номен-e';
import IISPrilozhenie2СпрТипТрансСрEForm from './forms/i-i-s-prilozhenie2-спр-тип-транс-ср-e';
import IISPrilozhenie2СпрЕдИзмерModel from './models/i-i-s-prilozhenie2-спр-ед-измер';
import IISPrilozhenie2СпрКонтрАгModel from './models/i-i-s-prilozhenie2-спр-контр-аг';
import IISPrilozhenie2СпрНоменModel from './models/i-i-s-prilozhenie2-спр-номен';
import IISPrilozhenie2СпрТипТрансСрModel from './models/i-i-s-prilozhenie2-спр-тип-транс-ср';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie2-спр-ед-измер': IISPrilozhenie2СпрЕдИзмерModel,
    'i-i-s-prilozhenie2-спр-контр-аг': IISPrilozhenie2СпрКонтрАгModel,
    'i-i-s-prilozhenie2-спр-номен': IISPrilozhenie2СпрНоменModel,
    'i-i-s-prilozhenie2-спр-тип-транс-ср': IISPrilozhenie2СпрТипТрансСрModel
  },

  'application-name': 'Prilozhenie2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie2',
          title: 'Prilozhenie2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie2-спр-ед-измер-l': IISPrilozhenie2СпрЕдИзмерLForm,
    'i-i-s-prilozhenie2-спр-контр-аг-l': IISPrilozhenie2СпрКонтрАгLForm,
    'i-i-s-prilozhenie2-спр-номен-l': IISPrilozhenie2СпрНоменLForm,
    'i-i-s-prilozhenie2-спр-тип-транс-ср-l': IISPrilozhenie2СпрТипТрансСрLForm,
    'i-i-s-prilozhenie2-спр-ед-измер-e': IISPrilozhenie2СпрЕдИзмерEForm,
    'i-i-s-prilozhenie2-спр-контр-аг-e': IISPrilozhenie2СпрКонтрАгEForm,
    'i-i-s-prilozhenie2-спр-номен-e': IISPrilozhenie2СпрНоменEForm,
    'i-i-s-prilozhenie2-спр-тип-транс-ср-e': IISPrilozhenie2СпрТипТрансСрEForm
  },

});

export default translations;
