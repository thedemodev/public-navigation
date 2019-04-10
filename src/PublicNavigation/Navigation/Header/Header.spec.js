import React from 'react';
import { shallow } from 'enzyme';

import Header from '.';

const props = {
  onToggle: () => {},
  isMenuOpen: true,
};

describe('Header', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header {...props} />);
  });

  it('renders menu toggle with correct props', () => {
    const onToggle = () => {};

    component.setProps({
      onToggle,
    });
    expect(menuToggle().prop('isMenuOpen')).toBe(true);
    expect(menuToggle().prop('onToggle')).toBe(onToggle);
  });

  it('renders children inside menu toggle', () => {
    component = shallow(<Header {...props}>hello</Header>);

    expect(menuToggle().prop('children')).toBe('hello');
  });

  it('renders logo with correct props', () => {
    component.setProps({
      className: 'test-class-name',
      inverse: true,
      logoLink: 'yes',
    });
    expect(logo().prop('className')).toContain('test-class-name');
    expect(logo().prop('inverse')).toBe(true);
    expect(logo().prop('link')).toBe('yes');
    expect(logo().prop('isMenuOpen')).toBe(true);
  });

  it('renders button items if provided', () => {
    expect(buttonItems().exists()).toBe(false);

    component.setProps({
      buttonItems: [{ translationKey: 'key', link: 'link' }],
    });

    expect(buttonItems().exists()).toBe(true);
    expect(
      buttonItems()
        .first()
        .prop('translationKey'),
    ).toBe('key');
    expect(
      buttonItems()
        .first()
        .prop('link'),
    ).toBe('link');
    expect(
      buttonItems()
        .first()
        .prop('inverse'),
    ).toBe(false);
  });

  function menuToggle() {
    return component.find('MenuToggle');
  }

  function logo() {
    return component.find('Logo');
  }

  function buttonItems() {
    return component.find('ButtonItem');
  }
});
