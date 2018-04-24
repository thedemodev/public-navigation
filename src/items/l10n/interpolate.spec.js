import interpolateLinkForLocale from './interpolate';

describe('Interpolate', () => {
  it('interpolates link for locale', () => {
    expect(interpolateLinkForLocale('/{{localePath}}/link/', 'br')).toBe('/br/link/');
  });
});
