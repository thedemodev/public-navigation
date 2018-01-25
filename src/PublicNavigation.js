import React from 'react';
import { PropTypes as Types } from 'prop-types';

const PublicNavigation = ({ inverse }) => (
  <header className={`navbar${inverse ? ' navbar-inverse' : ''}`} />
);

PublicNavigation.propTypes = {
  inverse: Types.bool,
};

PublicNavigation.defaultProps = {
  inverse: false,
};

export default PublicNavigation;
