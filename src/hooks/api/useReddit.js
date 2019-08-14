import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { endpoints } from 'consts';
import { querySelectors } from '@digitalwing.co/redux-query-immutable';
import { useDispatch } from 'react-redux';
import { getReddit } from 'queries/reddit';
import { getRedditPosts } from 'selectors';
import useISESelector from '../useISESelector';

const useReddit = () => {
  const redditState = useISESelector(state => ({
    redditPosts: getRedditPosts(state, 'posts'),
    redditIsFetching: querySelectors.isPending(
      state.get('queries'),
      { queryKey: endpoints.getRedditUrl() },
    ),
  }));

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
