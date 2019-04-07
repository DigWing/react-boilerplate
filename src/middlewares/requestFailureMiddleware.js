import { actionTypes } from '@digitalwing.co/redux-query-immutable';
import _ from 'lodash';

/**
 * Calls meta.errorCallback on request failure.
 *
 * @return {void}
 */
export default () => next => (action) => {
  if (_.isEqual(action.type, actionTypes.REQUEST_FAILURE)) {
    const { errorCallback } = action.meta;

    if (errorCallback && _.isFunction(errorCallback)) {
      errorCallback();
    }
  }

  return next(action);
};
