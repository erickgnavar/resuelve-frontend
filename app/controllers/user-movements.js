import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  queryParams: 'page',

  page: 1,

  actions: {
    // this function will be called from pagination-navbar component
    changePage(page) {
      let userId = this.get('userId');
      this.transitionToRoute('user-movements', userId, {queryParams: {page: page}});
    }
  }
});
