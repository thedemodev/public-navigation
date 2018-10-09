import React from 'react';
import { shallow } from 'enzyme';

import MobileLogo from '.';
import { Locale } from '../../common/l10n';

describe('Mobile logo', () => {
  let component;
  beforeEach(() => {
    component = shallow(<MobileLogo />);
  });

  it('directs to transferwise.com when gb locale and by default', () => {
    expect(component.prop('href')).toBe('https://transferwise.com/');
    component.setProps({ locale: Locale.GB });
    expect(component.prop('href')).toBe('https://transferwise.com/');
  });

  it('directs to the localised page when any non-gb locale', () => {
    component.setProps({ locale: Locale.DE });
    expect(component.prop('href')).toBe('https://transferwise.com/de');
  });

  it('is inverse when the flag is passed', () => {
    expect(component.hasClass('logo-inverse')).toBe(false);
    component.setProps({ inverse: true });
    expect(component.hasClass('logo-inverse')).toBe(true);
  });
});
