import React from 'react';
import { shallow } from 'enzyme';

import Logo from '.';

describe('Logo', () => {
  it('has default logo link of transferwise.com', () => {
    const logo = shallow(<Logo />);
    const mobileLogo = findMobileLogo(logo);
    const desktopLogo = findDesktopLogo(logo);

    expect(mobileLogo.prop('href')).toBe('https://transferwise.com');
    expect(desktopLogo.prop('href')).toBe('https://transferwise.com');
  });

  it('has passed logo link if one is passed', () => {
    const logo = shallow(<Logo link="https://transferwise.com/borderful" />);
    const mobileLogo = findMobileLogo(logo);
    const desktopLogo = findDesktopLogo(logo);

    expect(mobileLogo.prop('href')).toBe('https://transferwise.com/borderful');
    expect(desktopLogo.prop('href')).toBe('https://transferwise.com/borderful');
  });

  it('inverses mobile logo if inverse flag is passed', () => {
    const logo = shallow(<Logo inverse />);
    const mobileLogo = findMobileLogo(logo);

    expect(mobileLogo.hasClass('logo-text-inverse')).toBe(true);
  });

  function findMobileLogo(logo) {
    return logo.find('.logo-text');
  }

  function findDesktopLogo(logo) {
    return logo.find('.navbar-brand');
  }
});
