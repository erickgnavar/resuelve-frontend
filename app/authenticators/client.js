import ENV from 'resuelve/config/environment';

import base from './base';

export default base.extend({
  endpoint: `${ENV.APP.API_HOST}/users/login`,
  role: 'client',

  getPayload(identifier, password) {
    return {
      email: identifier,
      password: password,
    }
  },
});
