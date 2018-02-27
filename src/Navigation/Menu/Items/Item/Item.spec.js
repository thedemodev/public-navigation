import React from 'react';
import { shallow } from 'enzyme';

import Item from './';

describe('Item', () => {
  const item = shallow(
    <Item item={{ translationKey: 'business', link: 'https://transferwise.com/bisnes' }} />,
  );

  it('has translation key as link text', () => {
    expect(text()).toBe('business');
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
