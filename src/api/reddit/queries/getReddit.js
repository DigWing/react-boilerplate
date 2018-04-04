import { normalize } from 'normalizr';
import endpoints from 'api/endpoints';
import Immutable from 'immutable';
import { reddit } from 'schemas';

export default ({ _reddit, resultKey = 'reddit', requestCallback }) => ({
  url: endpoints.getRedditUrl(_reddit),
  requestCallback,
  transform: response => normalize(response.data.children, reddit.arrayOfPostSchemas).entities,
  transformResult: response =>
    ({ [resultKey]: normalize(response.data.children, reddit.arrayOfPostSchemas).result }),
  meta: {
    // authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
  },
  update: {
    posts: (prevPosts = Immutable.Map(), posts) => prevPosts.mergeDeep(posts),
  },
  updateResult: {
    [resultKey]: (prevResult = Immutable.List(), result) => prevResult.merge(result),
  },
});
