import React from 'react';
import { shallow, mount } from 'enzyme';

import Item from './';
import focusWithin from './focusWithin';

jest.mock('./focusWithin');

describe('Item', () => {
  afterEach(jest.resetAllMocks);
  let item;

  it('has text', () => {
    item = shallow(<Item text="For bisnes" />);

    expect(text()).toBe('For bisnes');
  });

  it('does not have link if no link is passed', () => {
    item = shallow(<Item text="For bisnes" />);

    expect(link()).toBe(null);
  });

  it('has correct link if link is passed', () => {
    item = shallow(<Item text="For bisnes" link="https://transferwise.com/bisnes" />);

    expect(link()).toBe('https://transferwise.com/bisnes');
  });

  it('does not have dropdown if no items are passed', () => {
    item = shallow(<Item text="For bisnes" />);

    expect(dropdown().exists()).toBe(false);
  });

  it('passes items to dropdown if items are passed', () => {
    const items = [{ text: 'Send moneys', link: '#' }, { text: 'Borderful', link: '#borderful' }];
    item = shallow(<Item text="For bisnes" items={items} />);

    expect(dropdown().prop('items')).toBe(items);
  });

  it('calls focus-within helper on item for .focus-within when focus is within', () => {
    expect(focusWithin).not.toBeCalled();

    item = mount(<Item translationKey="bisnes" link="https://transferwise.com/bisnes" />);

    expect(focusWithin).toBeCalledWith(item.getDOMNode());
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
