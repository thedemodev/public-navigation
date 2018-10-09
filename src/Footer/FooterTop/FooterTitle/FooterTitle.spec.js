import React from 'react';
import { shallow } from 'enzyme';

import FooterTitle from '.';

describe('Footer title', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FooterTitle translationKey="some.key" />);
  });

  it('has text', () => {
    expect(component.children().html()).toBe('some.key');
  });
});
