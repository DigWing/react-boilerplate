import { createSelector } from 'reselect';
import { getEntities, getResults } from 'reducers';
import Immutable from 'immutable';
import { denormalize } from 'normalizr';
import { reddit as redditSchemas } from 'schemas';

export const getRedditPosts = createSelector(
  (state, resultKey) => getResults(state).get(resultKey, Immutable.List()),
  state => getEntities(state),
  (result, entities) =>
    denormalize(
      result,
      redditSchemas.arrayOfPostSchemas,
      entities,
    ),
);
