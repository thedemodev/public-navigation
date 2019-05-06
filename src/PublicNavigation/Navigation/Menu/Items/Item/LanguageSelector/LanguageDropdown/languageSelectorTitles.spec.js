import getTitleStringForLanguage from './languageSelectorTitles';

jest.mock('./titleStringMap', () => ({
  klingon: 'this is text',
  en: 'this is fallback text',
}));

describe('language selector title getter', () => {
  it('returns title for given language if it exists', () => {
    expect(getTitleStringForLanguage('klingon')).toBe('this is text');
  });

  it('returns title for en if no title exists for given language', () => {
    expect(getTitleStringForLanguage('random')).toBe('this is fallback text');
  });
});
