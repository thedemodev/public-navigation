import React from 'react';
import { shallow } from 'enzyme';

import PublicNavigation from './PublicNavigation';

describe('PublicNavigation', () => {
  it('does not have inverse colors if no inverse flag is passed', () => {
    const nav = shallow(<PublicNavigation />);

    expect(nav.hasClass('navbar-inverse')).toBe(false);
  });

  it('has inverse colors if inverse flag is passed', () => {
    const nav = shallow(<PublicNavigation inverse />);

    expect(nav.hasClass('navbar-inverse')).toBe(true);
  });
});
