import React from 'react';
import Types from 'prop-types';

import Items from './Items';
import MenuToggle from '../common/MenuToggle';
import './Menu.less';

const className = 'tw-public-navigation__menu';

const Menu = ({ items, isOpen, onToggle }) => (
  <nav
    id="navbar"
    className={`${className} collapse navbar-collapse navbar-collapse-with-panel${
      isOpen ? ' in' : ''
    }`}
  >
    <MenuToggle
      isMenuOpen={isOpen}
      onToggle={onToggle}
      className={`cover${isOpen ? '' : ' collapsed'}`}
    />

    <div className="navbar-collapse-panel">
      <Items items={items} />
    </div>

    <MenuToggle
      isMenuOpen={isOpen}
      onToggle={onToggle}
      className={`navbar-toggle close${isOpen ? '' : ' collapsed'}`}
    >
      &times;
    </MenuToggle>
  </nav>
);

Menu.propTypes = {
  items: Types.arrayOf(Types.shape()).isRequired,
  isOpen: Types.bool.isRequired,
  onToggle: Types.func.isRequired,
};

export default Menu;
