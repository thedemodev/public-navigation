import React from 'react';
import { shallow } from 'enzyme';

import FooterIconLink from '.';

describe('Footer icon link', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FooterIconLink link="" Icon={() => {}} />);
  });

  it('has link', () => {
    component.setProps({ link: '#a-link' });
    expect(component.prop('href')).toBe('#a-link');
  });

  it('opens link in a new tab when external link', () => {
    component.setProps({ external: false });
    expect(component.prop('target')).toBe(undefined);
    component.setProps({ external: true });
    expect(component.prop('target')).toBe('_blank');
  });
});
