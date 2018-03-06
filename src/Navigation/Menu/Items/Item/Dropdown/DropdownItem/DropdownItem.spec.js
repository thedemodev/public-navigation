import React from 'react';
import { shallow } from 'enzyme';

import DropdownItem from './';

describe('DropdownItem', () => {
  const item = shallow(
    <DropdownItem translationKey="bisnes.send-money" link="https://transferwise.com/bisnes" />,
  );

  it('has translation key as link text', () => {
    expect(text()).toBe('bisnes.send-money');
  });

  it('has correct link', () => {
    expect(link()).toBe('https://transferwise.com/bisnes');
  });

  function text() {
    return anchor().text();
  }

  function link() {
    return anchor().prop('href');
  }

  function anchor() {
    return item.find('a');
  }
});
