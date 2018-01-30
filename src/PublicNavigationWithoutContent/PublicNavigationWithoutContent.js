import React from 'react';
import { PropTypes as Types } from 'prop-types';

import Logo from './Logo';

const PublicNavigation = ({ inverse, logoLink }) => (
  <header className={`navbar${inverse ? ' navbar-inverse' : ''}`}>
    <div className="container">
      <Logo inverse={inverse} link={logoLink} />
    </div>
  </header>
);

PublicNavigation.propTypes = {
  inverse: Types.bool,
  logoLink: Types.string,
};

PublicNavigation.defaultProps = {
  inverse: false,
  logoLink: '',
};

export default PublicNavigation;
