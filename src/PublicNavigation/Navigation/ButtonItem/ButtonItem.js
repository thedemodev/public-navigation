import React from 'react';
import Types from 'prop-types';
import { Message } from 'retranslate';

const ButtonItem = ({ translationKey, link, inverse }) => (
  <div className="navbar-btn pull-xs-right">
    <a href={link} className={`btn ${inverse ? 'btn-image' : 'btn-primary'}`}>
      <Message>{translationKey}</Message>
    </a>
  </div>
);

ButtonItem.propTypes = {
  translationKey: Types.string.isRequired,
  link: Types.string.isRequired,
  inverse: Types.bool.isRequired,
};

export default ButtonItem;
