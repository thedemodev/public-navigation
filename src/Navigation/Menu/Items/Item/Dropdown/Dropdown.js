import React from 'react';
import Types from 'prop-types';

import DropdownItem from './DropdownItem';
import './Dropdown.less';

const Dropdown = ({ items }) => (
  <ul className="dropdown-menu">{items.map(item => <DropdownItem {...item} key={item.text} />)}</ul>
);

Dropdown.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      text: Types.string.isRequired,
    }),
  ).isRequired,
};

export default Dropdown;
