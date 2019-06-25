import shouldShowItemForLocale, {
  SUPPORTED_BORDERLESS_NO_CARD_LOCALES,
  SUPPORTED_CARD_LOCALES,
  SUPPORTED_CARD_WAITLIST_LOCALES,
  SUPPORTED_BUSINESS_LOCALES,
  SUPPORTED_BUSINESS_BORDERLESS_LOCALES,
} from './rules';

describe('Localization rules', () => {
  it('does not show item if item is borderless and locale does not support it', () => {
    const item = { isBorderless: true };
    const locale = 'zzzzz';

    expect(shouldShowItemForLocale(item, locale)).toBe(false);
  });

  it('shows item if item is borderless and locale supports it', () => {
    const item = { isBorderless: true };
    const locale = SUPPORTED_BORDERLESS_NO_CARD_LOCALES[0];

    expect(shouldShowItemForLocale(item, locale)).toBe(true);
  });

  it('does not show item if item is card and locale does not support it', () => {
    const item = { isCard: true };
    const locale = 'zzzzz';

    expect(shouldShowItemForLocale(item, locale)).toBe(false);
  });

  it('shows item if item is card and locale supports it', () => {
    const item = { isCard: true };
    const locale = SUPPORTED_CARD_LOCALES[0];

    expect(shouldShowItemForLocale(item, locale)).toBe(true);
  });

  it('does not show item if item is card coming soon and locale does not support it', () => {
    const item = { isCardWaitlist: true };
    const locale = 'zzzzz';

    expect(shouldShowItemForLocale(item, locale)).toBe(false);
  });

  it('shows item if item is card coming soon and locale supports it', () => {
    const item = { isCardWaitlist: true };

    if (SUPPORTED_CARD_WAITLIST_LOCALES.length === 0) {
      expect(shouldShowItemForLocale(item, 'anything')).toBe(false);
    } else {
      const locale = SUPPORTED_CARD_WAITLIST_LOCALES[0];
      expect(shouldShowItemForLocale(item, locale)).toBe(true);
    }
  });

  it('does not show item if item is business and locale does not support it', () => {
    const item = { isBusiness: true };
    const locale = 'zzzzz';

    expect(shouldShowItemForLocale(item, locale)).toBe(false);
  });

  it('shows item if item is business and locale supports it', () => {
    const item = { isBusiness: true };
    const locale = SUPPORTED_BUSINESS_LOCALES[0];

    expect(shouldShowItemForLocale(item, locale)).toBe(true);
  });

  it('does not show item if item is business borderless and locale does not support it', () => {
    const item = { isBusinessBorderless: true };
    const locale = 'zzzzz';

    expect(shouldShowItemForLocale(item, locale)).toBe(false);
  });

  it('does not show item if item is business card and locale does not support it', () => {
    const item = { isBusinessCard: true };
    const locale = 'zzzzz';

    expect(shouldShowItemForLocale(item, locale)).toBe(false);
  });

  it('shows item if item is business borderless and locale supports it', () => {
    const item = { isBusinessBorderless: true };
    const locale = SUPPORTED_BUSINESS_BORDERLESS_LOCALES[0];

    expect(shouldShowItemForLocale(item, locale)).toBe(true);
  });

  it('shows item if item is not borderless, card, card wishlist, business, nor business borderless', () => {
    const item = {};
    const locale = 'zzzzz';

    expect(shouldShowItemForLocale(item, locale)).toBe(true);
  });
});
