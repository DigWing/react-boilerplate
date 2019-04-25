import Immutable from 'immutable';
import { posts } from 'schemas';
import { getBasicValue, getDenormalizedValue } from './baseSelectors';

export const getRedditPosts = (state, resultKey = 'redditPosts') =>
  getDenormalizedValue({ schema: posts.schemasArray })(state, resultKey);

export const getBoolean = ({ state, key, defaultValue = false }) =>
  getBasicValue({ state, key, defaultValue });

export const getMap = ({ state, key, defaultValue = Immutable.Map() }) =>
  getBasicValue({ state, key, defaultValue });

export const getList = ({ state, key, defaultValue = Immutable.List() }) =>
  getBasicValue({ state, key, defaultValue });
