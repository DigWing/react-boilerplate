import { createSelector } from 'reselect';
import { getEntities, getResults } from 'reducers';
import Immutable from 'immutable';
import { denormalize } from 'normalizr';

export const getBasicValue = ({ state, key, defaultValue }) =>
  getResults(state).get(key, defaultValue);

export const getDenormalizedValue = ({ schema }) => createSelector(
  (state, resultKey) => getResults(state).get(resultKey, Immutable.List()),
  state => getEntities(state),
  (result, entities) =>
    denormalize(
      result,
      schema,
      entities,
    ),
);
