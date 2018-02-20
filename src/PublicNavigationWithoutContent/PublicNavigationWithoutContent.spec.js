import React from 'react';
import { shallow } from 'enzyme';

import PublicNavigationWithoutContent from './';

describe('PublicNavigationWithoutContent', () => {
  let nav;

  const props = {
    items: [],
    inverse: false,
    logoLink: '',
    isMenuOpen: false,
    onToggleMenu: () => {},
  };

  it('does not have inverse colors if no inverse flag is passed', () => {
    nav = shallow(<PublicNavigationWithoutContent {...props} />);

    expect(hasInverseColors()).toBe(false);
  });

  it('has inverse colors if inverse flag is passed', () => {
    nav = shallow(<PublicNavigationWithoutContent {...props} inverse />);

    expect(hasInverseColors()).toBe(true);
  });

  it('passes logo that it is not inverse if no inverse flag is passed', () => {
    nav = shallow(<PublicNavigationWithoutContent {...props} />);

    expect(isLogoInverse()).toBe(false);
  });

  it('passes logo that it is inverse if inverse flag is passed', () => {
    nav = shallow(<PublicNavigationWithoutContent {...props} inverse />);

    expect(isLogoInverse()).toBe(true);
  });

  it('passes logo the link', () => {
    nav = shallow(
      <PublicNavigationWithoutContent {...props} logoLink="https://transferwise.com/borderful" />,
    );

    expect(logoLink()).toBe('https://transferwise.com/borderful');
  });

  it('passes menu button whether menu is open', () => {
    nav = shallow(<PublicNavigationWithoutContent {...props} />);

    expect(isMenuOpenForMenuButton()).toBe(false);
    nav.setProps({ isMenuOpen: true });
    expect(isMenuOpenForMenuButton()).toBe(true);
  });

  it('opens menu from menu button', () => {
    const onToggleMenu = jest.fn();
    nav = shallow(<PublicNavigationWithoutContent {...props} onToggleMenu={onToggleMenu} />);

    expect(onToggleMenu).not.toHaveBeenCalled();
    openMenuFromMenuButton();
    expect(onToggleMenu).toHaveBeenCalled();
  });

  it('passes items to menu', () => {
    nav = shallow(<PublicNavigationWithoutContent {...props} items={[{}, {}, {}]} />);

    expect(items()).toEqual([{}, {}, {}]);
  });

  it('passes menu whether it is open', () => {
    nav = shallow(<PublicNavigationWithoutContent {...props} isMenuOpen={false} />);

    expect(isMenuOpen()).toBe(false);
    nav.setProps({ isMenuOpen: true });
    expect(isMenuOpen()).toBe(true);
  });

  it('toggles menu when toggled from menu', () => {
    const onToggleMenu = jest.fn();
    nav = shallow(<PublicNavigationWithoutContent {...props} onToggleMenu={onToggleMenu} />);

    expect(onToggleMenu).not.toHaveBeenCalled();
    toggleMenuFromMenu();
    expect(onToggleMenu).toHaveBeenCalled();
  });

  function hasInverseColors() {
    return nav.hasClass('navbar-inverse');
  }

  function isLogoInverse() {
    return logo().props().inverse;
  }

  function logo() {
    return nav.find('Logo');
  }

  function logoLink() {
    return logo().props().link;
  }

  function isMenuOpenForMenuButton() {
    return menuButton().props().isMenuOpen;
  }

  function menuButton() {
    return nav.find('MenuToggle.navbar-toggle');
  }

  function openMenuFromMenuButton() {
    menuButton()
      .props()
      .onToggle();
  }

  function items() {
    return menu().props().items;
  }

  function menu() {
    return nav.find('Menu');
  }

  function isMenuOpen() {
    return menu().props().isOpen;
  }

  function toggleMenuFromMenu() {
    menu()
      .props()
      .onToggle();
  }
});
