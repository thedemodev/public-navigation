import React from 'react';
import Types from 'prop-types';
import { Message } from 'retranslate';

const Badge = ({ translationKey }) => (
  <span className="badge badge-success">
    <Message>{translationKey}</Message>
  </span>
);

Badge.propTypes = {
  translationKey: Types.string.isRequired,
};

export default Badge;
