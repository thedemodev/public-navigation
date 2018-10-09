import React from 'react';
import { shallow } from 'enzyme';

import FooterTextLink from '.';

describe('Footer text link', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FooterTextLink link="#a-link" translationKey="some.key" />);
  });

  it('has link', () => {
    expect(component.prop('href')).toBe('#a-link');
  });

  it('has text', () => {
    expect(component.children().html()).toBe('some.key');
  });
});
