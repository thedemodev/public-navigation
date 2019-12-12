import React from 'react';
import { shallow } from 'enzyme';

import FooterBottomItem from '.';
import FooterTextLink from '../../common/FooterTextLink';

describe('Footer bottom item', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FooterBottomItem link="" translationKey="" />);
  });

  describe('when text item', () => {
    beforeEach(() => {
      component.setProps({
        translationKey: 'some.key',
      });
    });

    it('has link', () => {
      component.setProps({ link: '#a-link' });
      expect(footerTextLink().prop('link')).toBe('#a-link');
    });

    it('has text', () => {
      expect(footerTextLink().prop('translationKey')).toBe('some.key');
    });
  });

  function footerTextLink() {
    return component.find(FooterTextLink);
  }
});
