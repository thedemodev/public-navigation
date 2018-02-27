import React from 'react';
import Types from 'prop-types';

import Items from './Items';
import MenuToggle from '../common/MenuToggle';
import './Menu.less';

const className = 'tw-public-navigation-menu';

const Menu = ({ items, isOpen, onToggle }) => (
  <nav
    id="navbar"
    className={`${className} navbar-collapse navbar-collapse-with-panel collapse${
      isOpen ? ' in' : ''
    }`}
  >
    <MenuToggle
      isMenuOpen={isOpen}
      onToggle={onToggle}
      className={`${className}__overlay cover${isOpen ? '' : ' collapsed'}`}
    />

    <div className={`${className}__sidebar navbar-collapse-panel`}>
      <Items items={items} />

      <MenuToggle
        isMenuOpen={isOpen}
        onToggle={onToggle}
        className={`${className}__close-button navbar-toggle close${isOpen ? '' : ' collapsed'}`}
      >
        &times;
      </MenuToggle>
    </div>
  </nav>
);

Menu.propTypes = {
  items: Types.arrayOf(Types.shape()).isRequired,
  isOpen: Types.bool.isRequired,
  onToggle: Types.func.isRequired,
};

export default Menu;
