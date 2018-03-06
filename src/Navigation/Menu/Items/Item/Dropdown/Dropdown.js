import React from 'react';
import Types from 'prop-types';

import DropdownItem from './DropdownItem';

const Dropdown = ({ items }) => (
  <ul>{items.map(item => <DropdownItem {...item} key={item.translationKey} />)}</ul>
);

Dropdown.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      translationKey: Types.string.isRequired,
    }),
  ).isRequired,
};

export default Dropdown;
