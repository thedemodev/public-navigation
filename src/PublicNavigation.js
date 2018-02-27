import React from 'react';
import Types from 'prop-types';

import { items, buttonItem } from './items.json';
import Navigation from './Navigation';

const PublicNavigation = ({ inverse }) => (
  <Navigation items={items} buttonItem={buttonItem} inverse={inverse} />
);

PublicNavigation.propTypes = {
  inverse: Types.bool,
};

PublicNavigation.defaultProps = {
  inverse: true,
};

export default PublicNavigation;
