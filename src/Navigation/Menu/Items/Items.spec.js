import React from 'react';
import { shallow } from 'enzyme';

import Items from './';

describe('Items', () => {
  const itemObjects = [
    { text: 'For peeps', link: 'https://transferwise.com', items: [{}] },
    { text: 'For bisnes', link: 'https://transferwise.com/bisnes', items: [{}, {}] },
    { text: 'Halp', link: 'https://transferwise.com/halp' },
  ];

  const items = shallow(<Items items={itemObjects} />);

  it('has individual items', () => {
    expect(individualItems().length).toBe(3);
  });

  it('passes texts to individual items', () => {
    expect(individualItemTexts()).toEqual(['For peeps', 'For bisnes', 'Halp']);
  });

  it('passes links to individual items', () => {
    expect(individualItemLinks()).toEqual([
      'https://transferwise.com',
      'https://transferwise.com/bisnes',
      'https://transferwise.com/halp',
    ]);
  });

  it('passes items to individual items', () => {
    expect(individualItemItems()).toEqual([[{}], [{}, {}], null]);
  });

  function individualItems() {
    return items.find('Item');
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

  function individualItemItems() {
    return individualItemProps('items');
  }
});
