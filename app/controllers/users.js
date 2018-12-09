import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['page', 'sortBy', 'sortDirection'],
  page: 1,
  sortBy: 'created_at',
  sortDirection: 'desc',

  init() {
    this._super();
    this.set('sortOptions', [
      {value: 'nombre', text: 'Sort by first name'},
      {value: 'segundo_nombre', text: 'Sort by middle name'},
      {value: 'apellido', text: 'Sort by last name'},
      {value: 'email', text: 'Sort by email'},
      {value: 'created_at', text: 'Sort by creation date'},
    ]);
  },

  actions: {
    // this function will be called from pagination-navbar component
    changePage(page) {
      this.set('page', page);
    },
  }
});
