import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './';

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

  it('does not have menu if no items are passed', () => {
    navigation = shallow(<Navigation />);

    expect(menu().exists()).toBe(false);
  });

  it('allows closing menu from menu itself if items are passed', () => {
    navigation = shallow(<Navigation items={[{ translationKey: 'key', link: '#' }]} />);

    navigation.setState({ isMenuOpen: true });
    expect(isMenuOpenForMenu()).toBe(true);
    closeMenuFromMenu();
    expect(isMenuOpenForMenu()).toBe(false);
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
});
