import Locale from './Locale';

export function interpolateLinkForLocale(link, locale) {
  const variables = [
    { string: '/:localePath', value: locale === Locale.GB ? '' : `/${locale}` },
    { string: ':locale', value: locale },
  ];

  return replaceLinkVariables(variables, link);
}

export function interpolateLinkForLocaleAndLanguage(link, locale, language) {
  const variables = [{ string: ':language', value: language }];
  const localeInterpolatedlink = interpolateLinkForLocale(link, locale);

  return replaceLinkVariables(variables, localeInterpolatedlink);
}

function replaceLinkVariables(variables, link) {
  return variables.reduce((result, { string, value }) => result.replace(string, value), link);
}
