import React from 'react';
import { shallow } from 'enzyme';
import { Message } from 'retranslate';

import Badge from '.';

describe('Badge', () => {
  let component;

  it('renders Message with translationKey', () => {
    component = shallow(<Badge translationKey="badger" />);
    expect(component.contains(<Message>badger</Message>)).toBe(true);
  });
});
