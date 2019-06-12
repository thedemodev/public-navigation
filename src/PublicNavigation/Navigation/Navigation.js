import React, { Component } from 'react';
import Types from 'prop-types';

import Header from './Header';
import Menu from './Menu';
import './Navigation.less';

class Navigation extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    const { isMenuOpen } = this.state;

    this.setState({
      isMenuOpen: !isMenuOpen,
    });
  };

  render() {
    const { isMenuOpen } = this.state;
    const {
      inverse,
      logoLink,
      items,
      className,
      language,
      availableLanguages,
      onLanguageChange,
      activePath,
      buttonItems,
      ...otherProps
    } = this.props;

    const allItems = [...items, ...buttonItems];

    return (
      <header
        className={`navbar${inverse ? ' navbar--inverse' : ''} navbar-static-top ${
          isMenuOpen ? 'navbar-open' : ''
        } ${className}`}
        {...otherProps}
      >
        <div className="container">
          <Header
            isMenuOpen={isMenuOpen}
            onToggle={this.toggleMenu}
            inverse={inverse}
            logoLink={logoLink}
            buttonItems={buttonItems}
          >
            <div>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </div>
          </Header>

          {allItems.length > 0 && (
            <Menu
              items={allItems}
              isOpen={isMenuOpen}
              onToggle={this.toggleMenu}
              inverse={inverse}
              link={logoLink}
              language={language}
              availableLanguages={availableLanguages}
              onLanguageChange={onLanguageChange}
              activePath={activePath}
            />
          )}
        </div>
      </header>
    );
  }
}

Navigation.propTypes = {
  items: Types.arrayOf(Types.shape()),
  buttonItems: Types.arrayOf(Types.shape()),
  inverse: Types.bool,
  logoLink: Types.string,
  className: Types.string,
  language: Types.string.isRequired,
  availableLanguages: Types.arrayOf(Types.shape({})),
  onLanguageChange: Types.func,
  activePath: Types.string,
};

Navigation.defaultProps = {
  items: [],
  buttonItems: [],
  inverse: true,
  logoLink: 'https://transferwise.com',
  className: '',
  availableLanguages: undefined,
  onLanguageChange: undefined,
  activePath: undefined,
};

export default Navigation;
