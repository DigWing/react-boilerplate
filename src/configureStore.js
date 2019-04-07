import { createStore, applyMiddleware } from 'redux';
import { queryMiddleware } from '@digitalwing.co/redux-query-immutable';
import { createLogger } from 'redux-logger';
import reducers, { getQueries, getEntities, getResults } from 'reducers';
import {
  authTokenMiddleware,
  requestFailureMiddleware,
  requestSuccessMiddleware,
} from 'middlewares';
import { Iterable } from 'immutable';

export default () => {
  let middlewares = [
    authTokenMiddleware,
    requestFailureMiddleware,
    requestSuccessMiddleware,
    queryMiddleware(getQueries, getEntities, getResults),
  ];

  const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS();
    return state;
  };

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, createLogger({ stateTransformer })];
  }

  middlewares = applyMiddleware(...middlewares);

  return createStore(
    reducers,
    middlewares,
  );
};
