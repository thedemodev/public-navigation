const Locale = {
  AU: 'au',
  BG: 'bg',
  BR: 'br',
  CA: 'ca',
  CH: 'ch',
  DE: 'de',
  ES: 'es',
  FR: 'fr',
  GB: 'gb',
  GR: 'gr',
  HK: 'hk',
  HU: 'hu',
  IE: 'ie',
  IN: 'in',
  IT: 'it',
  JP: 'jp',
  MX: 'mx',
  NL: 'nl',
  NO: 'no',
  NZ: 'nz',
  PL: 'pl',
  PT: 'pt',
  RO: 'ro',
  RU: 'ru',
  SG: 'sg',
  TR: 'tr',
  US: 'us',
};

const LocaleValues = Object.keys(Locale).map(key => Locale[key]);

export default Locale;
export { LocaleValues };
