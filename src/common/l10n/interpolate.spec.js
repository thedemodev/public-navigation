import interpolate from './interpolate';

describe('Interpolate', () => {
  it('interpolates links with gb locale path no not have locale path', () => {
    const link = 'https://transferwise.com/:localePath/terms-of-use';
    const expected = 'https://transferwise.com/terms-of-use';

    expect(interpolate(link, 'gb')).toBe(expected);
  });

  it('interpolates links with other locale paths', () => {
    const link = 'https://transferwise.com/:localePath/terms-of-use';
    const expected = 'https://transferwise.com/de/terms-of-use';

    expect(interpolate(link, 'de')).toBe(expected);
  });

  it('interpolates links with locale', () => {
    const link = 'https://transferwise.com/:locale/terms-of-use';
    const expected = 'https://transferwise.com/gb/terms-of-use';

    expect(interpolate(link, 'gb')).toBe(expected);
  });
});
