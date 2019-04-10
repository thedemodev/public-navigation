import React from 'react';
import { shallow } from 'enzyme';
import { Provider as TranslationProvider } from 'retranslate';
import getItems from './items';

import Footer from '.';
import { Locale } from '../common/l10n';
import MobileLogo from './MobileLogo';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import FooterSmall from './FooterSmall';

jest.mock('../common/i18n', () => ({ LANGUAGES: ['en', 'de'], messages: { some: 'keys' } }));
jest.mock('./items', () => jest.fn());

describe('Footer', () => {
  let component;
  beforeEach(() => {
    getItems.mockReturnValue({ top: [], bottom: [], small: [] });
    component = shallow(<Footer />);
  });

  it('passes the language to translation provider', () => {
    expect(component.find(TranslationProvider).prop('language')).toBe('en');
    component.setProps({ language: 'de' });
    expect(component.find(TranslationProvider).prop('language')).toBe('de');
  });

  it('passes the messages to translation provider', () => {
    expect(component.find(TranslationProvider).prop('messages')).toEqual({ some: 'keys' });
  });

  it('is inverse when the flag is passed', () => {
    expect(footerIsInverse()).toBe(false);
    component.setProps({ inverse: true });
    expect(footerIsInverse()).toBe(true);
  });

  it('proxies passed class names to the footer element', () => {
    expect(footer().hasClass('some-class')).toBe(false);
    component.setProps({ className: 'some-class' });
    expect(footer().hasClass('some-class')).toBe(true);
  });

  it('proxies passed props to the footer element', () => {
    expect(footer().prop('some-prop-like-analytics')).toBe(undefined);
    component.setProps({ 'some-prop-like-analytics': 'some-value' });
    expect(footer().prop('some-prop-like-analytics')).toBe('some-value');
  });

  it('passes mobile logo the locale', () => {
    expect(mobileLogo().prop('locale')).toBe(Locale.GB);
    component.setProps({ locale: Locale.DE });
    expect(mobileLogo().prop('locale')).toBe(Locale.DE);
  });

  it('passes mobile logo the inverse flag', () => {
    expect(mobileLogo().prop('inverse')).toBe(false);
    component.setProps({ inverse: true });
    expect(mobileLogo().prop('inverse')).toBe(true);
  });

  it('passes footer top the top sections', () => {
    getItems.mockReturnValue({
      top: [
        { titleTranslationKey: 'first title key', items: [] },
        { titleTranslationKey: 'second title key', items: [] },
      ],
      bottom: [],
      small: [],
    });
    component.rerender();

    expect(footerTop().prop('sections')).toEqual([
      { titleTranslationKey: 'first title key', items: [] },
      { titleTranslationKey: 'second title key', items: [] },
    ]);
  });

  it('passes footer bottom the bottom items', () => {
    getItems.mockReturnValue({
      top: [],
      bottom: [
        { translationKey: 'some key', link: '#some-link' },
        { translationKey: 'another key', link: '#another-link' },
      ],
      small: [],
    });
    component.rerender();

    expect(footerBottom().prop('items')).toEqual([
      { translationKey: 'some key', link: '#some-link' },
      { translationKey: 'another key', link: '#another-link' },
    ]);
  });

  it('passes footer bottom the inverse flag', () => {
    expect(footerBottom().prop('inverse')).toBe(false);
    component.setProps({ inverse: true });
    expect(footerBottom().prop('inverse')).toBe(true);
  });

  it('passes footer small the small items', () => {
    getItems.mockReturnValue({
      top: [],
      bottom: [],
      small: [{ translationKey: 'some key' }],
    });
    component.rerender();

    expect(footerSmall().prop('items')).toEqual([{ translationKey: 'some key' }]);
  });

  function footer() {
    return component.find('footer');
  }

  function footerIsInverse() {
    return footer().hasClass('footer-inverse');
  }

  function mobileLogo() {
    return component.find(MobileLogo);
  }

  function footerTop() {
    return component.find(FooterTop);
  }

  function footerBottom() {
    return component.find(FooterBottom);
  }

  function footerSmall() {
    return component.find(FooterSmall);
  }
});
