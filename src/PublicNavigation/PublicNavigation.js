import React from 'react';
import Types from 'prop-types';
import { Provider as TranslationProvider } from 'retranslate';

import { getItems, getButtonItem } from './items';
import Navigation from './Navigation';
import Locale, { LocaleValues } from '../Locale';
import { messages, LANGUAGES } from '../i18n';

const PublicNavigation = ({ inverse, language, locale }) => (
  <TranslationProvider messages={messages} language={language}>
    <Navigation
      items={getItems(locale)}
      buttonItem={getButtonItem(locale)}
      inverse={inverse}
      data-tracking-id="public-navigation"
    />
  </TranslationProvider>
);

PublicNavigation.propTypes = {
  inverse: Types.bool,
  language: Types.string,
  locale: Types.oneOf(LocaleValues),
};

PublicNavigation.defaultProps = {
  inverse: true,
  language: LANGUAGES.indexOf('en') > -1 ? 'en' : LANGUAGES[0],
  locale: Locale.GB,
};

export default PublicNavigation;
