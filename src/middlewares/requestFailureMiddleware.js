import _ from 'lodash';
import {
  actionTypes,
} from '@digitalwing.co/redux-query-immutable';

/**
 * Если передан meta.errorCallback, он будет вызван.
 *
 * @return {void}
 */
export default () => next => (action) => {
  if (action.type === actionTypes.REQUEST_FAILURE) {
    const { errorCallback } = action.meta;

    if (errorCallback && _.isFunction(errorCallback)) {
      errorCallback(action.responseBody);
    }
  }

  return next(action);
};
