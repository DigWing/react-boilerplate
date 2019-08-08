import { useSelector } from 'react-redux';
import { immutableShallowEqual } from 'helpers';

// useImmutableShallowEqualSelector
const useISESelector = selector =>
  useSelector(selector, immutableShallowEqual);

export default useISESelector;
