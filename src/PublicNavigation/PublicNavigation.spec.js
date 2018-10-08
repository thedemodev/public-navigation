import React from 'react';
import { shallow } from 'enzyme';

import PublicNavigation from './PublicNavigation';
import { getItems, getButtonItem } from './items';

jest.mock('./items', () => ({
  getItems: jest.fn(),
  getButtonItem: jest.fn(),
}));
jest.mock('../i18n', () => ({
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

  it('gets button item for gb locale by default', () => {
    expect(getButtonItem).not.toBeCalled();
    publicNavigation = shallow(<PublicNavigation />);
    expect(getButtonItem).toBeCalledWith('gb');
  });

  it('gets button item for passed locale', () => {
    expect(getButtonItem).not.toBeCalled();
    publicNavigation = shallow(<PublicNavigation locale="br" />);
    expect(getButtonItem).toBeCalledWith('br');
  });

  it('passes items to navigation', () => {
    getItems.mockReturnValue([{}, {}, {}]);

    publicNavigation = shallow(<PublicNavigation />);

    expect(navigation().prop('items')).toEqual([{}, {}, {}]);
  });

  it('passes button item to navigation', () => {
    getButtonItem.mockReturnValue({ link: '#link' });

    publicNavigation = shallow(<PublicNavigation />);

    expect(navigation().prop('buttonItem')).toEqual({ link: '#link' });
  });

  it('passes that it should have inverse colors to navigation by default', () => {
    publicNavigation = shallow(<PublicNavigation />);

    expect(navigation().prop('inverse')).toBe(true);
  });

  it('passes that it should not have inverse colors to navigation if specified', () => {
    publicNavigation = shallow(<PublicNavigation inverse={false} />);

    expect(navigation().prop('inverse')).toBe(false);
  });

  function navigation() {
    return publicNavigation.find('Navigation');
  }
});
