import React from 'react';
import { shallow } from 'enzyme';

import PublicNavigation from './PublicNavigation';
import { getItemsInLanguage, getButtonItemInLanguage } from './items';

jest.mock('./items', () => ({
  getItemsInLanguage: jest.fn(),
  getButtonItemInLanguage: jest.fn(),
}));

describe('PublicNavigation', () => {
  let publicNavigation;

  afterEach(jest.resetAllMocks);

  it('gets items in passed language and passes it to navigation', () => {
    getItemsInLanguage.mockReturnValue([{}, {}, {}]);

    expect(getItemsInLanguage).not.toBeCalled();

    publicNavigation = shallow(<PublicNavigation language="de" />);

    expect(getItemsInLanguage).toBeCalledWith('de');
    expect(navigation().prop('items')).toEqual([{}, {}, {}]);
  });

  it('gets button item in passed language and passes it to navigation', () => {
    getButtonItemInLanguage.mockReturnValue({ link: '#link' });

    expect(getButtonItemInLanguage).not.toBeCalled();

    publicNavigation = shallow(<PublicNavigation language="de" />);

    expect(getButtonItemInLanguage).toBeCalledWith('de');
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
