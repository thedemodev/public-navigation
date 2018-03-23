/* eslint-disable global-require */

describe('Translate', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  function getTranslateForTranslations(translations) {
    jest.doMock('translations', () => translations, { virtual: true });
    return require('./translate').default;
  }

  it('translates from language if translations have language and value for key exists', () => {
    const translate = getTranslateForTranslations({
      'en-US': {
        'a.key': 'A value',
      },
    });

    expect(translate('a.key', 'en-US')).toBe('A value');
  });

  it('returns key if translations do not have language', () => {
    const translate = getTranslateForTranslations({
      'en-US': {
        'a.key': 'A value',
      },
    });

    expect(translate('a.key', 'es')).toBe('a.key');
  });

  it('returns key if value for key does not exist', () => {
    const translate = getTranslateForTranslations({
      'en-US': {
        'a.key': 'A value',
      },
    });

    expect(translate('another.key', 'en-US')).toBe('another.key');
  });
});
