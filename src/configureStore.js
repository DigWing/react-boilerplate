import { createStore, applyMiddleware } from 'redux';
import { queryMiddleware } from '@digitalwing.co/redux-query-immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers, { getQueries, getEntities, getResults } from 'reducers';
import { authTokenMiddleware } from 'middlewares';

export default () => {
  let middlewares = [
    authTokenMiddleware,
    queryMiddleware(getQueries, getEntities, getResults),
  ];

  const composeEnhancers = composeWithDevTools({ realtime: true });

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger];
  }

  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
};
