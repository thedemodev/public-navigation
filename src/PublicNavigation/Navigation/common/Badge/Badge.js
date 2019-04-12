import React from 'react';
import Types from 'prop-types';
import { Message } from 'retranslate';

const Badge = ({ translationKey, className }) => (
  <span className={`badge badge-success ${className}`}>
    <Message>{translationKey}</Message>
  </span>
);

Badge.propTypes = {
  translationKey: Types.string.isRequired,
  className: Types.string,
};

Badge.defaultProps = {
  className: '',
};

export default Badge;
