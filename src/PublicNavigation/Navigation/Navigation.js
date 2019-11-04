import React, { Component } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

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
      subnavItems,
      ...otherProps
    } = this.props;

    const allItems = [...items, ...buttonItems];

    return (
      <header
        className={classNames(
          'navbar',
          'navbar-static-top',
          {
            /**
             * navbar--inverse vs navbar-inverse
             *
             * The public-navigation React component uses the --inverse syntax
             * to add its styles. Bootstrap includes support for an inverse menu,
             * but it uses the single-dash -inverse syntax. The -inverse styles
             * were not required to render the top-level nav, but they are necessary
             * for the subnav to render correctly.
             */
            'navbar--inverse navbar-inverse': inverse,
            'navbar-open': isMenuOpen,
            subnav: subnavItems.length,
          },
          className,
        )}
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
              subnavItems={subnavItems}
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
  subnavItems: Types.arrayOf(Types.shape({})),
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
  subnavItems: [],
};

export default Navigation;
