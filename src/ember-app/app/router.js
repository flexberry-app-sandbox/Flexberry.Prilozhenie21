import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie2-спр-виды-работ-l');
  this.route('i-i-s-prilozhenie2-спр-виды-работ-e',
  { path: 'i-i-s-prilozhenie2-спр-виды-работ-e/:id' });
  this.route('i-i-s-prilozhenie2-спр-виды-работ-e.new',
  { path: 'i-i-s-prilozhenie2-спр-виды-работ-e/new' });
  this.route('i-i-s-prilozhenie2-спр-ед-измер-l');
  this.route('i-i-s-prilozhenie2-спр-ед-измер-e',
  { path: 'i-i-s-prilozhenie2-спр-ед-измер-e/:id' });
  this.route('i-i-s-prilozhenie2-спр-ед-измер-e.new',
  { path: 'i-i-s-prilozhenie2-спр-ед-измер-e/new' });
  this.route('i-i-s-prilozhenie2-спр-контр-аг-l');
  this.route('i-i-s-prilozhenie2-спр-контр-аг-e',
  { path: 'i-i-s-prilozhenie2-спр-контр-аг-e/:id' });
  this.route('i-i-s-prilozhenie2-спр-контр-аг-e.new',
  { path: 'i-i-s-prilozhenie2-спр-контр-аг-e/new' });
  this.route('i-i-s-prilozhenie2-спр-номен-l');
  this.route('i-i-s-prilozhenie2-спр-номен-e',
  { path: 'i-i-s-prilozhenie2-спр-номен-e/:id' });
  this.route('i-i-s-prilozhenie2-спр-номен-e.new',
  { path: 'i-i-s-prilozhenie2-спр-номен-e/new' });
  this.route('i-i-s-prilozhenie2-спр-объект-стр-l');
  this.route('i-i-s-prilozhenie2-спр-объект-стр-e',
  { path: 'i-i-s-prilozhenie2-спр-объект-стр-e/:id' });
  this.route('i-i-s-prilozhenie2-спр-объект-стр-e.new',
  { path: 'i-i-s-prilozhenie2-спр-объект-стр-e/new' });
  this.route('i-i-s-prilozhenie2-спр-тип-транс-ср-l');
  this.route('i-i-s-prilozhenie2-спр-тип-транс-ср-e',
  { path: 'i-i-s-prilozhenie2-спр-тип-транс-ср-e/:id' });
  this.route('i-i-s-prilozhenie2-спр-тип-транс-ср-e.new',
  { path: 'i-i-s-prilozhenie2-спр-тип-транс-ср-e/new' });
  this.route('i-i-s-prilozhenie2-спр-трансп-ср-l');
  this.route('i-i-s-prilozhenie2-спр-трансп-ср-e',
  { path: 'i-i-s-prilozhenie2-спр-трансп-ср-e/:id' });
  this.route('i-i-s-prilozhenie2-спр-трансп-ср-e.new',
  { path: 'i-i-s-prilozhenie2-спр-трансп-ср-e/new' });
});

export default Router;
