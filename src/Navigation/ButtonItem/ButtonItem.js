import React from 'react';
import Types from 'prop-types';

const ButtonItem = ({ item: { link, translationKey }, inverse }) => (
  <div className="navbar-btn pull-xs-right">
    <a href={link} className={`btn ${inverse ? 'btn-image' : 'btn-primary'}`}>
      {translationKey}
    </a>
  </div>
);

ButtonItem.propTypes = {
  item: Types.shape({
    translationKey: Types.string.isRequired,
    link: Types.string.isRequired,
  }).isRequired,
  inverse: Types.bool.isRequired,
};

export default ButtonItem;
