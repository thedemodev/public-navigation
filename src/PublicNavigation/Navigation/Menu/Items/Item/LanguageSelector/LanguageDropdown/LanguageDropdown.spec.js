import React from 'react';
import { shallow } from 'enzyme';
import BackArrow from './BackArrow';

import LanguageDropdown from '.';

jest.mock('./languageSelectorTitles', () => lang => `title for ${lang}`);

const props = {
  availableLanguages: [{ value: 'test', label: 'random' }, { value: 'where', label: 'am.i' }],
  language: 'test',
  onLanguageChange: jest.fn(),
  onToggle: jest.fn(),
  inverse: false,
};

describe('LanguageDropdown', () => {
  let languageDropdown;
  beforeEach(() => {
    languageDropdown = shallow(<LanguageDropdown {...props} />);
  });

  it('renders the correct CTA title', () => {
    expect(ctaTitle().text()).toBe('title for test');

    languageDropdown.setState({ hoverLanguage: 'where' });

    expect(ctaTitle().text()).toBe('title for where');
  });

  it('renders header as a list item', () => {
    expect(header().prop('isMenuOpen')).toBe(true);
    expect(header().prop('onToggle')).toBe(props.onToggle);
    expect(header().prop('inverse')).toBe(false);
  });

  it('header renders the back arrow inside it', () => {
    expect(header().prop('children')).toEqual(<BackArrow />);
  });

  it('lists all available language options', () => {
    expect(listItems()).toHaveLength(props.availableLanguages.length + 2);
    expect(languageOptionButtons()).toHaveLength(props.availableLanguages.length);
  });

  it('language options display label', () => {
    languageOptionButtons().forEach((button, index) => {
      expect(button.find('strong').text()).toBe(props.availableLanguages[index].label);
    });
  });

  it('changes language when clicked', () => {
    languageOptionButtons().forEach((button, index) => {
      button.simulate('click');
      expect(props.onLanguageChange).toHaveBeenCalledWith(props.availableLanguages[index]);
    });
  });

  it('shows a checkmark next to the label if language is active', () => {
    languageOptionButtons().forEach((button, index) => {
      const isActive = props.language === props.availableLanguages[index].value;
      expect(button.find('.glyphicon-ok').exists()).toBe(isActive);
    });
  });

  function ctaTitle() {
    return languageDropdown.find('.language-dropdown-title.active');
  }

  function header() {
    return languageDropdown.find('li Header');
  }

  function listItems() {
    return languageDropdown.find('li');
  }

  function languageOptionButtons() {
    return languageDropdown.find('li button.dropdown-content');
  }
});
