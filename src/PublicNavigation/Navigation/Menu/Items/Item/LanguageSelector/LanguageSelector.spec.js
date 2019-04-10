import React from 'react';
import { shallow, mount } from 'enzyme';

import LanguageSelector from '.';
import getIcon from '../../../../../../common/icons';
import LanguageDropdown from './LanguageDropdown';

jest.mock('./LanguageDropdown', () => jest.fn());
jest.mock('../../../../../../common/icons', () => jest.fn());

const props = {
  language: 'some longer string to handle en_US maybe',
  availableLanguages: [{ value: 'no', label: 'yes' }],
  onLanguageChange: () => {},
};

describe('Language selector', () => {
  let languageSelector;
  const fakeIcon = () => 'globe';
  beforeEach(() => {
    jest.resetAllMocks();
    getIcon.mockReturnValue(fakeIcon);
    LanguageDropdown.mockReturnValue(() => <div>language dropdown</div>);

    languageSelector = shallow(<LanguageSelector {...props} />);
  });

  it('renders item content inside a button', () => {
    expect(itemContent().prop('translationKey')).toEqual('SO');
    expect(itemContent().prop('Icon')).toBe(fakeIcon);
    expect(itemContent().prop('hasCaret')).toBe(true);
  });

  it('renders dropdown with correct props', () => {
    expect(languageDropdown().prop('language')).toBe(props.language);
    expect(languageDropdown().prop('availableLanguages')).toBe(props.availableLanguages);
    expect(languageDropdown().prop('onLanguageChange')).toBe(props.onLanguageChange);
  });

  it('de-focuses the list item when onToggle is called from dropdown', () => {
    languageSelector = mount(<LanguageSelector {...props} />);

    const focusTarget = languageSelector.getDOMNode();
    focusTarget.focus = jest.fn();
    focusTarget.blur = jest.fn();

    languageDropdown().prop('onToggle')();

    expect(focusTarget.focus).toHaveBeenCalled();
    expect(focusTarget.blur).toHaveBeenCalled();
  });

  function languageDropdown() {
    return languageSelector.find(LanguageDropdown);
  }

  function itemContent() {
    return button().find('ItemContent');
  }

  function button() {
    return languageSelector.find('button');
  }
});
