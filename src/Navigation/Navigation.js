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
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  render() {
    return (
      <header className={`navbar${this.props.inverse ? ' navbar-inverse' : ''} navbar-static-top`}>
        <div className="container">
          {this.props.items.length > 0 && (
            <MenuToggle
              isMenuOpen={this.state.isMenuOpen}
              onToggle={this.toggleMenu}
              className="navbar-toggle"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </MenuToggle>
          )}

          <Logo inverse={this.props.inverse} link={this.props.logoLink} />

          {this.props.buttonItem && (
            <ButtonItem
              text={this.props.buttonItem.text}
              link={this.props.buttonItem.link}
              inverse={this.props.inverse}
            />
          )}

          {this.props.items.length > 0 && (
            <Menu
              items={this.props.items}
              isOpen={this.state.isMenuOpen}
              onToggle={this.toggleMenu}
            />
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
};

Navigation.defaultProps = {
  items: [],
  buttonItem: null,
  inverse: true,
  logoLink: 'https://transferwise.com',
};

export default Navigation;
