import getItems from '.';

import { interpolateLinkForLocale } from '../../common/l10n';
import getIcon from '../../common/icons';

jest.mock('../../common/icons', () => jest.fn());
jest.mock('../../common/l10n', () => ({ interpolateLinkForLocale: jest.fn() }));
jest.mock('../../common/icons', () => jest.fn());
jest.mock('../../../items/footer.json', () => ({
  top: [
    {
      titleTranslationKey: 'section 1 key',
      items: [
        {
          translationKey: 'section 1 item 1 key',
          link: '#section1item1',
        },
        {
          translationKey: 'section 1 item 2 key',
          link: '#section1item2',
        },
      ],
    },
    {
      titleTranslationKey: 'icons section key',
      items: [
        {
          icons: [
            { icon: 'first', link: '#firsticonlink' },
            { icon: 'second', link: '#secondiconlink', external: true },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      logo: true,
      link: '#logo',
    },
    {
      translationKey: 'bottom key',
      link: '#bottom',
    },
  ],
  small: [{ translationKey: 'small text key' }],
}));

const MockIcon = jest.fn();

describe('Items', () => {
  beforeEach(() => {
    getIcon.mockReturnValue(MockIcon);
    interpolateLinkForLocale.mockImplementation(link => link);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('gets items with interpolated links', () => {
    interpolateLinkForLocale.mockImplementation((link, locale) => `${link} for ${locale}`);

    expect(getItems('loc')).toEqual({
      top: [
        {
          titleTranslationKey: 'section 1 key',
          items: [
            {
              translationKey: 'section 1 item 1 key',
              link: '#section1item1 for loc',
            },
            {
              translationKey: 'section 1 item 2 key',
              link: '#section1item2 for loc',
            },
          ],
        },
        {
          titleTranslationKey: 'icons section key',
          items: [
            {
              icons: [
                { Icon: MockIcon, link: '#firsticonlink' },
                { Icon: MockIcon, link: '#secondiconlink', external: true },
              ],
            },
          ],
        },
      ],
      bottom: [
        {
          logo: true,
          link: '#logo for loc',
        },
        {
          translationKey: 'bottom key',
          link: '#bottom for loc',
        },
      ],
      small: [{ translationKey: 'small text key' }],
    });
  });

  it('gets items with icon components', () => {
    getIcon.mockImplementation(name => `Component for ${name}`);

    expect(getItems('loc')).toEqual({
      top: [
        {
          titleTranslationKey: 'section 1 key',
          items: [
            {
              translationKey: 'section 1 item 1 key',
              link: '#section1item1',
            },
            {
              translationKey: 'section 1 item 2 key',
              link: '#section1item2',
            },
          ],
        },
        {
          titleTranslationKey: 'icons section key',
          items: [
            {
              icons: [
                { Icon: 'Component for first', link: '#firsticonlink' },
                { Icon: 'Component for second', link: '#secondiconlink', external: true },
              ],
            },
          ],
        },
      ],
      bottom: [
        {
          logo: true,
          link: '#logo',
        },
        {
          translationKey: 'bottom key',
          link: '#bottom',
        },
      ],
      small: [{ translationKey: 'small text key' }],
    });
  });
});
