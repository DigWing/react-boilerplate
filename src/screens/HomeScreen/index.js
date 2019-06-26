import React, { useEffect, memo } from 'react';
import { useReddit } from 'features';

import styles from './style.module.scss';

const HomeScreen = () => {
  const { redditPosts, getReddit } = useReddit();
  const getReactReddit = () => getReddit({ redditName: 'reactjs' });

  useEffect(() => {
    getReactReddit();
  }, []);

  const postStyle = { paddingBottom: 50 };

  return (
    <div className={styles.homeScreen}>
      <button type="button" onClick={getReactReddit}>Click me</button>
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

export default memo(HomeScreen);
