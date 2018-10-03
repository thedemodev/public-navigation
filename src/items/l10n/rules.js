export const SUPPORTED_BORDERLESS_LOCALES = [
  'au',
  'ca',
  'de',
  'es',
  'fr',
  'gb',
  'gr',
  'hu',
  'ie',
  'it',
  'nl',
  'no',
  'pl',
  'pt',
  'ro',
  'sg',
  'us',
];

export const SUPPORTED_CARD_LOCALES = ['au', 'de', 'es', 'fr', 'gb', 'hu', 'it'];

export const SUPPORTED_CARD_WAITLIST_LOCALES = ['us'];

export const SUPPORTED_BUSINESS_LOCALES = [
  'au',
  'ca',
  'ch',
  'de',
  'es',
  'fr',
  'gb',
  'hk',
  'hu',
  'ie',
  'it',
  'jp',
  'nl',
  'nz',
  'pl',
  'pt',
  'ro',
  'sg',
  'us',
  'bg',
];

export const SUPPORTED_BUSINESS_BORDERLESS_LOCALES = [
  'au',
  'ca',
  'ch',
  'de',
  'es',
  'fr',
  'gb',
  'hu',
  'ie',
  'it',
  'nl',
  'nz',
  'pl',
  'pt',
  'ro',
  'us',
  'mx',
  'bg',
];

export default function shouldShowItemForLocale(item, locale) {
  if (item.isBorderless) {
    return SUPPORTED_BORDERLESS_LOCALES.indexOf(locale) > -1;
  }
  if (item.isCard) {
    return SUPPORTED_CARD_LOCALES.indexOf(locale) > -1;
  }
  if (item.isCardWaitlist) {
    return SUPPORTED_CARD_WAITLIST_LOCALES.indexOf(locale) > -1;
  }
  if (item.isBusiness) {
    return SUPPORTED_BUSINESS_LOCALES.indexOf(locale) > -1;
  }
  if (item.isBusinessBorderless) {
    return SUPPORTED_BUSINESS_BORDERLESS_LOCALES.indexOf(locale) > -1;
  }

  return true;
}
