import React from 'react';
import { shallow } from 'enzyme';

import Items from '.';

const Icon = () => <span>An icon</span>;

describe('Items', () => {
  const itemObjects = [
    {
      translationKey: 'For peeps',
      link: 'https://transferwise.com',
      Icon,
      items: [{}],
    },
    {
      translationKey: 'For bisnes',
      link: 'https://transferwise.com/bisnes',
      Icon,
      items: [{}, {}],
    },
    {
      translationKey: 'Halp',
      link: 'https://transferwise.com/halp',
      Icon,
    },
  ];

  let items = shallow(<Items items={itemObjects} language="en" />);

  it('has individual items', () => {
    expect(individualItems().length).toBe(3);
  });

  it('passes translation keys to individual items', () => {
    expect(individualItemTranslationKeys()).toEqual(['For peeps', 'For bisnes', 'Halp']);
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

  it('passes language selector props to individual items', () => {
    const availableLanguages = [{ value: 'un', label: 'unicorn' }];
    const onLanguageChange = () => {};
    items = shallow(
      <Items
        items={[{ translationKey: 'key', link: '#' }]}
        availableLanguages={availableLanguages}
        onLanguageChange={onLanguageChange}
        language="something"
      />,
    );
    expect(individualItemProps('availableLanguages')).toEqual([availableLanguages]);
    expect(individualItemProps('onLanguageChange')).toEqual([onLanguageChange]);
    expect(individualItemProps('language')).toEqual(['something']);
  });

  it('becomes a submenu', () => {
    items = shallow(<Items isSubMenu items={itemObjects} language="en" />);
    expect(items.hasClass('subnav-menu')).toBe(true);
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
