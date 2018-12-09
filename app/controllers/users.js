import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: 'page',
  page: 1,

  actions: {
    // this function will be called from pagination-navbar component
    changePage(page) {
      this.transitionToRoute('users', {queryParams: {page: page}});
    }
  }
});
