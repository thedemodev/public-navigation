import React from 'react';
import { shallow } from 'enzyme';

import PublicNavigation from './';

jest.mock('./items', () => ({ items: [{}, {}, {}], buttonItem: { link: '#link' } }));

describe('PublicNavigation', () => {
  let publicNavigation;

  it('passes items to navigation', () => {
    publicNavigation = shallow(<PublicNavigation />);

    expect(navigation().prop('items')).toEqual([{}, {}, {}]);
  });

  it('passes button item to navigation', () => {
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
