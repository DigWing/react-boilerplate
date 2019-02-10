import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { apiHOCs } from 'components';

import './style.scss';

const HomeScreen = ({ redditPosts }) => (
  <div className="home-layout">
    {console.log(redditPosts)}
    {
      redditPosts.map(post => (
        <div key={post.get('id')} style={{ paddingBottom: 50 }}>
          {post.get('title')}
        </div>
      ))
    }
  </div>
);

HomeScreen.propTypes = {
  redditPosts: PropTypes.object.isRequired,
};

export default compose(
  apiHOCs.RedditApiHOC(),

  lifecycle({
    componentDidMount() {
      this.props.getReddit({ redditName: 'reactjs' });
    },
  }),
)(HomeScreen);
