import shouldShowItemForLocale, {
  SUPPORTED_BORDERLESS_LOCALES,
  SUPPORTED_CARD_LOCALES,
} from './rules';

fdescribe('Localization rules', () => {
  it('does not show item if item is borderless and locale does not support it', () => {
    const item = { isBorderless: true };
    const locale = 'zzzzz';

    expect(shouldShowItemForLocale(item, locale)).toBe(false);
  });

  it('shows item if item is borderless and locale supports it', () => {
    const item = { isBorderless: true };
    const locale = SUPPORTED_BORDERLESS_LOCALES[0];

    expect(shouldShowItemForLocale(item, locale)).toBe(true);
  });

  it('does not show item if item is card and locale does not support it', () => {
    const item = { isCard: true };
    const locale = 'zzzzz';

    expect(shouldShowItemForLocale(item, locale)).toBe(false);
  });

  it('shows item if item is card and locale supports it', () => {
    const item = { isBorderless: true };
    const locale = SUPPORTED_CARD_LOCALES[0];

    expect(shouldShowItemForLocale(item, locale)).toBe(true);
  });

  it('shows item if item is neither borderless or card', () => {
    const item = {};
    const locale = 'zzzzz';

    expect(shouldShowItemForLocale(item, locale)).toBe(true);
  });
});
