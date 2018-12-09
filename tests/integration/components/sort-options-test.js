import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sort-options', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('options', [
      {value: 'name', text: 'By name'},
      {value: 'email', text: 'By email'},
    ]);

    await render(hbs`{{sort-options options=options}}`);

    assert.equal(this.element.querySelectorAll('option').length, 2);
  });
});
