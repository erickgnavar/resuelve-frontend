import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('users');
  this.route('user-movements', { path: 'users/:user_id/movements' });
  this.route('my-movements');
});

export default Router;
