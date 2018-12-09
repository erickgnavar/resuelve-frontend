import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pagination-navbar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let pagination = {
      totalPages: 10,
      page: 1,
    };
    this.set('pagination', pagination);

    await render(hbs`{{pagination-navbar pagination=pagination}}`);

    // 10 items and left and right buttons
    assert.equal(this.element.querySelectorAll('li.page-item').length, 12);
  });
});
