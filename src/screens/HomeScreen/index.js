import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import apiHOCs from 'components/apiHOCs';

import 'assets/screens.scss';
import './style.scss';

const HomeScreen = ({ redditPosts }) => (
  <div>
    {
      redditPosts.map(post =>
        <div key={post.get('id')} style={{ marginTop: 50 }}>
          {post.get('title')}
        </div>
      ).toArray()
    }
  </div>
);

HomeScreen.propTypes = {
  redditPosts: PropTypes.any,
};

export default compose(
  apiHOCs.RedditApiHOC(),
)(HomeScreen);
