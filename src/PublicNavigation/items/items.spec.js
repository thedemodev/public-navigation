import { getItems, getButtonItem } from './items';
import shouldShowItemForLocale from './l10n';
import { interpolateLinkForLocale } from '../../common/l10n';
import getIcon from '../../common/icons';

jest.mock('../../../items/navigation.json', () => ({
  items: [
    { translationKey: 'a.key', link: '#a-link' },
    { isCard: true, translationKey: 'card.key', link: '#card-link', icon: 'card-icon' },
    {
      translationKey: 'another.key',
      items: [
        { translationKey: 'a.sub-item.key', link: '#a-subitem-link' },
        {
          translationKey: 'another.sub-item.key',
          link: '#another-subitem-link',
          badge: 'badge.key',
        },
      ],
      icon: 'another-icon',
    },
  ],
  buttonItem: { translationKey: 'button.key', link: '#button-link' },
}));
jest.mock('./l10n', () => jest.fn());
jest.mock('../../common/l10n', () => ({ interpolateLinkForLocale: jest.fn() }));
jest.mock('../../common/icons', () => jest.fn());

const MockIcon = jest.fn();

describe('Items', () => {
  beforeEach(() => {
    shouldShowItemForLocale.mockReturnValue(true);
    interpolateLinkForLocale.mockImplementation(link => link);
    getIcon.mockReturnValue(MockIcon);
  });

  afterEach(jest.resetAllMocks);

  it('gets items without unsupported items', () => {
    shouldShowItemForLocale.mockImplementation(item => !item.isCard);

    const items = getItems('loc');

    expect(items).toEqual([
      { translationKey: 'a.key', link: '#a-link' },
      {
        translationKey: 'another.key',
        items: [
          { translationKey: 'a.sub-item.key', link: '#a-subitem-link' },
          {
            translationKey: 'another.sub-item.key',
            link: '#another-subitem-link',
            badge: 'badge.key',
          },
        ],
        Icon: MockIcon,
      },
    ]);
  });

  it('gets items with interpolated links', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);

    const items = getItems('loc');

    expect(items).toEqual([
      { translationKey: 'a.key', link: '#a-link for loc' },
      { isCard: true, translationKey: 'card.key', link: '#card-link for loc', Icon: MockIcon },
      {
        translationKey: 'another.key',
        items: [
          { translationKey: 'a.sub-item.key', link: '#a-subitem-link for loc' },
          {
            translationKey: 'another.sub-item.key',
            link: '#another-subitem-link for loc',
            badge: 'badge.key',
          },
        ],
        Icon: MockIcon,
      },
    ]);
  });

  it('gets items with icon components', () => {
    getIcon.mockImplementation(name => `Component for ${name}`);

    const items = getItems('loc');

    expect(items).toEqual([
      { translationKey: 'a.key', link: '#a-link' },
      {
        isCard: true,
        translationKey: 'card.key',
        link: '#card-link',
        Icon: 'Component for card-icon',
      },
      {
        translationKey: 'another.key',
        items: [
          { translationKey: 'a.sub-item.key', link: '#a-subitem-link' },
          {
            translationKey: 'another.sub-item.key',
            link: '#another-subitem-link',
            badge: 'badge.key',
          },
        ],
        Icon: 'Component for another-icon',
      },
    ]);
  });

  it('gets button item with interpolated link', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);

    const buttonItem = getButtonItem('loc');

    expect(buttonItem).toEqual({ translationKey: 'button.key', link: '#button-link for loc' });
  });
});
