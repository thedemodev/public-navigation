import React from 'react';
import { shallow } from 'enzyme';

import ItemContent from '.';

describe('Item content', () => {
  const Icon = () => <span>An icon</span>;

  let itemContent;
  beforeEach(() => {
    itemContent = shallow(<ItemContent translationKey="a.key" Icon={Icon} />);
  });

  it('has text', () => {
    expect(text()).toBe('a.key');
  });

  it('has icon', () => {
    expect(icon().type()).toBe(Icon);
  });

  it('does not have caret by default', () => {
    expect(caret().exists()).toBe(false);
  });

  it('has caret when it should', () => {
    itemContent = shallow(<ItemContent translationKey="a.key" Icon={Icon} hasCaret />);

    expect(caret().exists()).toBe(true);
  });

  it('has 2 different badges for mobile and desktop', () => {
    expect(badge().exists()).toBe(false);

    itemContent.setProps({ badge: 'yes' });
    expect(badge()).toHaveLength(2);
  });

  function text() {
    return itemContent
      .childAt(1)
      .children()
      .html();
  }

  function icon() {
    return itemContent.childAt(0);
  }

  function caret() {
    return itemContent.find('.caret');
  }

  function badge() {
    return itemContent.find('Badge');
  }
});
