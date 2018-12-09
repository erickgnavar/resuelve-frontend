import Base from 'ember-simple-auth/authenticators/base';
import { run } from '@ember/runloop';
import $ from 'jquery';
import { Promise } from 'rsvp';


function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

// Base class to manage different user roles
export default Base.extend({
  endpoint: null,

  restore(data) {
    if (data.token) {
      return Promise.resolve(data);
    } else {
      return Promise.reject();
    }
  },

  // this should be implemented
  // getPayload(identifier, password) {},

  authenticate(identifier, password) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: this.endpoint,
        method: 'POST',
        data: JSON.stringify(this.getPayload(identifier, password)),
        contentType: 'application/json',
        dataType: 'text'  // The server returns the error in plain html :/
      }).then((response, status, xhr) => {
        let [, token] = xhr.getResponseHeader('authorization').split(' ');
        run(() => {
          let user = parseJwt(token);
          resolve({
            token: token,
            user: user
          });
        });
      }).fail((xhr) => {
        let message = xhr.responseText;
        run(() => {
          reject({
            error: message
          });
        });
      });
    });
  },
});
