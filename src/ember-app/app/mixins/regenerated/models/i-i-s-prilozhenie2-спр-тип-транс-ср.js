import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вместВКубМ: DS.attr('decimal'),
  код: DS.attr('number'),
  описание: DS.attr('string')
});

export let ValidationRules = {
  вместВКубМ: {
    descriptionKey: 'models.i-i-s-prilozhenie2-спр-тип-транс-ср.validations.вместВКубМ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-prilozhenie2-спр-тип-транс-ср.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-prilozhenie2-спр-тип-транс-ср.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрТипТрансСрE', 'i-i-s-prilozhenie2-спр-тип-транс-ср', {
    код: attr('Код', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    вместВКубМ: attr('Вместимость в кубических метрах', { index: 2 })
  });

  modelClass.defineProjection('СпрТипТрансСрL', 'i-i-s-prilozhenie2-спр-тип-транс-ср', {
    код: attr('Код', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    вместВКубМ: attr('Вместимость в кубических метрах', { index: 2 })
  });
};
