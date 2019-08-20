/* eslint-disable */
/**
 * Shallow equal function for useSelector react-redux hook,
 * which works correct with immutable store
 */
import { isImmutable } from 'immutable';

var hasOwn = Object.prototype.hasOwnProperty;

function isForStore(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  }

  if (isImmutable(x) && isImmutable(y)) {
    return x.equals(y);
  }

  return x !== x && y !== y;
}

export default function shallowEqual(objA, objB) {
  if (isForStore(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
