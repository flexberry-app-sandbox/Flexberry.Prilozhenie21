import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie2.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie2.title'),
          children: [{
            link: 'i-i-s-prilozhenie2-спр-контр-аг-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-контр-аг-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-контр-аг-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-prilozhenie2-спр-номен-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-номен-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-номен-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-prilozhenie2-спр-ед-измер-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-ед-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-ед-измер-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-prilozhenie2-спр-тип-транс-ср-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-тип-транс-ср-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-тип-транс-ср-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-prilozhenie2-спр-объект-стр-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-объект-стр-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-объект-стр-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-prilozhenie2-спр-трансп-ср-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-трансп-ср-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-трансп-ср-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-prilozhenie2-спр-виды-работ-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-виды-работ-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie2.i-i-s-prilozhenie2-спр-виды-работ-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})