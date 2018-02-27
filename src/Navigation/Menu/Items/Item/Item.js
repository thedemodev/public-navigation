import React from 'react';
import Types from 'prop-types';

const Item = ({ item: { link, translationKey } }) => (
  <li>
    <a href={link}>{translationKey}</a>
  </li>
);

Item.propTypes = {
  item: Types.shape({
    translationKey: Types.string.isRequired,
    link: Types.string.isRequired,
  }).isRequired,
};

export default Item;
