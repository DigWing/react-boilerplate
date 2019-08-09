import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import LoadingSpinner from 'components/blocks/LoadingSpinner';

import styles from './style.module.scss';

const cx = classNames.bind(styles);

const BasicButton = ({
  onClick,
  text,
  style,
  isDisabled,
  isLoading,
  type,
}) => {
  const classname = cx({
    basicButton: true,
    [`basicButton_${type}`]: type,
  });

  return (
    <button
      className={classname}
      disabled={isDisabled ? 'disabled' : ''}
      onClick={onClick}
      type="button"
      style={style}
    >
      {
        isLoading
          ? (
            <LoadingSpinner
              small
            />
          ) : text
      }
    </button>
  );
};

BasicButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.any,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
};

BasicButton.defaultProps = {
  style: {},
  isDisabled: false,
  isLoading: false,
  type: '',
};

export default BasicButton;
