import React from 'react';
import Types from 'prop-types';

const ButtonItem = ({ text, link, inverse }) => (
  <div className="navbar-btn pull-xs-right">
    <a href={link} className={`btn ${inverse ? 'btn-image' : 'btn-primary'}`}>
      {text}
    </a>
  </div>
);

ButtonItem.propTypes = {
  text: Types.string.isRequired,
  link: Types.string.isRequired,
  inverse: Types.bool.isRequired,
};

export default ButtonItem;
