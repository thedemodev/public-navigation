import React from 'react';
import { shallow } from 'enzyme';

import DropdownItem from '.';

describe('DropdownItem', () => {
  let item = shallow(
    <DropdownItem translationKey="send.moneys" link="https://transferwise.com/bisnes" />,
  );

  it('has text', () => {
    expect(text()).toBe('send.moneys');
  });

  it('has correct link', () => {
    expect(link()).toBe('https://transferwise.com/bisnes');
  });

  it('does not have self as target if link does not start with hash', () => {
    expect(anchor().prop('target')).toBeFalsy();
  });

  it('adds self as target if link starts with hash', () => {
    item = shallow(<DropdownItem translationKey="same.page.link" link="#same-page-link" />);

    expect(anchor().prop('target')).toBe('_self');
  });

  it('does not have badge if not specified', () => {
    expect(badge().exists()).toBe(false);
  });

  it('has badge', () => {
    item = shallow(
      <DropdownItem
        translationKey="send.moneys"
        link="https://transferwise.com/bisnes"
        badge="new"
      />,
    );

    expect(badge().exists()).toBe(true);
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

  function badge() {
    return item.find('.badge');
  }
});
