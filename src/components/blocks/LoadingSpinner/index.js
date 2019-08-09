import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './style.module.scss';

const cx = classNames.bind(styles);

const LoadingSpinner = ({
  fullSize,
  style,
  small,
  white,
  isPageLoader,
}) => {
  const spinnerInnerClass = cx({
    spinner__inner: true,
    spinner__inner_small: small,
    spinner__inner_white: white,
  });

  return (
    <div
      className={styles.spinner}
      style={{
        height: fullSize
          ? '100vh'
          : isPageLoader
            ? '70vh'
            : 'auto',
        ...style,
      }}
    >
      <div className={styles.spinner__container}>
        <div className={spinnerInnerClass} />
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  fullSize: PropTypes.bool,
  isPageLoader: PropTypes.bool,
  style: PropTypes.object,
  small: PropTypes.bool,
  white: PropTypes.bool,
};

LoadingSpinner.defaultProps = {
  fullSize: false,
  isPageLoader: false,
  style: {},
  small: false,
  white: false,
};

export default LoadingSpinner;
