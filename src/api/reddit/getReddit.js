import { normalize } from 'normalizr';
import endpoints from 'api/endpoints';
import Immutable from 'immutable';
import { posts } from 'schemas';

export default ({ redditName }) => ({
  url: endpoints.getRedditUrl({ redditName }),
  transform: response => normalize(response.data.children, posts.schemasArray).entities,
  transformResult: response => ({
    posts: normalize(response.data.children, posts.schemasArray).result,
  }),
  queryKey: endpoints.getRedditUrl(),
  meta: {
    // authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
  },
  update: {
    posts: (prevEntities = Immutable.Map(), newEntities) => prevEntities.mergeDeep(newEntities),
  },
  updateResult: {
    posts:
      (prevResult = Immutable.List(), result) =>
        prevResult.toOrderedSet().union(result.toOrderedSet()).toList(), // || => result
  },
});
