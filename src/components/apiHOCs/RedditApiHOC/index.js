import { compose } from 'recompose';
import endpoints from 'api/endpoints';
import { connectRequest, querySelectors } from '@digitalwing.co/redux-query-immutable';
import { connect } from 'react-redux';
import { reddit } from 'api';

import { getRedditPosts } from './selectors';

const RedditApiHOC = () => WrappedComponent => compose(
  connectRequest(({ selectedReddit = 'reactjs' }) =>
    reddit.queries.getReddit({ _reddit: selectedReddit, resultKey: 'reddits', requestCallback: resp => console.log(resp) })),
  connect(state => ({
    redditPosts: getRedditPosts(state, 'reddits'),
    redditIsFetching: querySelectors.isPending(
      state.get('queries'),
      { url: endpoints.getRedditUrl('reactjs') },
    ) || false,
    redditLastUpdated: querySelectors.lastUpdated(
      state.get('queries'),
      { url: endpoints.getRedditUrl('reactjs') },
    ),
  })),
)(WrappedComponent);

export default RedditApiHOC;
