import Service from '@ember/service';
import $ from 'jquery';
import { run } from '@ember/runloop';
import { Promise } from 'rsvp';
import ENV from 'resuelve/config/environment';

export default Service.extend({
  getConversion() {
    let url = `${ENV.APP.API_HOST}/money/conversion`;

    return new Promise((resolve, reject) => {
      $.getJSON(url)
        .then((response) => {
          run(() => {
            resolve(response);
          });
          return response;
        }).fail(() => {
          run(() => {
            reject(null);
          });
        });
    });
  }
});
