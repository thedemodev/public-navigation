import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './';

describe('Dropdown', () => {
  const items = [
    { translationKey: 'personal.send-moneys', link: '#' },
    { translationKey: 'personal.borderful', link: '#borderful' },
  ];

  const dropdown = shallow(<Dropdown items={items} />);

  it('has items', () => {
    expect(individualItems().length).toBe(2);
  });

  it('passes translation keys to individual items', () => {
    expect(individualItemTranslationKeys()).toEqual(['personal.send-moneys', 'personal.borderful']);
  });

  it('passes links to individual items', () => {
    expect(individualItemLinks()).toEqual(['#', '#borderful']);
  });

  function individualItems() {
    return dropdown.find('DropdownItem');
  }

  function individualItemTranslationKeys() {
    return individualItemProps('translationKey');
  }

  function individualItemProps(prop) {
    return individualItems().map(item => item.prop(prop));
  }

  function individualItemLinks() {
    return individualItemProps('link');
  }
});
