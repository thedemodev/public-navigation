import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';
import Menu from '.';

describe('Menu', () => {
  const props = {
    items: [],
    isOpen: false,
    onToggle: jest.fn(),
    language: 'en',
  };
  let menu;

  it('passes item objects to items', () => {
    const navItems = [
      { translationKey: 'private', link: '#personal' },
      { translationKey: 'bisnes', link: '#bisnes' },
      { translationKey: 'halp', link: '#halp' },
    ];

    menu = shallow(<Menu {...props} items={navItems} />);

    expect(itemObjects()).toBe(navItems);
  });

  it('passes language selector props to items', () => {
    const availableLanguages = [{ value: 'un', label: 'unicorn' }];
    const onLanguageChange = () => {};
    menu = shallow(
      <Menu
        {...props}
        items={[{ translationKey: 'key', link: '#' }]}
        availableLanguages={availableLanguages}
        onLanguageChange={onLanguageChange}
        language="something"
      />,
    );
    expect(items().prop('availableLanguages')).toBe(availableLanguages);
    expect(items().prop('onLanguageChange')).toBe(onLanguageChange);
    expect(items().prop('language')).toBe('something');
  });

  it('is open if should be', () => {
    menu = shallow(<Menu {...props} isOpen />);

    expect(isMenuOpen()).toBe(true);
  });

  it('is not open if should not be', () => {
    menu = shallow(<Menu {...props} isOpen={false} />);

    expect(isMenuOpen()).toBe(false);
  });

  it('passes header whether it is open', () => {
    menu = shallow(<Menu {...props} isOpen={false} />);

    expect(isOpenForHeader()).toBe(false);
    menu.setProps({ isOpen: true });
    expect(isOpenForHeader()).toBe(true);
  });

  it('closes when closed from header', () => {
    const onToggle = jest.fn();
    menu = shallow(<Menu {...props} isOpen onToggle={onToggle} />);

    closeFromCloseButton();
    expect(onToggle).toHaveBeenCalled();
  });

  it('does not render the submenu when not needed', () => {
    menu = shallow(<Menu {...props} />);

    expect(submenu().exists()).toBe(false);
  });

  it('renders the submenu when needed', () => {
    const subnavItems = [{}];
    menu = shallow(<Menu {...props} subnavItems={subnavItems} />);

    expect(submenu().exists()).toBe(true);
  });

  function itemObjects() {
    return items().prop('items');
  }

  function items() {
    return menu.find('Items[data-testid="mainmenu"]');
  }

  function isMenuOpen() {
    return menu.find('.navbar-collapse').hasClass('in');
  }

  function isOpenForHeader() {
    return header().props().isMenuOpen;
  }

  function closeFromCloseButton() {
    header()
      .props()
      .onToggle();
  }

  function header() {
    return menu.find(Header);
  }

  function submenu() {
    return menu.find('Items[data-testid="submenu"]');
  }
});
