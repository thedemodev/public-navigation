import React from 'react';
import { shallow } from 'enzyme';

import FooterBottom from '.';
import FooterBottomItem from './FooterBottomItem';

describe('Footer bottom', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <FooterBottom
        items={[
          { logo: true, link: '#logo-link' },
          { translationKey: 'first.key', link: '#first-link' },
          { translationKey: 'second.key', link: '#second-link' },
        ]}
      />,
    );
  });

  it('renders the logo', () => {
    expect(component.find('a.logo').exists()).toBe(true);
  });

  it('has items with links', () => {
    expect(getItemProps('link')).toEqual(['#first-link', '#second-link']);
  });

  it('has items with translation keys', () => {
    expect(getItemProps('translationKey')).toEqual(['first.key', 'second.key']);
  });

  it('passes inverse flag to all items', () => {
    expect(getItemProps('inverse')).toEqual([false, false]);
    component.setProps({ inverse: true });
    expect(getItemProps('inverse')).toEqual([true, true]);
  });

  function footerBottomItem() {
    return component.find(FooterBottomItem);
  }

  function getItemProps(name) {
    return footerBottomItem().map(item => item.prop(name));
  }
});
