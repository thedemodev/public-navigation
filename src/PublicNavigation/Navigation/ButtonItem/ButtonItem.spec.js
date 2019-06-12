import React from 'react';
import { shallow } from 'enzyme';

import ButtonItem from '.';

describe('ButtonItem', () => {
  const item = shallow(
    <ButtonItem translationKey="enlist" link="https://transferwise.com/enlist" inverse />,
  );

  it('has text', () => {
    expect(text()).toBe('enlist');
  });

  it('has correct link', () => {
    expect(link()).toBe('https://transferwise.com/enlist');
  });

  it('is inverse when should be', () => {
    item.setProps({ inverse: true });
    expect(isInverse()).toBe(true);

    item.setProps({ inverse: false });
    expect(isInverse()).toBe(false);
  });

  it('is de-emphasized when it should be', () => {
    item.setProps({ deEmphasize: true });
    expect(isdeEmphasized()).toBe(true);

    item.setProps({ deEmphasize: false });
    expect(isdeEmphasized()).toBe(false);
  });

  function text() {
    return anchor()
      .children()
      .html();
  }

  function link() {
    return anchor().prop('href');
  }

  function anchor() {
    return item.find('a');
  }

  function isInverse() {
    return anchor().hasClass('btn-default');
  }

  function isdeEmphasized() {
    return anchor().hasClass('btn-link');
  }
});
