import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from '.';

describe('Dropdown', () => {
  const items = [
    { translationKey: 'send.moneys', link: '#' },
    { translationKey: 'borderful', link: '#borderful' },
  ];

  const dropdown = shallow(<Dropdown items={items} />);

  it('has items', () => {
    expect(individualItems().length).toBe(2);
  });

  it('passes texts to individual items', () => {
    expect(individualItemKeys()).toEqual(['send.moneys', 'borderful']);
  });

  it('passes links to individual items', () => {
    expect(individualItemLinks()).toEqual(['#', '#borderful']);
  });

  function individualItems() {
    return dropdown.find('DropdownItem');
  }

  function individualItemKeys() {
    return individualItemProps('translationKey');
  }

  function individualItemProps(prop) {
    return individualItems().map(item => item.prop(prop));
  }

  function individualItemLinks() {
    return individualItemProps('link');
  }
});
