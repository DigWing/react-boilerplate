import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { endpoints } from 'consts';
import { querySelectors } from '@digitalwing.co/redux-query-immutable';
import { connect } from 'react-redux';
import { getReddit } from 'actions/reddit';

import { getRedditPosts } from './selectors';

const RedditApiHOC = () => WrappedComponent => compose(
  connect(
    state => ({
      redditPosts: getRedditPosts(state, 'posts'),
      redditIsFetching: querySelectors.isPending(
        state.get('queries'),
        { queryKey: endpoints.getRedditUrl() },
      ),
    }),
    dispatch => ({
      ...bindActionCreators({
        getReddit,
      }, dispatch),
    }),
  ),
)(WrappedComponent);

export default RedditApiHOC;
