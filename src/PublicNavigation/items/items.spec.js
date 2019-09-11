import { getItems, getButtonItems } from './items';
import shouldShowItemForLocale from './l10n';
import { interpolateLinkForLocale } from '../../common/l10n';
import getIcon from '../../common/icons';

jest.mock('../../../items/navigation.json', () => ({
  items: [
    { translationKey: 'a.key', link: '#a-link', id: 'top-id' },
    { translationKey: 'b.key', link: '#b-link', showForLoggedInUser: true },
    { translationKey: 'c.key', link: '#c-link', hideForLoggedInUser: true },
    { isCard: true, translationKey: 'card.key', link: '#card-link', icon: 'card-icon' },
    {
      translationKey: 'another.key',
      link: 'some link',
      main: {
        link: 'link',
      },
      items: [
        { translationKey: 'a.sub-item.key', link: '#a-subitem-link', id: 'some-id', hidden: true },
        {
          translationKey: 'another.sub-item.key',
          link: '#another-subitem-link',
          badge: 'badge.key',
        },
      ],
      icon: 'another-icon',
    },
    { translationKey: 'd.key', link: '#d-link', id: 'last-id', hidden: true },
  ],
  buttonItems: [
    { translationKey: 'button.key.first', link: 'linkey', showForPreviouslyLoggedInUser: true },
    {
      translationKey: 'button.key.second',
      link: 'linkey',
      showForPreviouslyLoggedInUser: false,
      hideForLoggedInUser: true,
    },
    { translationKey: 'button.key.third', link: 'linkey', showForLoggedInUser: true },
  ],
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
      { translationKey: 'a.key', link: '#a-link', id: 'top-id' },
      { translationKey: 'c.key', link: '#c-link', hideForLoggedInUser: true },
      {
        translationKey: 'another.key',
        link: 'some link',
        main: {
          link: 'link',
        },
        items: [
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
      { translationKey: 'a.key', link: '#a-link for loc', id: 'top-id' },
      { translationKey: 'c.key', link: '#c-link for loc', hideForLoggedInUser: true },
      { isCard: true, translationKey: 'card.key', link: '#card-link for loc', Icon: MockIcon },
      {
        translationKey: 'another.key',
        link: 'some link for loc',
        main: {
          link: 'link for loc',
        },
        items: [
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
      { translationKey: 'a.key', link: '#a-link', id: 'top-id' },
      { translationKey: 'c.key', link: '#c-link', hideForLoggedInUser: true },
      {
        isCard: true,
        translationKey: 'card.key',
        link: '#card-link',
        Icon: 'Component for card-icon',
      },
      {
        translationKey: 'another.key',
        link: 'some link',
        main: {
          link: 'link',
        },
        items: [
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

  it('filters items if user is logged in or logged out', () => {
    getIcon.mockImplementation(name => `Component for ${name}`);

    const items = getItems('loc', true);

    expect(items).toEqual([
      { translationKey: 'a.key', link: '#a-link', id: 'top-id' },
      { translationKey: 'b.key', link: '#b-link', showForLoggedInUser: true },
      {
        isCard: true,
        translationKey: 'card.key',
        link: '#card-link',
        Icon: 'Component for card-icon',
      },
      {
        translationKey: 'another.key',
        link: 'some link',
        main: {
          link: 'link',
        },
        items: [
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

  it('reveals a subitem if ID is in the override list', () => {
    getIcon.mockImplementation(name => `Component for ${name}`);

    const items = getItems('loc', true, false, ['some-id']);

    expect(items).toEqual([
      { translationKey: 'a.key', link: '#a-link', id: 'top-id' },
      { translationKey: 'b.key', link: '#b-link', showForLoggedInUser: true },
      {
        isCard: true,
        translationKey: 'card.key',
        link: '#card-link',
        Icon: 'Component for card-icon',
      },
      {
        translationKey: 'another.key',
        link: 'some link',
        main: {
          link: 'link',
        },
        items: [
          {
            translationKey: 'a.sub-item.key',
            link: '#a-subitem-link',
            id: 'some-id',
            hidden: true,
          },
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

  it('revelals top level item if ID is in the override list', () => {
    getIcon.mockImplementation(name => `Component for ${name}`);

    const items = getItems('loc', true, false, ['last-id']);

    expect(items).toEqual([
      { translationKey: 'a.key', link: '#a-link', id: 'top-id' },
      { translationKey: 'b.key', link: '#b-link', showForLoggedInUser: true },
      {
        isCard: true,
        translationKey: 'card.key',
        link: '#card-link',
        Icon: 'Component for card-icon',
      },
      {
        translationKey: 'another.key',
        link: 'some link',
        main: {
          link: 'link',
        },
        items: [
          {
            translationKey: 'another.sub-item.key',
            link: '#another-subitem-link',
            badge: 'badge.key',
          },
        ],
        Icon: 'Component for another-icon',
      },
      { translationKey: 'd.key', link: '#d-link', id: 'last-id', hidden: true },
    ]);
  });

  it('revelals both top and sub level item if ID-s are in the override list', () => {
    getIcon.mockImplementation(name => `Component for ${name}`);

    const items = getItems('loc', true, false, ['last-id', 'some-id']);

    expect(items).toEqual([
      { translationKey: 'a.key', link: '#a-link', id: 'top-id' },
      { translationKey: 'b.key', link: '#b-link', showForLoggedInUser: true },
      {
        isCard: true,
        translationKey: 'card.key',
        link: '#card-link',
        Icon: 'Component for card-icon',
      },
      {
        translationKey: 'another.key',
        link: 'some link',
        main: {
          link: 'link',
        },
        items: [
          {
            translationKey: 'a.sub-item.key',
            link: '#a-subitem-link',
            id: 'some-id',
            hidden: true,
          },
          {
            translationKey: 'another.sub-item.key',
            link: '#another-subitem-link',
            badge: 'badge.key',
          },
        ],
        Icon: 'Component for another-icon',
      },
      { translationKey: 'd.key', link: '#d-link', id: 'last-id', hidden: true },
    ]);
  });

  it('gets button items', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);

    const buttonItems = getButtonItems('loc');

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.second',
        link: 'linkey for loc',
        showForPreviouslyLoggedInUser: false,
        hideForLoggedInUser: true,
      },
    ]);
  });

  it('filters buttons for logged in users', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);
    const isUserLoggedIn = true;
    const buttonItems = getButtonItems('loc', isUserLoggedIn);

    expect(buttonItems).toEqual([
      { translationKey: 'button.key.third', link: 'linkey for loc', showForLoggedInUser: true },
    ]);
  });

  it('filters buttons for logged out users', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);
    const isUserLoggedIn = false;
    const buttonItems = getButtonItems('loc', isUserLoggedIn);

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.second',
        link: 'linkey for loc',
        showForPreviouslyLoggedInUser: false,
        hideForLoggedInUser: true,
      },
    ]);
  });

  it('filters buttons for logged in users when user not previously logged in', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);

    const isUserLoggedIn = false;
    const buttonItems = getButtonItems('loc', isUserLoggedIn, false);

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.second',
        link: 'linkey for loc',
        hideForLoggedInUser: true,
        showForPreviouslyLoggedInUser: false,
      },
    ]);
  });

  it('filters buttons for logged out users when user not previously logged in', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);

    const isUserLoggedIn = false;
    const buttonItems = getButtonItems('loc', isUserLoggedIn, false);

    expect(buttonItems).toEqual([
      {
        hideForLoggedInUser: true,
        translationKey: 'button.key.second',
        link: 'linkey for loc',
        showForPreviouslyLoggedInUser: false,
      },
    ]);
  });

  it('filters buttons for logged in users when user has previously logged in', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);

    const isUserLoggedIn = true;
    const buttonItems = getButtonItems('loc', isUserLoggedIn, true);

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.first',
        link: 'linkey for loc',
        showForPreviouslyLoggedInUser: true,
      },
      {
        translationKey: 'button.key.third',
        link: 'linkey for loc',
        showForLoggedInUser: true,
      },
    ]);
  });

  it('filters buttons for logged out users when user has previously logged in', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);

    const isUserLoggedIn = false;
    const buttonItems = getButtonItems('loc', isUserLoggedIn, true);

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.first',
        link: 'linkey for loc',
        showForPreviouslyLoggedInUser: true,
      },
    ]);
  });
});
