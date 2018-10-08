import React from 'react';
import { shallow } from 'enzyme';

import Menu from '.';

describe('Menu', () => {
  const props = {
    items: [],
    isOpen: false,
    onToggle: jest.fn(),
  };
  let menu;

  it('passes item objects to items', () => {
    const items = [
      { translationKey: 'private', link: '#personal' },
      { translationKey: 'bisnes', link: '#bisnes' },
      { translationKey: 'halp', link: '#halp' },
    ];

    menu = shallow(<Menu {...props} items={items} />);

    expect(itemObjects()).toBe(items);
  });

  it('is open if should be', () => {
    menu = shallow(<Menu {...props} isOpen />);

    expect(isMenuOpen()).toBe(true);
  });

  it('is not open if should not be', () => {
    menu = shallow(<Menu {...props} isOpen={false} />);

    expect(isMenuOpen()).toBe(false);
  });

  it('passes overlay whether it is open', () => {
    menu = shallow(<Menu {...props} isOpen={false} />);

    expect(isOpenForOverlay()).toBe(false);
    menu.setProps({ isOpen: true });
    expect(isOpenForOverlay()).toBe(true);
  });

  it('closes when closed from overlay', () => {
    const onToggle = jest.fn();
    menu = shallow(<Menu {...props} isOpen onToggle={onToggle} />);

    closeFromOverlay();
    expect(onToggle).toHaveBeenCalled();
  });

  it('passes close button whether it is open', () => {
    menu = shallow(<Menu {...props} isOpen={false} />);

    expect(isOpenForCloseButton()).toBe(false);
    menu.setProps({ isOpen: true });
    expect(isOpenForCloseButton()).toBe(true);
  });

  it('closes when closed from close button', () => {
    const onToggle = jest.fn();
    menu = shallow(<Menu {...props} isOpen onToggle={onToggle} />);

    closeFromCloseButton();
    expect(onToggle).toHaveBeenCalled();
  });

  function itemObjects() {
    return menu.find('Items').prop('items');
  }

  function isMenuOpen() {
    return menu.find('.navbar-collapse').hasClass('in');
  }

  function isOpenForOverlay() {
    return overlay().props().isMenuOpen;
  }

  function closeFromOverlay() {
    overlay()
      .props()
      .onToggle();
  }

  function overlay() {
    return menu.find('MenuToggle.cover');
  }

  function isOpenForCloseButton() {
    return closeButton().props().isMenuOpen;
  }

  function closeFromCloseButton() {
    closeButton()
      .props()
      .onToggle();
  }

  function closeButton() {
    return menu.find('MenuToggle.close');
  }
});
