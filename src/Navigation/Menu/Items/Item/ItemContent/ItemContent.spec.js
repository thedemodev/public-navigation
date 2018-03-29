import React from 'react';
import { shallow } from 'enzyme';

import ItemContent from './';

describe('Item content', () => {
  const Icon = () => <span>An icon</span>;

  let itemContent;
  beforeEach(() => {
    itemContent = shallow(<ItemContent text="A text" Icon={Icon} />);
  });

  it('has text', () => {
    expect(text()).toBe('A text');
  });

  it('has icon', () => {
    expect(icon().type()).toBe(Icon);
  });

  it('does not have caret by default', () => {
    expect(caret().exists()).toBe(false);
  });

  it('has caret when it should', () => {
    itemContent = shallow(<ItemContent text="A text" Icon={Icon} hasCaret />);

    expect(caret().exists()).toBe(true);
  });

  function text() {
    return itemContent.childAt(1).text();
  }

  function icon() {
    return itemContent.childAt(0);
  }

  function caret() {
    return itemContent.find('.caret');
  }
});
