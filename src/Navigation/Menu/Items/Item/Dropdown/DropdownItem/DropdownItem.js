import React from 'react';
import Types from 'prop-types';

const DropdownItem = ({ translationKey, link }) => (
  <li>
    <a href={link}>{translationKey}</a>
  </li>
);

DropdownItem.propTypes = {
  translationKey: Types.string.isRequired,
  link: Types.string.isRequired,
};

export default DropdownItem;
