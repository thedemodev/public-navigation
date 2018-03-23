import React from 'react';
import Types from 'prop-types';

const DropdownItem = ({ text, link }) => (
  <li>
    <a href={link}>{text}</a>
  </li>
);

DropdownItem.propTypes = {
  text: Types.string.isRequired,
  link: Types.string.isRequired,
};

export default DropdownItem;
