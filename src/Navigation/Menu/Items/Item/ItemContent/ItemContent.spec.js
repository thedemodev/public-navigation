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

  function text() {
    return itemContent.childAt(1).text();
  }

  function icon() {
    return itemContent.childAt(0);
  }
});
