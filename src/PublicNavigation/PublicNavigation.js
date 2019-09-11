import React from 'react';
import Types from 'prop-types';
import { Provider as TranslationProvider } from 'retranslate';

import { getItems, getButtonItems } from './items';
import Navigation from './Navigation';
import { Locale, LocaleValues } from '../common/l10n';
import { messages, LANGUAGES } from '../common/i18n';

export const defaultDisabledItems = ['money-tracker'];

const PublicNavigation = ({
  inverse,
  language,
  availableLanguages,
  onLanguageChange,
  locale,
  activePath,
  className,
  isUserLoggedIn,
  hasUserPreviouslyLoggedIn,
  hiddenItemIdList,
}) => (
  <TranslationProvider messages={messages} language={language}>
    <Navigation
      inverse={inverse}
      language={language}
      availableLanguages={availableLanguages}
      onLanguageChange={onLanguageChange}
      items={getItems(locale, isUserLoggedIn, hasUserPreviouslyLoggedIn, hiddenItemIdList)}
      activePath={activePath}
      data-tracking-id="public-navigation"
      buttonItems={getButtonItems(locale, isUserLoggedIn, hasUserPreviouslyLoggedIn)}
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
  hasUserPreviouslyLoggedIn: Types.bool,
  hiddenItemIdList: Types.arrayOf(Types.string),
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
  hasUserPreviouslyLoggedIn: false,
  hiddenItemIdList: defaultDisabledItems,
};

export default PublicNavigation;
