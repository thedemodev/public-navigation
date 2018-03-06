import React from 'react';
import { shallow } from 'enzyme';

import ButtonItem from './';

describe('ButtonItem', () => {
  const item = shallow(
    <ButtonItem translationKey="signup" link="https://transferwise.com/enlist" inverse />,
  );

  it('has translation key as link text', () => {
    expect(text()).toBe('signup');
  });

  it('has correct link', () => {
    expect(link()).toBe('https://transferwise.com/enlist');
  });

  it('is inverse when should be', () => {
    item.setProps({ inverse: true });

    expect(isInverse()).toBe(true);
  });

  it('is not inverse when should not be', () => {
    item.setProps({ inverse: false });

    expect(isInverse()).toBe(false);
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

  function isInverse() {
    return anchor().hasClass('btn-image');
  }
});
