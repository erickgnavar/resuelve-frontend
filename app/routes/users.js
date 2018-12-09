import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';
import $ from 'jquery';
import { Promise } from 'rsvp';
import ENV from 'resuelve/config/environment';
import { run } from '@ember/runloop';


export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),
  // this force to Ember to call the model when the params listed below change
  queryParams: {
    page: {
      refreshModel: true
    },
    sortBy: {
      refreshModel: true
    },
    sortDirection: {
      refreshModel: true
    },
  },

  model(params) {
    // TODO: move this to an adapter
    let session = this.get('session').get('data');
    return new Promise((resolve, reject) => {
      let url = `${ENV.APP.API_HOST}/users/list?page=${params.page}&sortBy=${params.sortBy}&sortDirection=${params.sortDirection}`;
      let token = session.authenticated.token;
      $.ajax({
        url: url,
        method: 'get',
        contentType: 'application/json',
        dataType: 'json',
        headers: {
          'authorization': `Bearer ${token}`
        }
      }).then((response) => {
        run(() => {
          resolve(response);
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
