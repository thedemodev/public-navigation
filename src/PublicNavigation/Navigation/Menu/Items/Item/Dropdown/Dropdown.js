import React from 'react';
import Types from 'prop-types';

import './Dropdown.less';

const Dropdown = ({ className, children }) => (
  <ul className={`dropdown-menu tw-public-navigation-menu__dropdown-menu ${className}`}>
    {children}
  </ul>
);
Dropdown.propTypes = {
  className: Types.string,
  children: Types.node.isRequired,
};

Dropdown.defaultProps = {
  className: '',
};

export default Dropdown;
