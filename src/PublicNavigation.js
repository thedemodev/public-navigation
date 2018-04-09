import React from 'react';
import Types from 'prop-types';

import { getItemsInLanguage, getButtonItemInLanguage } from './items';

import Navigation from './Navigation';

const PublicNavigation = ({ inverse, language }) => (
  <Navigation
    items={getItemsInLanguage(language)}
    buttonItem={getButtonItemInLanguage(language)}
    inverse={inverse}
    data-tracking-id="public-navigation"
  />
);

PublicNavigation.propTypes = {
  inverse: Types.bool,
  language: Types.string,
};

PublicNavigation.defaultProps = {
  inverse: true,
  language: 'en',
};

export default PublicNavigation;
