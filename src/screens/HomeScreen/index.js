import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import apiHOCs from 'components/apiHOCs';

import 'assets/screens.scss';
import './style.scss';

const HomeScreen = ({ redditPosts }) => (
  <div>
    {console.log(redditPosts)}
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

  lifecycle({
    componentDidMount() {
      this.props.getReddit({ redditName: 'reactjs' });
    }
  })
)(HomeScreen);
