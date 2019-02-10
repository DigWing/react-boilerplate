import { createSelector } from 'reselect';
import { getEntities, getResults } from 'reducers';
import Immutable from 'immutable';
import { denormalize } from 'normalizr';
import { posts } from 'schemas';

export const getRedditPosts = createSelector(
  (state, resultKey) => getResults(state).get(resultKey, Immutable.List()),
  state => getEntities(state),
  (result, entities) =>
    denormalize(
      result,
      posts.schemasArray,
      entities,
    ),
);
