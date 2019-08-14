export const SUPPORTED_BORDERLESS_NO_CARD_LOCALES = ['ca', 'gr', 'sg'];

export const SUPPORTED_CARD_LOCALES = [
  'au',
  'bg',
  'ch',
  'de',
  'es',
  'fr',
  'gb',
  'hu',
  'ie',
  'it',
  'nl',
  'no',
  'nz',
  'pl',
  'pt',
  'ro',
  'us',
];

export const SUPPORTED_CARD_WAITLIST_LOCALES = [];

export const SUPPORTED_BUSINESS_LOCALES = [
  // without business card locales
  'br',
  'ca',
  'gr',
  'hk',
  'jp',
  'mx',
  'sg',
  'us',
];

export const SUPPORTED_BUSINESS_BORDERLESS_LOCALES = [
  'au',
  'bg',
  'ca',
  'ch',
  'de',
  'es',
  'fr',
  'gb',
  'hu',
  'ie',
  'it',
  'mx',
  'nl',
  'nz',
  'pl',
  'pt',
  'ro',
  'sg',
  'us',
];

export const SUPPORTED_BUSINESS_CARD_LOCALES = [
  'au',
  'bg',
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
];

export default function shouldShowItemForLocale(item, locale) {
  if (item.isBorderless) {
    return SUPPORTED_BORDERLESS_NO_CARD_LOCALES.indexOf(locale) > -1;
  }
  if (item.isCard) {
    return SUPPORTED_CARD_LOCALES.indexOf(locale) > -1;
  }
  if (item.isCardWaitlist) {
    return SUPPORTED_CARD_WAITLIST_LOCALES.indexOf(locale) > -1;
  }
  if (item.isBusinessCard) {
    return SUPPORTED_BUSINESS_CARD_LOCALES.indexOf(locale) > -1;
  }
  if (item.isBusiness) {
    return SUPPORTED_BUSINESS_LOCALES.indexOf(locale) > -1;
  }
  if (item.isBusinessBorderless) {
    return SUPPORTED_BUSINESS_BORDERLESS_LOCALES.indexOf(locale) > -1;
  }

  return true;
}
