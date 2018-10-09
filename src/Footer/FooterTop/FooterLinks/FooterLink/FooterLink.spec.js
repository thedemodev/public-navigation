import React from 'react';
import { shallow } from 'enzyme';

import FooterLink from '.';
import FooterIconLink from './FooterIconLink';
import FooterTextLink from '../../../common/FooterTextLink';

describe('Footer link', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FooterLink icons={[]} link="" />);
  });

  describe('when has icons', () => {
    const FirstIcon = () => {};
    const SecondIcon = () => {};
    beforeEach(() => {
      component.setProps({
        icons: [
          { link: '#first-link', Icon: FirstIcon },
          { link: '#second-link', Icon: SecondIcon, external: true },
        ],
      });
    });

    it('has icon links', () => {
      expect(iconLinks().length).toBe(2);
    });

    it('does not have text link', () => {
      expect(textLink().exists()).toBe(false);
    });

    it('passes links to icon links', () => {
      expect(iconLinkValuesForProp('link')).toEqual(['#first-link', '#second-link']);
    });

    it('passes external flags to icon links', () => {
      expect(iconLinkValuesForProp('external')).toEqual([false, true]);
    });

    it('passes icon components to icon links', () => {
      expect(iconLinkValuesForProp('Icon')).toEqual([FirstIcon, SecondIcon]);
    });
  });

  describe('when does not have icons', () => {
    beforeEach(() => {
      component.setProps({
        icons: null,
        link: '#some-link',
        translationKey: 'some.key',
      });
    });

    it('does not have icon links', () => {
      expect(iconLinks().length).toBe(0);
    });

    it('has text link', () => {
      expect(textLink().exists()).toBe(true);
    });

    it('passes text link the link', () => {
      expect(textLink().prop('link')).toBe('#some-link');
    });

    it('passes text link the translation key', () => {
      expect(textLink().prop('translationKey')).toBe('some.key');
    });
  });

  function iconLinks() {
    return component.find(FooterIconLink);
  }

  function textLink() {
    return component.find(FooterTextLink);
  }

  function iconLinkValuesForProp(name) {
    return iconLinks().map(link => link.prop(name));
  }
});
