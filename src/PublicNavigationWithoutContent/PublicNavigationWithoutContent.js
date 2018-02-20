import React from 'react';
import Types from 'prop-types';

import MenuToggle from './common/MenuToggle';
import Logo from './Logo';
import Menu from './Menu';

const PublicNavigationWithoutContent = ({ items, inverse, logoLink, isMenuOpen, onToggleMenu }) => (
  <header className={`navbar${inverse ? ' navbar-inverse' : ''}`}>
    <div className="container">
      <MenuToggle isMenuOpen={isMenuOpen} onToggle={onToggleMenu} className="navbar-toggle">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </MenuToggle>

      <Logo inverse={inverse} link={logoLink} />

      <Menu items={items} isOpen={isMenuOpen} onToggle={onToggleMenu} />
    </div>
  </header>
);

PublicNavigationWithoutContent.propTypes = {
  items: Types.arrayOf(Types.shape()).isRequired,
  inverse: Types.bool.isRequired,
  logoLink: Types.string.isRequired,
  isMenuOpen: Types.bool.isRequired,
  onToggleMenu: Types.func.isRequired,
};

export default PublicNavigationWithoutContent;
