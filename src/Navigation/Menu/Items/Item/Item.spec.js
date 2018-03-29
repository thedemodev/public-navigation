import React from 'react';
import { shallow, mount } from 'enzyme';

import Item from './';
import ItemContent from './ItemContent';
import Dropdown from './Dropdown';
import focusWithin from './focusWithin';

jest.mock('./focusWithin');

describe('Item', () => {
  const Icon = () => <span>An icon</span>;
  let item;

  afterEach(jest.resetAllMocks);

  describe('when a link is passed', () => {
    beforeEach(() => {
      item = shallow(<Item text="For bisnes" link="https://transferwise.com/bisnes" Icon={Icon} />);
    });

    it('has anchor', () => {
      expect(anchor().exists()).toBe(true);
    });

    it('has correct link', () => {
      expect(link()).toBe('https://transferwise.com/bisnes');
    });

    it('passes text to item content', () => {
      expect(itemContentText()).toBe('For bisnes');
    });

    it('passes icon to item content', () => {
      expect(itemContentIcon()).toBe(Icon);
    });

    it('has no button', () => {
      expect(button().exists()).toBe(false);
    });
  });

  describe('when no link is passed', () => {
    beforeEach(() => {
      item = shallow(<Item text="For bisnes" Icon={Icon} />);
    });

    it('has button', () => {
      expect(button().exists()).toBe(true);
    });

    it('passes text to item content', () => {
      expect(itemContentText()).toBe('For bisnes');
    });

    it('passes icon to item content', () => {
      expect(itemContentIcon()).toBe(Icon);
    });

    it('has no anchor', () => {
      expect(anchor().exists()).toBe(false);
    });
  });

  it('does not have dropdown if no items are passed', () => {
    item = shallow(<Item text="For bisnes" Icon={Icon} />);

    expect(dropdown().exists()).toBe(false);
  });

  it('passes items to dropdown if items are passed', () => {
    const items = [{ text: 'Send moneys', link: '#' }, { text: 'Borderful', link: '#borderful' }];
    item = shallow(<Item text="For bisnes" items={items} Icon={Icon} />);

    expect(dropdown().prop('items')).toBe(items);
  });

  it('calls focus-within helper on item for .focus-within when focus is within', () => {
    expect(focusWithin).not.toBeCalled();

    item = mount(<Item text="For bisnes" link="https://transferwise.com/bisnes" Icon={Icon} />);

    expect(focusWithin).toBeCalledWith(item.getDOMNode());
  });

  function anchor() {
    return item.find('a');
  }

  function link() {
    return anchor().prop('href');
  }

  function itemContent() {
    return item.find(ItemContent);
  }

  function itemContentText() {
    return itemContent().prop('text');
  }

  function itemContentIcon() {
    return itemContent().prop('Icon');
  }

  function button() {
    return item.find('button');
  }

  function dropdown() {
    return item.find(Dropdown);
  }
});
