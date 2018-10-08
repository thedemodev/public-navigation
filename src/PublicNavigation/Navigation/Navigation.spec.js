import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '.';

describe('Navigation', () => {
  let navigation;

  it('has inverse colors by default', () => {
    navigation = shallow(<Navigation />);

    expect(isInverse()).toBe(true);
  });

  it('does not have inverse colors if specified', () => {
    navigation = shallow(<Navigation inverse={false} />);

    expect(isInverse()).toBe(false);
  });

  it('does not have menu button if no items are passed', () => {
    navigation = shallow(<Navigation />);

    expect(menuButton().exists()).toBe(false);
  });

  it('allows opening menu from menu button if items are passed', () => {
    navigation = shallow(<Navigation items={[{ translationKey: 'key', link: '#' }]} />);

    expect(isMenuOpenForMenuButton()).toBe(false);
    openMenuFromMenuButton();
    expect(isMenuOpenForMenuButton()).toBe(true);
  });

  it('passes logo that it has inverse colors by default', () => {
    navigation = shallow(<Navigation />);

    expect(isLogoInverse()).toBe(true);
  });

  it('passes logo that it does not have inverse colors if specified', () => {
    navigation = shallow(<Navigation inverse={false} />);

    expect(isLogoInverse()).toBe(false);
  });

  it('passes logo the main landing page link by default', () => {
    navigation = shallow(<Navigation inverse={false} />);

    expect(logoLink()).toBe('https://transferwise.com');
  });

  it('passes logo the link if specified', () => {
    navigation = shallow(<Navigation logoLink="" />);

    expect(logoLink()).toBe('');
  });

  it('does not have button item if no button item object is passed', () => {
    navigation = shallow(<Navigation />);

    expect(buttonItem().exists()).toBe(false);
  });

  it('passes translation key to button item if it is passed', () => {
    navigation = shallow(<Navigation buttonItem={{ translationKey: 'key', link: '#link' }} />);

    expect(buttonItem().prop('translationKey')).toEqual('key');
  });

  it('passes link to button item if it is passed', () => {
    navigation = shallow(<Navigation buttonItem={{ translationKey: 'text', link: '#link' }} />);

    expect(buttonItem().prop('link')).toEqual('#link');
  });

  it('passes that button item should have inverse colors by default', () => {
    navigation = shallow(<Navigation buttonItem={{ translationKey: 'text', link: '#link' }} />);

    expect(isButtonItemInverse()).toBe(true);
  });

  it('passes that button item should not have inverse colors if specified', () => {
    navigation = shallow(
      <Navigation buttonItem={{ translationKey: 'text', link: '#link' }} inverse={false} />,
    );

    expect(isButtonItemInverse()).toBe(false);
  });

  it('does not have menu if no items are passed', () => {
    navigation = shallow(<Navigation />);

    expect(menu().exists()).toBe(false);
  });

  it('allows closing menu from menu itself if items are passed', () => {
    navigation = shallow(<Navigation items={[{ translationKey: 'text', link: '#' }]} />);

    navigation.setState({ isMenuOpen: true });
    expect(isMenuOpenForMenu()).toBe(true);
    closeMenuFromMenu();
    expect(isMenuOpenForMenu()).toBe(false);
  });

  it('has passed class', () => {
    navigation = shallow(
      <Navigation items={[{ translationKey: 'text', link: '#' }]} className="passed-class" />,
    );

    expect(className()).toContain('passed-class');
  });

  it('has passed props', () => {
    navigation = shallow(
      <Navigation
        items={[{ translationKey: 'key', link: '#' }]}
        a-prop="a-value"
        another-prop="another-value"
      />,
    );

    expect(navigation.prop('a-prop')).toBe('a-value');
    expect(navigation.prop('another-prop')).toBe('another-value');
  });

  function isInverse() {
    return navigation.hasClass('navbar-inverse');
  }

  function isMenuOpenForMenuButton() {
    return menuButton().prop('isMenuOpen');
  }

  function menuButton() {
    return navigation.find('MenuToggle.navbar-toggle');
  }

  function openMenuFromMenuButton() {
    menuButton().prop('onToggle')();
    navigation.update();
  }

  function isLogoInverse() {
    return logo().prop('inverse');
  }

  function logo() {
    return navigation.find('Logo');
  }

  function logoLink() {
    return logo().prop('link');
  }

  function buttonItem() {
    return navigation.find('ButtonItem');
  }

  function isButtonItemInverse() {
    return buttonItem().prop('inverse');
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
