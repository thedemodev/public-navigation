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

export default function shouldShowItemForLocale(item, locale) {
  if (item.isBorderless) {
    return SUPPORTED_BORDERLESS_LOCALES.indexOf(locale) > -1;
  } else if (item.isCard) {
    return SUPPORTED_CARD_LOCALES.indexOf(locale) > -1;
  } else if (item.isCardWaitlist) {
    return SUPPORTED_CARD_WAITLIST_LOCALES.indexOf(locale) > -1;
  }

  return true;
}
