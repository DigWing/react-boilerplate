import { getEntities } from 'reducers';
import Immutable from 'immutable';

export default {
  getPosts: state => getEntities(state).get('posts', Immutable.Map()),
};
