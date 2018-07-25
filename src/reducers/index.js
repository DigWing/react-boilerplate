import { combineReducers } from 'redux-immutable';
import { entitiesReducer, queriesReducer, resultsReducer } from '@digitalwing.co/redux-query-immutable';

// import { reducer as form } from 'redux-form';

export const getQueries = state => state.get('queries');
export const getEntities = state => state.get('entities');
export const getResults = state => state.get('results');

export default combineReducers({
  // form,
  entities: entitiesReducer,
  queries: queriesReducer,
  results: resultsReducer,
});
