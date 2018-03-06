import React from 'react';
import { shallow } from 'enzyme';

import Items from './';

describe('Items', () => {
  const itemObjects = [
    { translationKey: 'personal', link: 'https://transferwise.com', items: [{}] },
    { translationKey: 'business', link: 'https://transferwise.com/bisnes', items: [{}, {}] },
    { translationKey: 'help', link: 'https://transferwise.com/halp' },
  ];

  const items = shallow(<Items items={itemObjects} />);

  it('has individual items', () => {
    expect(individualItems().length).toBe(3);
  });

  it('passes translation keys to individual items', () => {
    expect(individualItemTranslationKeys()).toEqual(['personal', 'business', 'help']);
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

  function individualItemTranslationKeys() {
    return individualItemProps('translationKey');
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
