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

  it('has items with logos', () => {
    expect(getItemProps('logo')).toEqual([true, false, false]);
  });

  it('has items with links', () => {
    expect(getItemProps('link')).toEqual(['#logo-link', '#first-link', '#second-link']);
  });

  it('has items with translation keys', () => {
    expect(getItemProps('translationKey')).toEqual([null, 'first.key', 'second.key']);
  });

  it('passes inverse flag to all items', () => {
    expect(getItemProps('inverse')).toEqual([false, false, false]);
    component.setProps({ inverse: true });
    expect(getItemProps('inverse')).toEqual([true, true, true]);
  });

  function footerBottomItem() {
    return component.find(FooterBottomItem);
  }

  function getItemProps(name) {
    return footerBottomItem().map(item => item.prop(name));
  }
});
