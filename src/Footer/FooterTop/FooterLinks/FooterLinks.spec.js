import React from 'react';
import { shallow } from 'enzyme';

import FooterLinks from '.';
import FooterLink from './FooterLink/FooterLink';

const MockIcon = () => {};

describe('Footer links', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FooterLinks items={[]} />);
  });

  it('passes link components icons', () => {
    component.setProps({
      items: [
        { icons: [{ some: 'links', link: '#icon-link', Icon: MockIcon }] },
        { translationKey: 'some.key', link: '#link' },
      ],
    });

    expect(linkValuesForProp('icons')).toEqual([
      [{ some: 'links', link: '#icon-link', Icon: MockIcon }],
      null,
    ]);
  });

  it('passes link components links', () => {
    component.setProps({
      items: [
        { translationKey: 'some.key', link: '#some-link' },
        { translationKey: 'another.key', link: '#another-link' },
      ],
    });

    expect(linkValuesForProp('link')).toEqual(['#some-link', '#another-link']);
  });

  it('passes link components translation keys', () => {
    component.setProps({
      items: [
        { translationKey: 'some.key', link: '#some-link' },
        { translationKey: 'another.key', link: '#another-link' },
      ],
    });

    expect(linkValuesForProp('translationKey')).toEqual(['some.key', 'another.key']);
  });

  function linkValuesForProp(name) {
    return component.find(FooterLink).map(link => link.prop(name));
  }
});
