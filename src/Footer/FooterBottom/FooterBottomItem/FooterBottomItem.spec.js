import React from 'react';
import { shallow } from 'enzyme';

import FooterBottomItem from '.';
import FooterTextLink from '../../common/FooterTextLink';

describe('Footer bottom item', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FooterBottomItem link="" translationKey="" />);
  });

  describe('when logo item', () => {
    beforeEach(() => {
      component.setProps({
        logo: true,
      });
    });

    it('has inverse logo when the flag is passed', () => {
      expect(logoIsInverse()).toBe(false);
      component.setProps({ inverse: true });
      expect(logoIsInverse()).toBe(true);
    });

    it('has link', () => {
      component.setProps({ link: 'https://transferwise.com' });
      expect(logo().prop('href')).toBe('https://transferwise.com');
    });
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

  function logo() {
    return component.find('.logo');
  }

  function logoIsInverse() {
    return logo().hasClass('logo-inverse');
  }

  function footerTextLink() {
    return component.find(FooterTextLink);
  }
});
