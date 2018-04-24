import React from 'react';
import Types from 'prop-types';

import { getItems, getButtonItem } from './items';

import Navigation from './Navigation';

const PublicNavigation = ({ inverse, language, locale }) => (
  <Navigation
    items={getItems(language, locale)}
    buttonItem={getButtonItem(language, locale)}
    inverse={inverse}
    data-tracking-id="public-navigation"
  />
);

PublicNavigation.propTypes = {
  inverse: Types.bool,
  language: Types.string,
  locale: Types.string,
};

PublicNavigation.defaultProps = {
  inverse: true,
  language: 'en',
  locale: 'gb',
};

export default PublicNavigation;
