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

  it('passes translation keys to items', () => {
    expect(translationKeys()).toEqual(['personal', 'business', 'help']);
  });

  it('passes links to items', () => {
    expect(links()).toEqual([
      'https://transferwise.com',
      'https://transferwise.com/bisnes',
      'https://transferwise.com/halp',
    ]);
  });

  function individualItems() {
    return items.find('Item');
  }

  function translationKeys() {
    return individualItems().map(item => item.prop('translationKey'));
  }

  function links() {
    return individualItems().map(item => item.prop('link'));
  }
});
