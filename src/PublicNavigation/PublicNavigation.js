import React from 'react';
import Types from 'prop-types';
import { Provider as TranslationProvider } from 'retranslate';

import { getItems, getButtonItems } from './items';
import Navigation from './Navigation';
import { Locale, LocaleValues } from '../common/l10n';
import { messages, LANGUAGES } from '../common/i18n';

const PublicNavigation = ({
  inverse,
  language,
  availableLanguages,
  onLanguageChange,
  locale,
  activePath,
  className,
  isUserLoggedIn,
}) => (
  <TranslationProvider messages={messages} language={language}>
    <Navigation
      inverse={inverse}
      language={language}
      availableLanguages={availableLanguages}
      onLanguageChange={onLanguageChange}
      items={getItems(locale, isUserLoggedIn)}
      activePath={activePath}
      data-tracking-id="public-navigation"
      buttonItems={getButtonItems(locale, isUserLoggedIn)}
      className={className}
    />
  </TranslationProvider>
);

PublicNavigation.propTypes = {
  inverse: Types.bool,
  language: Types.string,
  locale: Types.oneOf(LocaleValues),
  availableLanguages: Types.arrayOf(
    Types.shape({
      value: Types.string.isRequired,
      label: Types.string.isRequired,
    }),
  ),
  onLanguageChange: Types.func,
  activePath: Types.string,
  className: Types.string,
  isUserLoggedIn: Types.bool,
};

PublicNavigation.defaultProps = {
  inverse: true,
  language: LANGUAGES.indexOf('en') > -1 ? 'en' : LANGUAGES[0],
  locale: Locale.GB,
  availableLanguages: undefined,
  onLanguageChange: undefined,
  activePath: undefined,
  className: '',
  isUserLoggedIn: false,
};

export default PublicNavigation;
