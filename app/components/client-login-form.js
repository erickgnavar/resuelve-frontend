import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { validatePresence } from 'ember-changeset-validations/validators';

let credentials = {};

// validations were declared here because are only 2 fields
const validations = {
  email: validatePresence(true),
  password: validatePresence(true)
};

export default Component.extend({
  session: service(),
  router: service(),
  credentials: credentials,
  validations: validations,
  actions: {
    authenticate(changeset) {
      changeset.validate()
        .then(() => {
          if (changeset.get('isValid')) {
            let email = changeset.get('email');
            let password = changeset.get('password');
            this.get('session')
              .authenticate('authenticator:client', email, password)
              .then(() => {
                this.get('router').transitionTo('index');
              })
              .catch((reason) => {
                this.set('errorMessage', reason.error || reason);
              });
          }
        });
    }
  }
});
