import Immutable from 'immutable';
import { posts } from 'schemas';
import { getEntities, getResults } from 'reducers';
import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

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
