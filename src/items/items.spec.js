import { getItemsInLanguage, getButtonItemInLanguage } from './items';
import { translate } from '../i18n';

jest.mock('./itemObjects', () => ({
  items: [
    { translationKey: 'a.key', link: '#a-link' },
    {
      translationKey: 'another.key',
      items: [
        { translationKey: 'a.sub-item.key', link: '#a-subitem-link' },
        { translationKey: 'another.sub-item.key', link: '#another-subitem-link' },
      ],
    },
  ],
  buttonItem: { translationKey: 'button.key', link: '#button-link' },
}));

jest.mock('../i18n', () => ({ translate: jest.fn() }));

describe('Items', () => {
  beforeEach(() => {
    translate.mockImplementation((key, language) => `${key} in ${language}`);
  });

  afterEach(jest.resetAllMocks);

  it('gets items in language', () => {
    expect(getItemsInLanguage('de')).toEqual([
      { text: 'a.key in de', link: '#a-link' },
      {
        text: 'another.key in de',
        items: [
          { text: 'a.sub-item.key in de', link: '#a-subitem-link' },
          { text: 'another.sub-item.key in de', link: '#another-subitem-link' },
        ],
      },
    ]);
  });

  it('gets button item in language', () => {
    expect(getButtonItemInLanguage('de')).toEqual({
      text: 'button.key in de',
      link: '#button-link',
    });
  });
});
