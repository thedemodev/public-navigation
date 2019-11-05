import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import Navigation from '.';

describe('Navigation', () => {
  let navigation;

  it('has inverse colors by default', () => {
    navigation = shallow(<Navigation language="en" />);

    expect(isInverse()).toBe(true);
  });

  it('does not have inverse colors if specified', () => {
    navigation = shallow(<Navigation language="en" inverse={false} />);

    expect(isInverse()).toBe(false);
  });

  it('renders header with correct props', () => {
    navigation = shallow(
      <Navigation language="en" inverse logoLink="test" buttonItems={[{ foo: 'bar' }]} />,
    );

    expect(header().exists()).toBe(true);
    expect(header().prop('inverse')).toBe(true);
    expect(header().prop('logoLink')).toBe('test');
    expect(header().prop('buttonItems')).toEqual([{ foo: 'bar' }]);
  });

  it('allows opening menu from header if items are passed', () => {
    navigation = shallow(
      <Navigation language="en" items={[{ translationKey: 'key', link: '#' }]} />,
    );

    expect(isMenuOpenForHeader()).toBe(false);
    openMenuFromHeader();
    expect(isMenuOpenForHeader()).toBe(true);
  });

  it('passes header that it has inverse colors by default', () => {
    navigation = shallow(<Navigation language="en" />);

    expect(isHeaderInverse()).toBe(true);
  });

  it('passes header that it does not have inverse colors if specified', () => {
    navigation = shallow(<Navigation language="en" inverse={false} />);

    expect(isHeaderInverse()).toBe(false);
  });

  it('passes header the main landing page link by default', () => {
    navigation = shallow(<Navigation language="en" inverse={false} />);

    expect(logoLink()).toBe('https://transferwise.com');
  });

  it('passes header the link if specified', () => {
    navigation = shallow(<Navigation language="en" logoLink="" />);

    expect(logoLink()).toBe('');
  });

  it('does not have menu if no items are passed', () => {
    navigation = shallow(<Navigation language="en" />);

    expect(menu().exists()).toBe(false);
  });

  it('renders menu if items are passed', () => {
    navigation = shallow(
      <Navigation language="en" items={[{ translationKey: 'key', link: '#' }]} />,
    );

    expect(menu().exists()).toBe(true);
  });

  it('allows closing menu from menu itself if items are passed', () => {
    navigation = shallow(
      <Navigation language="en" items={[{ translationKey: 'text', link: '#' }]} />,
    );

    navigation.setState({ isMenuOpen: true });
    expect(isMenuOpenForMenu()).toBe(true);
    closeMenuFromMenu();
    expect(isMenuOpenForMenu()).toBe(false);
  });

  it('has passed class', () => {
    navigation = shallow(
      <Navigation
        language="en"
        items={[{ translationKey: 'text', link: '#' }]}
        className="passed-class"
      />,
    );

    expect(className()).toContain('passed-class');
  });

  it('has passed props', () => {
    navigation = shallow(
      <Navigation
        language="en"
        items={[{ translationKey: 'key', link: '#' }]}
        a-prop="a-value"
        another-prop="another-value"
      />,
    );

    expect(navigation.prop('a-prop')).toBe('a-value');
    expect(navigation.prop('another-prop')).toBe('another-value');
  });

  it('passes language selector props to menu', () => {
    const availableLanguages = [{ value: 'un', label: 'unicorn' }];
    const onLanguageChange = () => {};
    navigation = shallow(
      <Navigation
        items={[{ translationKey: 'key', link: '#' }]}
        availableLanguages={availableLanguages}
        onLanguageChange={onLanguageChange}
        language="something"
      />,
    );
    expect(menu().prop('availableLanguages')).toBe(availableLanguages);
    expect(menu().prop('onLanguageChange')).toBe(onLanguageChange);
    expect(menu().prop('language')).toBe('something');
  });

  it('merges items and button items before passing to menu', () => {
    navigation = shallow(
      <Navigation
        items={[{ translationKey: 'key', link: '#' }]}
        buttonItems={[{ foo: 'bar' }]}
        language="something"
      />,
    );

    expect(menu().prop('items')).toEqual([{ translationKey: 'key', link: '#' }, { foo: 'bar' }]);
  });

  it('renders without a submenu when no links are passed', () => {
    navigation = shallow(<Navigation language="en" />);

    expect(headerEl().hasClass('navbar--submenu')).toEqual(false);
  });

  it('renders with a submenu when links are passed', () => {
    navigation = shallow(<Navigation submenuItems={[{}, {}]} language="en" />);

    expect(headerEl().hasClass('navbar--submenu')).toEqual(true);
  });

  it('passes submenuItems to Menu', () => {
    navigation = shallow(
      <Navigation
        submenuItems={[{}, {}]}
        items={[{ translationKey: 'key', link: '#' }]}
        language="en"
      />,
    );

    expect(menu().prop('submenuItems')).toEqual([{}, {}]);
  });

  function isInverse() {
    return navigation.hasClass('navbar--inverse');
  }

  function isMenuOpenForHeader() {
    return header().prop('isMenuOpen');
  }

  function header() {
    return navigation.find(Header);
  }

  function headerEl() {
    return navigation.find('header');
  }

  function openMenuFromHeader() {
    header().prop('onToggle')();
    navigation.update();
  }

  function isHeaderInverse() {
    return header().prop('inverse');
  }

  function logoLink() {
    return header().prop('logoLink');
  }

  function menu() {
    return navigation.find('Menu');
  }

  function isMenuOpenForMenu() {
    return menu().prop('isOpen');
  }

  function closeMenuFromMenu() {
    menu().prop('onToggle')();
    navigation.update();
  }

  function className() {
    return navigation.prop('className');
  }
});
