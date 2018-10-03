import React, { Component } from 'react';
import Types from 'prop-types';

import './Navigation.less';

import MenuToggle from './common/MenuToggle';
import Logo from './Logo';
import ButtonItem from './ButtonItem';
import Menu from './Menu';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    const { isMenuOpen } = this.state;

    this.setState({
      isMenuOpen: !isMenuOpen,
    });
  };

  render() {
    const { isMenuOpen } = this.state;
    const { inverse, logoLink, items, buttonItem, className, ...otherProps } = this.props;

    return (
      <header
        className={`navbar${inverse ? ' navbar-inverse' : ''} navbar-static-top${className || ''}`}
        {...otherProps}
      >
        <div className="container">
          {items.length > 0 && (
            <MenuToggle
              isMenuOpen={isMenuOpen}
              onToggle={this.toggleMenu}
              className="navbar-toggle"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </MenuToggle>
          )}

          <Logo inverse={inverse} link={logoLink} />

          {buttonItem && (
            <ButtonItem text={buttonItem.text} link={buttonItem.link} inverse={inverse} />
          )}

          {items.length > 0 && (
            <Menu items={items} isOpen={isMenuOpen} onToggle={this.toggleMenu} />
          )}
        </div>
      </header>
    );
  }
}

Navigation.propTypes = {
  items: Types.arrayOf(Types.shape()),
  buttonItem: Types.shape(),
  inverse: Types.bool,
  logoLink: Types.string,
  className: Types.string,
};

Navigation.defaultProps = {
  items: [],
  buttonItem: null,
  inverse: true,
  logoLink: 'https://transferwise.com',
  className: '',
};

export default Navigation;
