import React from 'react';
import { mount, shallow } from 'enzyme';

import Item from '.';
import ItemContent from './ItemContent';
import Dropdown from './Dropdown';

describe('Item', () => {
  const Icon = () => <span>An icon</span>;
  let item;

  afterEach(jest.resetAllMocks);

  describe('when a link is passed', () => {
    beforeEach(() => {
      item = shallow(
        <Item translationKey="bisnes" link="https://transferwise.com/bisnes" Icon={Icon} />,
      );
    });

    it('has anchor', () => {
      expect(anchor().exists()).toBe(true);
    });

    it('has correct link', () => {
      expect(link()).toBe('https://transferwise.com/bisnes');
    });

    it('passes translation key to item content', () => {
      expect(itemContentKey()).toBe('bisnes');
    });

    it('passes icon to item content', () => {
      expect(itemContentIcon()).toBe(Icon);
    });

    it('passes that should not have caret to item content if no items', () => {
      expect(itemContentHasCaret()).toBe(false);
    });

    it('passes that should have caret to item content if items exist', () => {
      item = shallow(
        <Item translationKey="bisnes" Icon={Icon} items={[{ translationKey: 'a.text' }]} />,
      );

      expect(itemContentHasCaret()).toBe(true);
    });

    it('has no button', () => {
      expect(button().exists()).toBe(false);
    });

    it('on mousedown stops propagation and clicks link', () => {
      item = mount(
        <Item translationKey="bisnes" link="https://transferwise.com/bisnes" Icon={Icon} />,
      );
      const target = item.find('a').getDOMNode();
      target.click = jest.fn();

      item.simulate('mousedown', { target });

      expect(target.click).toHaveBeenCalled();
    });
  });

  describe('when no link is passed', () => {
    beforeEach(() => {
      item = shallow(<Item translationKey="bisnes" Icon={Icon} />);
    });

    it('has button', () => {
      expect(button().exists()).toBe(true);
    });

    it('passes translation key to item content', () => {
      expect(itemContentKey()).toBe('bisnes');
    });

    it('passes icon to item content', () => {
      expect(itemContentIcon()).toBe(Icon);
    });

    it('passes that should not have caret to item content if no items', () => {
      expect(itemContentHasCaret()).toBe(false);
    });

    it('passes that should have caret to item content if items exist', () => {
      item = shallow(
        <Item translationKey="bisnes" Icon={Icon} items={[{ translationKey: 'a.text' }]} />,
      );

      expect(itemContentHasCaret()).toBe(true);
    });

    it('has no anchor', () => {
      expect(anchor().exists()).toBe(false);
    });
  });

  it('does not have dropdown if no items are passed', () => {
    item = shallow(<Item translationKey="bisnes" Icon={Icon} />);

    expect(dropdown().exists()).toBe(false);
  });

  it('passes items to dropdown if items are passed', () => {
    const items = [
      { translationKey: 'send.moneys', link: '#' },
      { translationKey: 'borderful', link: '#borderful' },
    ];
    item = shallow(<Item translationKey="bisnes" items={items} Icon={Icon} />);

    expect(dropdown().prop('items')).toBe(items);
  });

  it('sets data-analytics-id if analyticsId prop defined', () => {
    item = shallow(<Item translationKey="bisnes" analyticsId="bisnes" Icon={Icon} />);

    expect(item.prop('data-analytics-id')).toBe('bisnes');
  });

  it('does not set data-analytics-id if analyticsId prop is missing', () => {
    item = shallow(<Item translationKey="bisnes" Icon={Icon} />);

    expect(item.prop('data-analytics-id')).toBeNull();
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

  function itemContentKey() {
    return itemContent().prop('translationKey');
  }

  function itemContentIcon() {
    return itemContent().prop('Icon');
  }

  function itemContentHasCaret() {
    return itemContent().prop('hasCaret');
  }

  function button() {
    return item.find('button');
  }

  function dropdown() {
    return item.find(Dropdown);
  }
});
