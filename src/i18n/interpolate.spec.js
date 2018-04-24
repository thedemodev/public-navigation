import interpolateLinkForLocale from './interpolate';

describe('Interpolate', () => {
  it('interpolates link', () => {
    expect(interpolateLinkForLocale('/{{localePath}}/link/', 'en')).toBe('/gb/link/');
  });

  it('interpolates link for en locale', () => {
    expect(interpolateLinkForLocale('/{{localePath}}/link/', 'en-US')).toBe('/gb/link/');
  });

  it('interpolates link for other locales', () => {
    expect(interpolateLinkForLocale('/{{localePath}}/link/', 'ee')).toBe('/ee/link/');
  });
});
