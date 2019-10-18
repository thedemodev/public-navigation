import { getItems, getButtonItems } from './items';
import shouldShowItemForLocale from './l10n';
import { interpolateLinkForLocaleAndLanguage } from '../../common/l10n';
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
jest.mock('../../common/l10n', () => ({ interpolateLinkForLocaleAndLanguage: jest.fn() }));
jest.mock('../../common/icons', () => jest.fn());

const MockIcon = jest.fn();

describe('Items', () => {
  beforeEach(() => {
    shouldShowItemForLocale.mockReturnValue(true);
    interpolateLinkForLocaleAndLanguage.mockImplementation(link => link);
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
    interpolateLinkForLocaleAndLanguage.mockImplementation(
      (link, locale, language) => `${link} for ${locale} in ${language}`,
    );

    const items = getItems('loc', false, false, [], 'en');

    expect(items).toEqual([
      { translationKey: 'a.key', link: '#a-link for loc in en', id: 'top-id' },
      { translationKey: 'c.key', link: '#c-link for loc in en', hideForLoggedInUser: true },
      {
        isCard: true,
        translationKey: 'card.key',
        link: '#card-link for loc in en',
        Icon: MockIcon,
      },
      {
        translationKey: 'another.key',
        link: 'some link for loc in en',
        main: {
          link: 'link for loc in en',
        },
        items: [
          {
            translationKey: 'another.sub-item.key',
            link: '#another-subitem-link for loc in en',
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

  it('reveals top level item if ID is in the override list', () => {
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

  it('reveals both top and sub level item if ID-s are in the override list', () => {
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
    interpolateLinkForLocaleAndLanguage.mockImplementation(
      (link, locale, language) => `${link} for ${locale} in ${language}`,
    );

    const buttonItems = getButtonItems('loc', false, false, 'en');

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.second',
        link: 'linkey for loc in en',
        showForPreviouslyLoggedInUser: false,
        hideForLoggedInUser: true,
      },
    ]);
  });

  it('filters buttons for logged in users', () => {
    interpolateLinkForLocaleAndLanguage.mockImplementation(
      (link, locale, language) => `${link} for ${locale} in ${language}`,
    );
    const isUserLoggedIn = true;
    const buttonItems = getButtonItems('loc', isUserLoggedIn, false, 'en');

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.third',
        link: 'linkey for loc in en',
        showForLoggedInUser: true,
      },
    ]);
  });

  it('filters buttons for logged out users', () => {
    interpolateLinkForLocaleAndLanguage.mockImplementation(
      (link, locale, language) => `${link} for ${locale} in ${language}`,
    );
    const isUserLoggedIn = false;
    const buttonItems = getButtonItems('loc', isUserLoggedIn, false, 'en');

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.second',
        link: 'linkey for loc in en',
        showForPreviouslyLoggedInUser: false,
        hideForLoggedInUser: true,
      },
    ]);
  });

  it('filters buttons for logged in users when user not previously logged in', () => {
    interpolateLinkForLocaleAndLanguage.mockImplementation(
      (link, locale, language) => `${link} for ${locale} in ${language}`,
    );

    const isUserLoggedIn = false;
    const buttonItems = getButtonItems('loc', isUserLoggedIn, false, 'en');

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.second',
        link: 'linkey for loc in en',
        hideForLoggedInUser: true,
        showForPreviouslyLoggedInUser: false,
      },
    ]);
  });

  it('filters buttons for logged out users when user not previously logged in', () => {
    interpolateLinkForLocaleAndLanguage.mockImplementation(
      (link, locale, language) => `${link} for ${locale} in ${language}`,
    );

    const isUserLoggedIn = false;
    const buttonItems = getButtonItems('loc', isUserLoggedIn, false, 'en');

    expect(buttonItems).toEqual([
      {
        hideForLoggedInUser: true,
        translationKey: 'button.key.second',
        link: 'linkey for loc in en',
        showForPreviouslyLoggedInUser: false,
      },
    ]);
  });

  it('filters buttons for logged in users when user has previously logged in', () => {
    interpolateLinkForLocaleAndLanguage.mockImplementation(
      (link, locale, language) => `${link} for ${locale} in ${language}`,
    );

    const isUserLoggedIn = true;
    const buttonItems = getButtonItems('loc', isUserLoggedIn, true, 'en');

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.first',
        link: 'linkey for loc in en',
        showForPreviouslyLoggedInUser: true,
      },
      {
        translationKey: 'button.key.third',
        link: 'linkey for loc in en',
        showForLoggedInUser: true,
      },
    ]);
  });

  it('filters buttons for logged out users when user has previously logged in', () => {
    interpolateLinkForLocaleAndLanguage.mockImplementation(
      (link, locale, language) => `${link} for ${locale} in ${language}`,
    );

    const isUserLoggedIn = false;
    const buttonItems = getButtonItems('loc', isUserLoggedIn, true, 'en');

    expect(buttonItems).toEqual([
      {
        translationKey: 'button.key.first',
        link: 'linkey for loc in en',
        showForPreviouslyLoggedInUser: true,
      },
    ]);
  });

  it('getItems passes locale and language to interpolateLinkForLocaleAndLanguage', () => {
    getItems('loc', false, false, [], 'en');

    expect(interpolateLinkForLocaleAndLanguage).toBeCalledWith('link', 'loc', 'en');
  });

  it('getButtonItems passes locale and language to interpolateLinkForLocaleAndLanguage', () => {
    getButtonItems('loc', false, false, 'en');

    expect(interpolateLinkForLocaleAndLanguage).toBeCalledWith('linkey', 'loc', 'en');
  });
});
