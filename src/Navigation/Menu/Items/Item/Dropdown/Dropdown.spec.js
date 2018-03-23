import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './';

describe('Dropdown', () => {
  const items = [{ text: 'Send moneys', link: '#' }, { text: 'Borderful', link: '#borderful' }];

  const dropdown = shallow(<Dropdown items={items} />);

  it('has items', () => {
    expect(individualItems().length).toBe(2);
  });

  it('passes texts to individual items', () => {
    expect(individualItemTexts()).toEqual(['Send moneys', 'Borderful']);
  });

  it('passes links to individual items', () => {
    expect(individualItemLinks()).toEqual(['#', '#borderful']);
  });

  function individualItems() {
    return dropdown.find('DropdownItem');
  }

  function individualItemTexts() {
    return individualItemProps('text');
  }

  function individualItemProps(prop) {
    return individualItems().map(item => item.prop(prop));
  }

  function individualItemLinks() {
    return individualItemProps('link');
  }
});
