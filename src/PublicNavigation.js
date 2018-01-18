import React from 'react';
import { PropTypes as Types } from 'prop-types';

const PublicNavigation = ({ items }) => (
  <div>
    Passed:
    <pre>{JSON.stringify(items, 'utf-8', 2)}</pre>
  </div>
);

PublicNavigation.propTypes = {
  items: Types.arrayOf().isRequired,
};

export default PublicNavigation;
