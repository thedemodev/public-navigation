import React from 'react';
import { shallow } from 'enzyme';

import PublicNavigation from './PublicNavigation';
import { getItems, getButtonItems } from './items';

jest.mock('./items', () => ({ getItems: jest.fn(), getButtonItems: jest.fn() }));
jest.mock('../common/i18n', () => ({
  messages: {},
  LANGUAGES: [],
}));

describe('PublicNavigation', () => {
  let publicNavigation;

  afterEach(jest.resetAllMocks);

  it('gets items for gb locale by default', () => {
    expect(getItems).not.toBeCalled();
    publicNavigation = shallow(<PublicNavigation />);
    expect(getItems).toBeCalledWith('gb');
  });

  it('gets items for passed locale', () => {
    expect(getItems).not.toBeCalled();
    publicNavigation = shallow(<PublicNavigation locale="br" />);
    expect(getItems).toBeCalledWith('br');
  });

  it('passes items to navigation', () => {
    getItems.mockReturnValue([{}, {}, {}]);

    publicNavigation = shallow(<PublicNavigation />);

    expect(navigation().prop('items')).toEqual([{}, {}, {}]);
  });

  it('passes that it should have inverse colors to navigation by default', () => {
    publicNavigation = shallow(<PublicNavigation />);

    expect(navigation().prop('inverse')).toBe(true);
  });

  it('passes that it should not have inverse colors to navigation if specified', () => {
    publicNavigation = shallow(<PublicNavigation inverse={false} />);

    expect(navigation().prop('inverse')).toBe(false);
  });

  it('passes available languages to navigation', () => {
    const availableLanguages = [{ value: 'un', label: 'unicorn' }];
    publicNavigation = shallow(<PublicNavigation availableLanguages={availableLanguages} />);

    expect(navigation().prop('availableLanguages')).toBe(availableLanguages);
  });

  it('passes language change handler to navigation', () => {
    const onLanguageChange = () => {};
    publicNavigation = shallow(<PublicNavigation onLanguageChange={onLanguageChange} />);

    expect(navigation().prop('onLanguageChange')).toBe(onLanguageChange);
  });

  it('passes button items to navigation', () => {
    getButtonItems.mockReturnValue([{}, {}, {}]);

    publicNavigation = shallow(<PublicNavigation />);

    expect(navigation().prop('buttonItems')).toEqual([{}, {}, {}]);
  });

  it('passes className prop to Navigation', () => {
    publicNavigation = shallow(<PublicNavigation className="heyy" />);

    expect(navigation().prop('className')).toEqual('heyy');
  });

  function navigation() {
    return publicNavigation.find('Navigation');
  }
});
