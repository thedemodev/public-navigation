import React from 'react';
import Types from 'prop-types';

const Item = ({ translationKey, link }) => (
  <li>
    <a href={link}>{translationKey}</a>
  </li>
);

Item.propTypes = {
  translationKey: Types.string.isRequired,
  link: Types.string.isRequired,
};

export default Item;
