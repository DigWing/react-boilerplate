import React, { useEffect, memo } from 'react';
import { useReddit } from 'features/reddit';

import styles from './style.module.scss';

const HomeScreen = () => {
  const { redditPosts, getReddit } = useReddit();
  const getReactReddit = () => getReddit({ redditName: 'reactjs' });

  useEffect(() => {
    getReactReddit();
  }, []);

  const postStyle = {
    padding: '15px 0',
  };

  return (
    <div className={styles.homeScreen}>
      {console.log('render')}
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

// memo here is useless, but don't forget about it
export default memo(HomeScreen);
