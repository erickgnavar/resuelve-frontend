import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  currency: service(),
  currencyCode: 'mxn',
  conversion: null,

  didReceiveAttrs() {
    // conversion value will be fetched every time this component is rendered
    this._super(...arguments);
    this.get('currency').getConversion()
      .then((conversion) => {
        this.set('conversion', conversion);
      }); // We don't need to handle the exception because null value is already setted
  }
});
