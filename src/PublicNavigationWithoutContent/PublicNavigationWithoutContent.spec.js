import React from 'react';
import { shallow } from 'enzyme';

import PublicNavigationWithoutContent from './';

describe('PublicNavigationWithoutContent', () => {
  it('does not have inverse colors if no inverse flag is passed', () => {
    const nav = shallow(<PublicNavigationWithoutContent />);

    expect(nav.hasClass('navbar-inverse')).toBe(false);
  });

  it('has inverse colors if inverse flag is passed', () => {
    const nav = shallow(<PublicNavigationWithoutContent inverse />);

    expect(nav.hasClass('navbar-inverse')).toBe(true);
  });

  it('passes logo that it is not inverse if no inverse flag is passed', () => {
    const nav = shallow(<PublicNavigationWithoutContent />);
    const logo = nav.find('Logo');

    expect(logo.props().inverse).toBe(false);
  });

  it('passes logo that it is inverse if inverse flag is passed', () => {
    const nav = shallow(<PublicNavigationWithoutContent inverse />);
    const logo = nav.find('Logo');

    expect(logo.props().inverse).toBe(true);
  });

  it('passes logo the link', () => {
    const nav = shallow(<PublicNavigationWithoutContent logoLink="https://transferwise.com/borderful" />);
    const logo = nav.find('Logo');

    expect(logo.props().link).toBe('https://transferwise.com/borderful');
  });
});
