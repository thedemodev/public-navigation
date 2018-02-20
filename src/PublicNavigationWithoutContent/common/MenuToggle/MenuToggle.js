import React from 'react';
import Types from 'prop-types';

const MenuToggle = ({ isMenuOpen, onToggle, className, children }) => (
  <button
    onClick={onToggle}
    className={className}
    aria-controls="navbar"
    aria-expanded={isMenuOpen}
  >
    {children}
  </button>
);

MenuToggle.propTypes = {
  isMenuOpen: Types.bool.isRequired,
  onToggle: Types.func.isRequired,
  className: Types.string,
  children: Types.node,
};

MenuToggle.defaultProps = {
  className: '',
  children: null,
};

export default MenuToggle;
