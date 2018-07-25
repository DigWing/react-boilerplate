import { createStore, applyMiddleware } from 'redux';
import { queryMiddleware } from '@digitalwing.co/redux-query-immutable';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers, { getQueries, getEntities, getResults } from 'reducers';
import { authTokenMiddleware } from 'middlewares';
import { Iterable } from 'immutable';

export default () => {
  let middlewares = [
    authTokenMiddleware,
    queryMiddleware(getQueries, getEntities, getResults),
  ];

  const composeEnhancers = composeWithDevTools({ realtime: true });

  const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS();
    return state;
  };

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, createLogger({ stateTransformer })];
  }

  middlewares = applyMiddleware(...middlewares);

  if (process.env.NODE_ENV !== 'production') {
    middlewares = composeEnhancers(middlewares);
  }

  return createStore(
    reducers,
    middlewares,
  );
};
