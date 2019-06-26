import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { endpoints } from 'consts';
import { querySelectors } from '@digitalwing.co/redux-query-immutable';
import { useDispatch, useSelector } from 'react-redux';
import { getReddit } from 'queries/reddit';
import { immutableShallowEqual } from 'helpers';

import { getRedditPosts } from './selectors';

const useReddit = () => {
  const redditState = useSelector(state => ({
    redditPosts: getRedditPosts(state, 'posts'),
    redditIsFetching: querySelectors.isPending(
      state.get('queries'),
      { queryKey: endpoints.getRedditUrl() },
    ),
  }), immutableShallowEqual);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    getReddit,
  }, dispatch),
  [dispatch]);

  return {
    ...redditState,
    ...actions,
  };
};

export default useReddit;
