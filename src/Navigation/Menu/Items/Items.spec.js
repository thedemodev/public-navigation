import React from 'react';
import { shallow } from 'enzyme';

import Items from './';

describe('Items', () => {
  const itemObjects = [
    { translationKey: 'personal', link: 'https://transferwise.com' },
    { translationKey: 'business', link: 'https://transferwise.com/bisnes' },
    { translationKey: 'help', link: 'https://transferwise.com/halp' },
  ];

  const items = shallow(<Items items={itemObjects} />);

  it('has individual items', () => {
    expect(individualItems().length).toBe(3);
  });

  it('passes item objects to individual items', () => {
    expect(individualItemsObjects()).toEqual(itemObjects);
  });

  function individualItems() {
    return items.find('Item');
  }

  function individualItemsObjects() {
    return individualItems().map(item => item.prop('item'));
  }
});
