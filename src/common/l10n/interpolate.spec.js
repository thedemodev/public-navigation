import { interpolateLinkForLocale, interpolateLinkForLocaleAndLanguage } from './interpolate';

describe('Interpolate', () => {
  describe('interpolateLinkForLocale', () => {
    it('interpolates links with gb locale path that do not have locale', () => {
      const link = 'https://transferwise.com/:localePath/terms-of-use';
      const expected = 'https://transferwise.com/terms-of-use';

      expect(interpolateLinkForLocale(link, 'gb')).toBe(expected);
    });

    it('interpolates links with other locale paths', () => {
      const link = 'https://transferwise.com/:localePath/terms-of-use';
      const expected = 'https://transferwise.com/de/terms-of-use';

      expect(interpolateLinkForLocale(link, 'de')).toBe(expected);
    });

    it('interpolates links with locale', () => {
      const link = 'https://transferwise.com/:locale/terms-of-use';
      const expected = 'https://transferwise.com/gb/terms-of-use';

      expect(interpolateLinkForLocale(link, 'gb')).toBe(expected);
    });
  });

  describe('interpolateLinkForLocaleAndLanguage', () => {
    it('interpolates links with gb locale path that do not have locale', () => {
      const link = 'https://transferwise.com/:localePath/terms-of-use';
      const expected = 'https://transferwise.com/terms-of-use';

      expect(interpolateLinkForLocaleAndLanguage(link, 'gb', 'de')).toBe(expected);
    });

    it('interpolates links with other locale paths', () => {
      const link = 'https://transferwise.com/:localePath/terms-of-use';
      const expected = 'https://transferwise.com/de/terms-of-use';

      expect(interpolateLinkForLocaleAndLanguage(link, 'de', 'de')).toBe(expected);
    });

    it('interpolates links with locale', () => {
      const link = 'https://transferwise.com/:locale/terms-of-use';
      const expected = 'https://transferwise.com/gb/terms-of-use';

      expect(interpolateLinkForLocaleAndLanguage(link, 'gb', 'de')).toBe(expected);
    });

    it('interpolates links with language', () => {
      const link = 'https://transferwise.com/:language/terms-of-use';
      const expected = 'https://transferwise.com/de/terms-of-use';

      expect(interpolateLinkForLocaleAndLanguage(link, 'gb', 'de')).toBe(expected);
    });
  });
});
