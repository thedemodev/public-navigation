import React from 'react';
import Types from 'prop-types';

const ButtonItem = ({ link, translationKey, inverse }) => (
  <div className="navbar-btn pull-xs-right">
    <a href={link} className={`btn ${inverse ? 'btn-image' : 'btn-primary'}`}>
      {translationKey}
    </a>
  </div>
);

ButtonItem.propTypes = {
  translationKey: Types.string.isRequired,
  link: Types.string.isRequired,
  inverse: Types.bool.isRequired,
};

export default ButtonItem;
