import interpolateLinkForLocale from './interpolate';

describe('Interpolate', () => {
  it('interpolates link for locale', () => {
    expect(interpolateLinkForLocale('/:locale/link/', 'br')).toBe('/br/link/');
  });
});
