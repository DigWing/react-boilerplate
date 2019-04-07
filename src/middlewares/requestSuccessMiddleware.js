import { actionTypes } from '@digitalwing.co/redux-query-immutable';
import _ from 'lodash';

/**
 * Calls meta.successCallback after success request.
 *
 * @return {void}
 */
export default () => next => (action) => {
  if (_.isEqual(action.type, actionTypes.REQUEST_SUCCESS)) {
    const { successCallback } = action.meta;

    if (successCallback && _.isFunction(successCallback)) {
      successCallback(action.responseBody);
    }
  }

  return next(action);
};
