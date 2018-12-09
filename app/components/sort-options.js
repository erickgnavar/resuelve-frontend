import Component from '@ember/component';

export default Component.extend({
  actions: {
    setSortField(selection) {
      this.set('sortBy', selection);
    },
    setSortDirection(direction) {
      this.set('sortDirection', direction);
    }
  }
});
