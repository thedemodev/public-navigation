import React from 'react';
import { shallow, mount } from 'enzyme';

import Item from './';
import focusWithin from './focusWithin';

jest.mock('./focusWithin');

describe('Item', () => {
  afterEach(jest.resetAllMocks);
  let item;

  describe('when a link is passed', () => {
    beforeEach(() => {
      item = shallow(<Item text="For bisnes" link="https://transferwise.com/bisnes" />);
    });

    it('has anchor', () => {
      expect(anchor().exists()).toBe(true);
    });

    it('has correct link', () => {
      expect(link()).toBe('https://transferwise.com/bisnes');
    });

    it('has link text', () => {
      expect(linkText()).toBe('For bisnes');
    });

    it('has no button', () => {
      expect(button().exists()).toBe(false);
    });
  });

  describe('when no link is passed', () => {
    beforeEach(() => {
      item = shallow(<Item text="For bisnes" />);
    });

    it('has button element', () => {
      expect(button().exists()).toBe(true);
    });

    it('has button text', () => {
      expect(buttonText()).toBe('For bisnes');
    });

    it('has no anchor', () => {
      expect(anchor().exists()).toBe(false);
    });
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

    item = mount(<Item text="bisnes" link="https://transferwise.com/bisnes" />);

    expect(focusWithin).toBeCalledWith(item.getDOMNode());
  });

  function anchor() {
    return item.find('a');
  }

  function link() {
    return anchor().prop('href');
  }

  function linkText() {
    return anchor().text();
  }

  function button() {
    return item.find('button');
  }

  function buttonText() {
    return button().text();
  }

  function dropdown() {
    return item.find('Dropdown');
  }
});
