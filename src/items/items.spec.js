import { getItems, getButtonItem } from './items';
import { translate } from '../i18n';
import { shouldShowItemForLocale, interpolateLinkForLocale } from './l10n';

jest.mock('./itemObjects', () => ({
  items: [
    { translationKey: 'a.key', link: '#a-link' },
    { isCard: true, translationKey: 'card.key', link: '#card-link' },
    {
      translationKey: 'another.key',
      items: [
        { translationKey: 'a.sub-item.key', link: '#a-subitem-link' },
        {
          translationKey: 'another.sub-item.key',
          link: '#another-subitem-link',
          badge: { translationKey: 'badge.key' },
        },
      ],
    },
  ],
  buttonItem: { translationKey: 'button.key', link: '#button-link' },
}));

jest.mock('../i18n', () => ({ translate: jest.fn() }));
jest.mock('./l10n', () => ({
  shouldShowItemForLocale: jest.fn(),
  interpolateLinkForLocale: jest.fn(),
}));

describe('Items', () => {
  beforeEach(() => {
    shouldShowItemForLocale.mockReturnValue(true);
    interpolateLinkForLocale.mockImplementation(link => link);
    translate.mockImplementation(key => key);
  });

  afterEach(jest.resetAllMocks);

  it('gets items without unsupported items', () => {
    shouldShowItemForLocale.mockImplementation(item => !item.isCard);

    const items = getItems('lang', 'loc');

    expect(items).toEqual([
      { text: 'a.key', link: '#a-link' },
      {
        text: 'another.key',
        items: [
          { text: 'a.sub-item.key', link: '#a-subitem-link' },
          { text: 'another.sub-item.key', link: '#another-subitem-link', badge: 'badge.key' },
        ],
      },
    ]);
  });

  it('gets translated items', () => {
    translate.mockImplementation((key, language) => `${key} in ${language}`);

    const items = getItems('lang', 'loc');

    expect(items).toEqual([
      { text: 'a.key in lang', link: '#a-link' },
      { isCard: true, text: 'card.key in lang', link: '#card-link' },
      {
        text: 'another.key in lang',
        items: [
          { text: 'a.sub-item.key in lang', link: '#a-subitem-link' },
          {
            text: 'another.sub-item.key in lang',
            link: '#another-subitem-link',
            badge: 'badge.key in lang',
          },
        ],
      },
    ]);
  });

  it('gets items with interpolated links', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);

    const items = getItems('lang', 'loc');

    expect(items).toEqual([
      { text: 'a.key', link: '#a-link for loc' },
      { isCard: true, text: 'card.key', link: '#card-link for loc' },
      {
        text: 'another.key',
        items: [
          { text: 'a.sub-item.key', link: '#a-subitem-link for loc' },
          {
            text: 'another.sub-item.key',
            link: '#another-subitem-link for loc',
            badge: 'badge.key',
          },
        ],
      },
    ]);
  });

  it('gets translated button item', () => {
    translate.mockImplementation((key, language) => `${key} in ${language}`);

    const buttonItem = getButtonItem('lang', 'loc');

    expect(buttonItem).toEqual({ text: 'button.key in lang', link: '#button-link' });
  });

  it('gets button item with interpolated link', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);

    const buttonItem = getButtonItem('lang', 'loc');

    expect(buttonItem).toEqual({ text: 'button.key', link: '#button-link for loc' });
  });
});
