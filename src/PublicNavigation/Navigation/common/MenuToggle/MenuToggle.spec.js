import React from 'react';
import { shallow } from 'enzyme';

import MenuToggle from '.';

describe('MenuToggle', () => {
  let toggle;

  it('toggles on button click', () => {
    const onToggle = jest.fn();
    toggle = shallow(<MenuToggle isMenuOpen={false} onToggle={onToggle} />);

    expect(onToggle).not.toHaveBeenCalled();
    clickButton();
    expect(onToggle).toHaveBeenCalled();
  });

  it('has aria expanded if menu is open', () => {
    toggle = shallow(<MenuToggle isMenuOpen={false} onToggle={jest.fn()} />);

    expect(ariaExpanded()).toBe(false);
    toggle.setProps({ isMenuOpen: true });
    expect(ariaExpanded()).toBe(true);
  });

  it('passes children to button', () => {
    toggle = shallow(
      <MenuToggle isMenuOpen={false} onToggle={jest.fn()}>
        <span>A toggle text</span>
      </MenuToggle>,
    );

    expect(buttonChildren()).toEqual(<span>A toggle text</span>);
  });

  function clickButton() {
    button().simulate('click');
  }

  function ariaExpanded() {
    return button().prop('aria-expanded');
  }

  function button() {
    return toggle.find('button');
  }

  function buttonChildren() {
    return button().prop('children');
  }
});
