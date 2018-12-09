import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  queryParams: 'page',
  page: 1,
  sortBy: 'created_at',
  sortDirection: 'desc',

  init() {
    this._super();
    this.set('sortOptions', [
      {value: 'account', text: 'Sort by account'},
      {value: 'amount', text: 'Sort by amount'},
      {value: 'type', text: 'Sort by type'},
      {value: 'description', text: 'Sort by description'},
      {value: 'created_at', text: 'Sort by creation date'},
    ]);
  },

  actions: {
    // this function will be called from pagination-navbar component
    changePage(page) {
      this.set('page', page);
    }
  }
});
