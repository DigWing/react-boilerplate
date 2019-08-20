/*
* Function which transforms object in string with url query params
*
* @param {object} body - Object with params, which need to be transformed
*
* @returns {string} - String with query params
 */

export default (body) => {
  if (typeof body !== 'object') {
    return '';
  }

  return Object.keys(body)
    .reduce((accumulator, item) => {
      if (body[item] === undefined) {
        return accumulator;
      }

      return `${accumulator}${accumulator === '' ? '?' : '&'}${item}=${body[item]}`;
    }, '');
};
