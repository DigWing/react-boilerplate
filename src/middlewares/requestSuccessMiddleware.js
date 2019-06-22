import { actionTypes } from '@digitalwing.co/redux-query-immutable';
import _ from 'lodash';

/**
 * Если передан meta.successCallback, он будет вызван.
 *
 * @return {void}
 */
export default () => next => (action) => {
  if (action.type === actionTypes.REQUEST_SUCCESS) {
    const { successCallback } = action.meta;

    if (successCallback && _.isFunction(successCallback)) {
      successCallback(action.responseBody);
    }
  }

  return next(action);
};
