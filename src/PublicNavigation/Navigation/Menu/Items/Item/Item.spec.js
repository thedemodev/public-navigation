import React from 'react';
import { mount, shallow } from 'enzyme';

import Item from '.';
import ItemContent from './ItemContent';

describe('Item', () => {
  const Icon = () => <span>An icon</span>;
  const mainCTA = {
    translationKey: 'this is like the CTA part of the dropdown',
  };

  let item;

  afterEach(jest.resetAllMocks);

  describe('when a link is passed', () => {
    beforeEach(() => {
      item = shallow(
        <Item
          language="en"
          translationKey="bisnes"
          link="https://transferwise.com/bisnes"
          Icon={Icon}
          main={mainCTA}
        />,
      );
    });

    it('has anchor', () => {
      expect(anchor().exists()).toBe(true);
    });

    it('has correct link', () => {
      expect(link()).toBe('https://transferwise.com/bisnes');
    });

    it('has both button and anchor if items are passed', () => {
      item = shallow(
        <Item
          language="en"
          translationKey="bisnes"
          Icon={Icon}
          items={[{ translationKey: 'a.text' }]}
          main={mainCTA}
        />,
      );
      expect(anchor().exists()).toBe(true);
      expect(anchor().hasClass('visible-xs visible-sm')).toBe(true);
      expect(
        anchor()
          .find('ItemContent')
          .exists(),
      ).toBe(true);

      expect(button().exists()).toBe(true);
      expect(button().hasClass('hidden-xs hidden-sm')).toBe(true);
      expect(
        button()
          .find('ItemContent')
          .exists(),
      ).toBe(true);
    });

    it('passes translation key to item content', () => {
      expect(itemContentKey()).toBe('bisnes');
    });

    it('passes icon to item content', () => {
      expect(itemContentIcon()).toBe(Icon);
    });

    it('passes that should not have caret to item content if no items', () => {
      expect(itemContentHasCaret()).toBe(false);
    });

    it('passes that should have caret to item content if items exist', () => {
      item = shallow(
        <Item
          language="en"
          translationKey="bisnes"
          Icon={Icon}
          items={[{ translationKey: 'a.text' }]}
          main={mainCTA}
        />,
      );

      expect(itemContentHasCaret()).toBe(true);
    });

    it('has no button', () => {
      expect(button().exists()).toBe(false);
    });

    it('on mousedown stops propagation and clicks link', () => {
      item = mount(
        <Item
          language="en"
          translationKey="bisnes"
          link="https://transferwise.com/bisnes"
          Icon={Icon}
          main={mainCTA}
        />,
      );
      const target = item.find('a').getDOMNode();
      target.click = jest.fn();

      item.simulate('mousedown', { target });

      expect(target.click).toHaveBeenCalled();
    });
  });

  it('does not have dropdown if no items are passed', () => {
    item = shallow(<Item language="en" translationKey="bisnes" />);

    expect(cardDropdown().exists()).toBe(false);
    expect(listItem().hasClass('dropdown')).toBe(false);
  });

  it('passes items to dropdown if items are passed', () => {
    const items = [
      { translationKey: 'send.moneys', link: '#' },
      { translationKey: 'borderful', link: '#borderful' },
    ];
    item = shallow(<Item language="en" translationKey="bisnes" items={items} main={mainCTA} />);

    expect(cardDropdown().prop('items')).toBe(items);
    expect(listItem().hasClass('dropdown')).toBe(true);
  });

  it('passes main CTA to dropdown if it is passed', () => {
    const items = [
      { translationKey: 'send.moneys', link: '#' },
      { translationKey: 'borderful', link: '#borderful' },
    ];

    item = shallow(<Item language="en" translationKey="bisnes" items={items} main={mainCTA} />);

    expect(cardDropdown().prop('mainCTA')).toBe(mainCTA);
  });

  it('sets data-analytics-id if analyticsId prop defined', () => {
    item = shallow(<Item language="en" translationKey="bisnes" analyticsId="bisnes" Icon={Icon} />);

    expect(item.prop('data-analytics-id')).toBe('bisnes');
  });

  it('does not set data-analytics-id if analyticsId prop is missing', () => {
    item = shallow(<Item language="en" translationKey="bisnes" Icon={Icon} />);

    expect(item.prop('data-analytics-id')).toBeNull();
  });

  it('renders language selector when it should, with correct props', () => {
    const availableLanguages = [{ value: 'en', label: 'en' }, { value: 'et', label: 'estonglish' }];
    const onLanguageChange = () => {};

    item = shallow(<Item isLanguageSelector language="en" translationKey="something" />);
    expect(item.html()).toBe(null);

    item.setProps({
      availableLanguages,
    });
    expect(item.html()).toBe(null);

    item.setProps({
      onLanguageChange,
    });
    expect(languageSelector().props()).toEqual({
      language: 'en',
      availableLanguages,
      onLanguageChange,
    });
  });

  it('renders a button item when it should, with correct props', () => {
    item = shallow(
      <Item isButton inverse deEmphasize link="yeah" translationKey="why" language="en" />,
    );
    expect(buttonItem().props()).toEqual({
      translationKey: 'why',
      link: 'yeah',
      inverse: true,
      deEmphasize: true,
    });
  });

  it('renders as an active link when in a submenu', () => {
    const props = {
      isInSubMenu: true,
      translatedText: 'text',
      language: 'en',
      link: '/',
      activePath: '/',
    };
    item = shallow(<Item {...props} />);
    expect(item.hasClass('active')).toBe(true);
  });

  it('does not render as an active link when in the main menu', () => {
    const props = {
      translatedText: 'text',
      language: 'en',
      link: '/',
      activePath: '/',
    };
    item = shallow(<Item {...props} />);
    expect(item.hasClass('active')).toBe(false);
  });

  function anchor() {
    return item.find('a');
  }

  function listItem() {
    return item.find('li');
  }

  function link() {
    return anchor().prop('href');
  }

  function itemContent() {
    return item.find(ItemContent).first();
  }

  function itemContentKey() {
    return itemContent().prop('translationKey');
  }

  function itemContentIcon() {
    return itemContent().prop('Icon');
  }

  function itemContentHasCaret() {
    return itemContent().prop('hasCaret');
  }

  function button() {
    return item.find('button');
  }

  function cardDropdown() {
    return item.find('CardDropdown');
  }

  function languageSelector() {
    return item.find('LanguageSelector');
  }

  function buttonItem() {
    return item.find('ButtonItem');
  }
});
