const host = 'https://www.reddit.com/r';

export default {
  getRedditUrl: reddit => `${host}/${reddit}.json`,
};
