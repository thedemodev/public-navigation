import React from 'react';
import { shallow } from 'enzyme';

import Item from './';

describe('Item', () => {
  let item;

  it('has translation key as link text', () => {
    item = shallow(<Item translationKey="business" />);

    expect(text()).toBe('business');
  });

  it('does not have link if no link is passed', () => {
    item = shallow(<Item translationKey="business" />);

    expect(link()).toBe(null);
  });

  it('has correct link if link is passed', () => {
    item = shallow(<Item translationKey="bisnes" link="https://transferwise.com/bisnes" />);

    expect(link()).toBe('https://transferwise.com/bisnes');
  });

  it('does not have dropdown if no items are passed', () => {
    item = shallow(<Item translationKey="bisnes" />);

    expect(dropdown().exists()).toBe(false);
  });

  it('passes items to dropdown if items are passed', () => {
    const items = [
      { translationKey: 'bisnes.send-moneys', link: '#' },
      { translationKey: 'bisnes.borderful', link: '#borderful' },
    ];
    item = shallow(<Item translationKey="bisnes" items={items} />);

    expect(dropdown().prop('items')).toBe(items);
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

  function dropdown() {
    return item.find('Dropdown');
  }
});
