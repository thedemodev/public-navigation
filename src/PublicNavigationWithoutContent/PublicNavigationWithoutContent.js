import React from 'react';
import { PropTypes as Types } from 'prop-types';

import Logo from './Logo';

const PublicNavigationWithoutContent = ({ inverse, logoLink }) => (
  <header className={`navbar${inverse ? ' navbar-inverse' : ''}`}>
    <div className="container">
      <Logo inverse={inverse} link={logoLink} />
    </div>
  </header>
);

PublicNavigationWithoutContent.propTypes = {
  inverse: Types.bool,
  logoLink: Types.string,
};

PublicNavigationWithoutContent.defaultProps = {
  inverse: false,
  logoLink: '',
};

export default PublicNavigationWithoutContent;
