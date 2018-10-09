import React from 'react';
import { shallow } from 'enzyme';

import FooterTop from '.';
import FooterTitle from './FooterTitle';
import FooterLinks from './FooterLinks';

describe('Footer top', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <FooterTop
        sections={[
          {
            titleTranslationKey: 'first.title',
            items: [{ translationKey: 'some.key', link: '#some-link' }],
          },
          {
            titleTranslationKey: 'second.title',
            items: [{ translationKey: 'another.key', link: '#another-link' }],
          },
        ]}
      />,
    );
  });

  it('has footer titles with translation keys', () => {
    expect(footerTitleValuesForProp('translationKey')).toEqual(['first.title', 'second.title']);
  });

  it('has footer links components with items', () => {
    expect(footerLinksValuesForProp('items')).toEqual([
      [{ translationKey: 'some.key', link: '#some-link' }],
      [{ translationKey: 'another.key', link: '#another-link' }],
    ]);
  });

  function footerTitleValuesForProp(name) {
    return componentValuesForProp(FooterTitle, name);
  }

  function footerLinksValuesForProp(name) {
    return componentValuesForProp(FooterLinks, name);
  }

  function componentValuesForProp(comp, prop) {
    return component.find(comp).map(title => title.prop(prop));
  }
});
