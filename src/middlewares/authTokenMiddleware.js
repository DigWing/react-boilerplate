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
    && action.meta.authToken
  ) {
    const callAPI = action;
    delete callAPI.meta.authToken;
    const userToken = token.getToken();

    if (userToken) {
      callAPI.options.headers = {
        ...callAPI.options.headers,
        Authorization: `Bearer ${userToken}`,
      };
    }
    return next(action);
  }
  return next(action);
};
