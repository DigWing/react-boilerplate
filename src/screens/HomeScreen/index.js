import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { compose, lifecycle } from 'recompose';
import { apiHOCs } from 'components';

import 'assets/screens.scss';
import './style.scss';

const HomeScreen = ({ redditPosts }) => (
  <div className="home-layout">
    {console.log(redditPosts)}
    {
      redditPosts.map(post => (
        <div key={post.get('id')} style={{ paddingBottom: 50 }}>
          {post.get('title')}
        </div>
      )).toArray()
    }
  </div>
);

HomeScreen.propTypes = {
  redditPosts: PropTypes.instanceOf(Immutable.List).isRequired,
};

export default compose(
  apiHOCs.RedditApiHOC(),

  lifecycle({
    componentDidMount() {
      this.props.getReddit({ redditName: 'reactjs' });
    },
  }),
)(HomeScreen);
