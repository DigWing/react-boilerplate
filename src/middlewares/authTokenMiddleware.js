import { token } from 'helpers';
import _ from 'lodash';
import { actionTypes } from '@digitalwing.co/redux-query-immutable';

/**
 * Add Authorization header to api action
 *
 * @return {void}
 */
export default () => next => (action) => {
  if ((
    _.isEqual(action.type, actionTypes.REQUEST_ASYNC)
      || _.isEqual(action.type, actionTypes.MUTATE_ASYNC))
    && action.meta.authToken) {
    const callAPI = action;
    const { headers } = action.options;

    delete callAPI.meta.authToken;

    return token.getToken()
      .then((T) => {
        if (T) {
          callAPI.options.headers = {
            ...headers,
            Authorization: `Bearer ${T}`,
          };
        }

        return next(action);
      })
      .catch((err) => {
        console.log(err);
        return next(action);
      });
  } else {
    return next(action);
  }
};
