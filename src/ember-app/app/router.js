import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
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
});

export default Router;
