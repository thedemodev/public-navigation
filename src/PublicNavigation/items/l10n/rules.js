export const SUPPORTED_BORDERLESS_NO_CARD_LOCALES = [
  'ca',
  'gr',
  'ie',
  'nl',
  'no',
  'nz',
  'pl',
  'pt',
  'ro',
  'sg',
];

export const SUPPORTED_CARD_LOCALES = ['au', 'de', 'es', 'fr', 'gb', 'hu', 'it', 'us'];

export const SUPPORTED_CARD_WAITLIST_LOCALES = ['us'];

export const SUPPORTED_BUSINESS_LOCALES = [
  'au',
  'bg',
  'br',
  'ca',
  'ch',
  'de',
  'es',
  'fr',
  'gb',
  'gr',
  'hk',
  'hu',
  'ie',
  'it',
  'jp',
  'mx',
  'nl',
  'nz',
  'pl',
  'pt',
  'ro',
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
  if (item.isBusiness) {
    return SUPPORTED_BUSINESS_LOCALES.indexOf(locale) > -1;
  }
  if (item.isBusinessBorderless) {
    return SUPPORTED_BUSINESS_BORDERLESS_LOCALES.indexOf(locale) > -1;
  }

  return true;
}
