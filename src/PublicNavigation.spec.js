import React from 'react';
import { shallow } from 'enzyme';

import PublicNavigation from './';

jest.mock('./items.json', () => [{}, {}, {}]);

describe('PublicNavigation', () => {
  let nav;

  it('passes props to navigation without content', () => {
    const props = {
      a: 'prop',
      another: 'prop',
    };
    nav = shallow(<PublicNavigation {...props} />);

    expect(navigationWithoutContent().props()).toMatchObject(props);
  });

  it('passes reverse colors to navigation without content if should', () => {
    nav = shallow(<PublicNavigation inverse />);

    expect(isNavigationWithoutContentInverse()).toBe(true);
  });

  it('does not pass reverse colors to navigation without content if should not', () => {
    nav = shallow(<PublicNavigation inverse={false} />);

    expect(isNavigationWithoutContentInverse()).toBe(false);
  });

  it('passes items to navigation without content', () => {
    nav = shallow(<PublicNavigation />);

    expect(items()).toEqual([{}, {}, {}]);
  });

  it('passes logo link to navigation without content', () => {
    nav = shallow(<PublicNavigation logoLink="https://transferwise.com/borderful" />);

    expect(logoLink()).toEqual('https://transferwise.com/borderful');
  });

  it('allows toggling menu', () => {
    nav = shallow(<PublicNavigation />);

    expect(isMenuOpen()).toBe(false);
    toggleMenuFromNavigationWithoutContent();
    expect(isMenuOpen()).toBe(true);
  });

  function items() {
    return navigationWithoutContent().prop('items');
  }

  function navigationWithoutContent() {
    return nav.find('PublicNavigationWithoutContent');
  }

  function isNavigationWithoutContentInverse() {
    return navigationWithoutContent().prop('inverse');
  }

  function logoLink() {
    return navigationWithoutContent().prop('logoLink');
  }

  function toggleMenuFromNavigationWithoutContent() {
    navigationWithoutContent().prop('onToggleMenu')();
    nav.update();
  }

  function isMenuOpen() {
    return navigationWithoutContent().prop('isMenuOpen');
  }
});
