import React from 'react';
import Types from 'prop-types';

import Logo from '../Logo';
import MenuToggle from '../common/MenuToggle';
import ButtonItem from '../ButtonItem';

import './Header.less';

const Header = ({ className, onToggle, isMenuOpen, inverse, logoLink, children, buttonItems }) => (
  <div className="tw-public-navigation-menu__header pull-md-left">
    <MenuToggle isMenuOpen={isMenuOpen} onToggle={onToggle}>
      {children}
    </MenuToggle>

    <Logo className={className} inverse={inverse} link={logoLink} isMenuOpen={isMenuOpen} />
    {buttonItems.length > 0 && (
      <div className="pull-right visible-xs visible-sm tw-public-navigation-menu__buttons">
        {buttonItems.map(item => (
          <ButtonItem {...item} inverse={inverse} key={item.translationKey} />
        ))}
      </div>
    )}
  </div>
);

Header.propTypes = {
  className: Types.string,
  onToggle: Types.func.isRequired,
  isMenuOpen: Types.bool.isRequired,
  inverse: Types.bool,
  logoLink: Types.string,
  children: Types.node,
  buttonItems: Types.arrayOf(Types.shape()),
};

Header.defaultProps = {
  className: '',
  inverse: false,
  logoLink: 'https://transferwise.com',
  children: null,
  buttonItems: [],
};

export default Header;
