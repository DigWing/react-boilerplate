const host = 'https://www.reddit.com/r';

export default {
  getRedditUrl: ({ redditName = 'reactjs' }) => `${host}/${redditName}.json`,
};
