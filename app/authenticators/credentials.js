import Base from 'ember-simple-auth/authenticators/base';
import { run } from '@ember/runloop';
import $ from 'jquery';
import { Promise } from 'rsvp';
import ENV from 'resuelve/config/environment';


function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export default Base.extend({
  endpoint: `${ENV.APP.API_HOST}/users/login`,
  adminEndpoint: `${ENV.APP.API_HOST}/users/adminLogin`,

  restore(data) {
    if (data.token) {
      return Promise.resolve(data);
    } else {
      return Promise.reject();
    }
  },

  authenticate(username, password) {
    return new Promise((resolve, reject) => {
      $.ajax({
        // TODO: allow to use different endpoint
        url: this.adminEndpoint,
        method: 'POST',
        data: JSON.stringify({
          user: username,
          password: password
        }),
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
