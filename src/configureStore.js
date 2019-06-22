import { createStore, applyMiddleware } from 'redux';
import { queryMiddleware } from '@digitalwing.co/redux-query-immutable';
import { createLogger } from 'redux-logger';
import reducers, { getQueries, getEntities, getResults } from 'reducers';
import {
  authTokenMiddleware,
  requestStartMiddleware,
  requestFailureMiddleware,
  requestSuccessMiddleware,
} from 'middlewares';
import { Iterable } from 'immutable';
import { createBrowserHistory } from 'history';

const configureStore = () => {
  let middlewares = [
    requestStartMiddleware,
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

export const history = createBrowserHistory();
export const store = configureStore(history);
