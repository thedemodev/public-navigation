import React, { Component } from 'react';
import Types from 'prop-types';

import items from './items.json';
import PublicNavigationWithoutContent from './PublicNavigationWithoutContent';

class PublicNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  render() {
    return (
      <PublicNavigationWithoutContent
        {...this.props}
        inverse={this.props.inverse}
        logoLink={this.props.logoLink}
        items={items}
        isMenuOpen={this.state.isMenuOpen}
        onToggleMenu={() =>
          this.setState({
            isMenuOpen: !this.state.isMenuOpen,
          })
        }
      />
    );
  }
}

PublicNavigation.propTypes = {
  inverse: Types.bool,
  logoLink: Types.string,
};

PublicNavigation.defaultProps = {
  inverse: true,
  logoLink: 'https://transferwise.com',
};

export default PublicNavigation;
