import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  renderTemplate () {
    this.render('login', {
      into: 'application',
      outlet: 'external',
    });
  }
});
