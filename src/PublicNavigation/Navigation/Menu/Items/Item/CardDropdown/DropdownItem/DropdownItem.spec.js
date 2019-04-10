import React from 'react';
import { shallow } from 'enzyme';

import DropdownItem from '.';

describe('DropdownItem', () => {
  let item;

  beforeEach(() => {
    item = shallow(
      <DropdownItem
        titleTranslationKey="send.moneys"
        link="https://transferwise.com/bisnes"
        descriptionTranslationKey="hey.hey"
        image="imageSrc"
      />,
    );
  });

  it('has text', () => {
    expect(text()).toBe('send.moneys');
  });

  it('shows the provided link with the correct target', () => {
    expect(anchor().prop('target')).toBeUndefined();
    expect(anchor().prop('href')).toBe('https://transferwise.com/bisnes');
    item.setProps({ link: '#test' });
    expect(anchor().prop('target')).toBe('_self');
    expect(anchor().prop('href')).toBe('#test');
  });

  it('does not have self as target if link does not start with hash', () => {
    expect(anchor().prop('target')).toBeFalsy();
  });

  it('adds self as target if link starts with hash', () => {
    item = shallow(<DropdownItem titleTranslationKey="same.page.link" link="#same-page-link" />);

    expect(anchor().prop('target')).toBe('_self');
  });

  it('does not have badge if not specified', () => {
    expect(badge().exists()).toBe(false);
  });

  it('has badge', () => {
    item = shallow(
      <DropdownItem
        titleTranslationKey="send.moneys"
        link="https://transferwise.com/bisnes"
        badge="new"
      />,
    );

    expect(badge().exists()).toBe(true);
  });

  it('passes className to first DOM element', () => {
    item = shallow(
      <DropdownItem
        titleTranslationKey="send.moneys"
        link="https://transferwise.com/bisnes"
        className="classy"
      />,
    );

    expect(item.prop('className')).toEqual('classy');
  });

  it('shows a description', () => {
    expect(description()).toBe('hey.hey');
  });

  it('shows the provided image', () => {
    expect(image().prop('src')).toBe('imageSrc');
  });

  it('is active when link matches with active path', () => {
    expect(
      anchor()
        .find('strong')
        .hasClass('text-info'),
    ).toBe(false);

    item = shallow(
      <DropdownItem
        titleTranslationKey="send.moneys"
        link="https://transferwise.com/bisnes"
        className="classy"
        activePath="https://transferwise.com/bisnes"
      />,
    );

    expect(
      anchor()
        .find('strong')
        .hasClass('text-info'),
    ).toBe(true);
  });

  function text() {
    return anchor()
      .find('strong')
      .children()
      .html();
  }
  function description() {
    return item
      .find('p')
      .children()
      .html();
  }

  function anchor() {
    return item.find('a');
  }

  function badge() {
    return item.find('Badge');
  }

  function image() {
    return item.find('img');
  }
});
