import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import endpoints from 'api/endpoints';
import { requestAsync, querySelectors } from '@digitalwing.co/redux-query-immutable';
import { connect } from 'react-redux';
import { reddit } from 'api';

import { getRedditPosts } from './selectors';

const RedditApiHOC = () => WrappedComponent => compose(
  connect(
    state => ({
      redditPosts: getRedditPosts(state, 'reddits'),
      redditIsFetching: querySelectors.isPending(
        state.get('queries'),
        { queryKey: endpoints.getRedditUrl({}) },
      ) || false,
    }),
    dispatch => ({
      ...bindActionCreators({
        getReddit: ({ redditName }) => requestAsync(
          reddit.getReddit({ redditName }),
        ),
      }, dispatch),
    }),
  ),
)(WrappedComponent);

export default RedditApiHOC;
