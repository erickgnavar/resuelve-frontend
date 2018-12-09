import ENV from 'resuelve/config/environment';

import base from './base';

export default base.extend({
  endpoint: `${ENV.APP.API_HOST}/users/adminLogin`,

  getPayload(identifier, password) {
    return {
      user: identifier,
      password: password,
    }
  },
});
