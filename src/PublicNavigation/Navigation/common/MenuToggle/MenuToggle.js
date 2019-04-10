import React from 'react';
import Types from 'prop-types';

import './MenuToggle.less';

const MenuToggle = ({ isMenuOpen, onToggle, children }) => (
  <button
    onClick={onToggle}
    className={`tw-public-navigation-menu__menu-toggle visible-xs visible-sm ${
      isMenuOpen ? '' : ' collapsed'
    }`}
    aria-controls="navbar"
    aria-expanded={isMenuOpen}
    type="button"
  >
    {children}
  </button>
);

MenuToggle.propTypes = {
  isMenuOpen: Types.bool.isRequired,
  onToggle: Types.func.isRequired,
  children: Types.node,
};

MenuToggle.defaultProps = {
  children: null,
};

export default MenuToggle;
