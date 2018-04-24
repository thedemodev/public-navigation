import { getItemsInLanguage, getButtonItemInLanguage } from './items';
import { interpolateLinkForLocale, translate } from '../i18n';

jest.mock('./itemObjects', () => ({
  items: [
    { translationKey: 'a.key', link: '#a-link' },
    { translationKey: 'borderless.key', link: '#borderless-link', isBorderless: true },
    { translationKey: 'card.key', link: '#card-link', isCard: true },
    {
      translationKey: 'another.key',
      items: [
        { translationKey: 'a.sub-item.key', link: '#a-subitem-link' },
        { translationKey: 'another.sub-item.key', link: '#another-subitem-link' },
      ],
    },
  ],
  buttonItem: { translationKey: 'button.key', link: '#button-link' },
  SUPPORTED_BORDERLESS_LOCALES: ['de', 'us'],
  SUPPORTED_CARD_LOCALES: ['de'],
}));

jest.mock('../i18n', () => ({
  interpolateLinkForLocale: jest.fn(),
  translate: jest.fn(),
}));

describe('Items', () => {
  beforeEach(() => {
    interpolateLinkForLocale.mockImplementation((link, language) => `${link} in ${language}`);
    translate.mockImplementation((key, language) => `${key} in ${language}`);
  });

  afterEach(jest.resetAllMocks);

  it('gets items in language', () => {
    expect(getItemsInLanguage('nz')).toEqual([
      { text: 'a.key in nz', link: '#a-link in nz' },
      {
        text: 'another.key in nz',
        items: [
          { text: 'a.sub-item.key in nz', link: '#a-subitem-link in nz' },
          { text: 'another.sub-item.key in nz', link: '#another-subitem-link in nz' },
        ],
      },
    ]);
  });

  it('gets borderless items in language', () => {
    expect(getItemsInLanguage('us')).toEqual([
      { text: 'a.key in us', link: '#a-link in us' },
      { text: 'borderless.key in us', link: '#borderless-link in us', isBorderless: true },
      {
        text: 'another.key in us',
        items: [
          { text: 'a.sub-item.key in us', link: '#a-subitem-link in us' },
          { text: 'another.sub-item.key in us', link: '#another-subitem-link in us' },
        ],
      },
    ]);
  });

  it('gets card items in language', () => {
    expect(getItemsInLanguage('de')).toEqual([
      { text: 'a.key in de', link: '#a-link in de' },
      { text: 'borderless.key in de', link: '#borderless-link in de', isBorderless: true },
      { text: 'card.key in de', link: '#card-link in de', isCard: true },
      {
        text: 'another.key in de',
        items: [
          { text: 'a.sub-item.key in de', link: '#a-subitem-link in de' },
          { text: 'another.sub-item.key in de', link: '#another-subitem-link in de' },
        ],
      },
    ]);
  });

  it('gets card button item in language', () => {
    expect(getButtonItemInLanguage('de')).toEqual({
      text: 'button.key in de',
      link: '#button-link in de',
    });
  });
});
