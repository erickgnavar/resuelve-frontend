import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

// TODO: move this mixin behaviour to router.js
export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),
});
