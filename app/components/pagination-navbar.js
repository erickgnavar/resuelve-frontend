import Component from '@ember/component';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    let pages = [];
    // Use this because javascript doesn't have a range funcion :/
    for (var i = 1; i < this.pagination.totalPages + 1; i++) {
      pages.push(i);
    }
    this.set('pageNumbers', pages);
  },
  actions: {
    previousPage() {
      this.changePage(this.pagination.page - 1)
    },
    nextPage() {
      this.changePage(this.pagination.page + 1);
    },
    changePage(page) {
      this.changePage(page);
    }
  }
});
