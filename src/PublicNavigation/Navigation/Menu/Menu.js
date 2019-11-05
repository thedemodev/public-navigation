import React from 'react';
import Types from 'prop-types';

import Items from './Items';
import Header from '../Header';
import './Menu.less';

const className = 'tw-public-navigation-menu';

const Menu = ({
  items,
  isOpen,
  onToggle,
  inverse,
  logoLink,
  language,
  availableLanguages,
  onLanguageChange,
  activePath,
  submenuItems,
}) => (
  <nav
    id="navbar"
    className={`${className} navbar-collapse navbar-collapse-with-panel collapse${
      isOpen ? ' in' : ''
    }`}
  >
    <div className={`${className}__sidebar navbar-collapse-panel`}>
      <Header
        className="hidden-md hidden-lg hidden-xl"
        inverse={inverse}
        isMenuOpen={isOpen}
        logoLink={logoLink}
        onToggle={onToggle}
      >
        &times;
      </Header>
      {!!submenuItems.length && (
        <Items
          items={submenuItems}
          inverse={inverse}
          language={language}
          availableLanguages={availableLanguages}
          onLanguageChange={onLanguageChange}
          activePath={activePath}
          isSubMenu
          data-testid="submenu"
        />
      )}
      <Items
        items={items}
        inverse={inverse}
        language={language}
        availableLanguages={availableLanguages}
        onLanguageChange={onLanguageChange}
        activePath={activePath}
        data-testid="mainmenu"
      />
    </div>
  </nav>
);

Menu.propTypes = {
  items: Types.arrayOf(Types.shape()).isRequired,
  isOpen: Types.bool.isRequired,
  onToggle: Types.func.isRequired,
  inverse: Types.bool,
  logoLink: Types.string,
  language: Types.string.isRequired,
  availableLanguages: Types.arrayOf(Types.shape({})),
  onLanguageChange: Types.func,
  activePath: Types.string,
  submenuItems: Types.arrayOf(Types.shape({})),
};

Menu.defaultProps = {
  inverse: true,
  logoLink: 'https://transferwise.com',
  availableLanguages: undefined,
  onLanguageChange: undefined,
  activePath: undefined,
  submenuItems: [],
};

export default Menu;
