import React, { memo, useEffect } from 'react';
import { useReddit } from 'hooks/api';
import BasicButton from 'components/buttons/BasicButton';

import styles from './style.module.scss';

const HomeScreen = () => {
  const { redditPosts, getReddit, redditIsFetching } = useReddit();
  const getReactReddit = () => getReddit({ redditName: 'reactjs' });

  useEffect(() => {
    getReactReddit();
  }, []);

  const postStyle = {
    padding: '15px 0',
  };

  const buttonStyle = {
    maxWidth: 100,
  };

  return (
    <div className={styles.homeScreen}>
      {console.log('render')}
      <BasicButton
        text="Click me"
        onClick={getReactReddit}
        style={buttonStyle}
        isLoading={redditIsFetching}
      />
      {
        redditPosts.map(post => (
          <div key={post.get('id')} style={postStyle}>
            {post.get('title')}
          </div>
        ))
      }
    </div>
  );
};

// memo here is useless, but don't forget about it
export default memo(HomeScreen);
