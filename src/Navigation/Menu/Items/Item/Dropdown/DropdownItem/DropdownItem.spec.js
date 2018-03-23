import React from 'react';
import { shallow } from 'enzyme';

import DropdownItem from './';

describe('DropdownItem', () => {
  const item = shallow(<DropdownItem text="Send moneys" link="https://transferwise.com/bisnes" />);

  it('has text', () => {
    expect(text()).toBe('Send moneys');
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
