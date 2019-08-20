/*
* Функция, которая возвращает query url params в корректном виде
*
* @param {object} body - Объект с параметрами, которые нужно преобразовать в нужный вид
*
* @returns {string} Число, сокращенное до указанного количества знаков после запятой
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
