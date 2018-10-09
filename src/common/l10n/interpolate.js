import Locale from './Locale';

export default function interpolateLinkForLocale(link, locale) {
  const variables = [
    { string: '/:localePath', value: locale === Locale.GB ? '' : `/${locale}` },
    { string: ':locale', value: locale },
  ];

  return variables.reduce((result, { string, value }) => result.replace(string, value), link);
}
