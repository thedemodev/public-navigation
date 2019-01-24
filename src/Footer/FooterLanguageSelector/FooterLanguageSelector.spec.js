import React from 'react';
import { shallow } from 'enzyme';
import { Select } from '@transferwise/components';

import FooterLanguageSelector from '.';

describe('Footer Language Selector', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <FooterLanguageSelector
        language="en"
        availableLanguages={[{ value: '1', label: 'First' }, { value: '2', label: 'Second' }]}
        onLanguageChange={jest.fn()}
      />,
    );
  });

  it('is hidden when there are no available languages', () => {
    component.setProps({ availableLanguages: [] });

    expect(component.type()).toEqual(null);
  });

  it('is hidden when there is 1 available languages', () => {
    component.setProps({ availableLanguages: [{ value: 'only', label: 'one' }] });

    expect(component.type()).toEqual(null);
  });

  it('is hidden when there is no onLanguageChange function passed in', () => {
    component.setProps({ onLanguageChange: null });

    expect(component.type()).toEqual(null);
  });

  it('renders language message', () => {
    expect(component.find('span').exists()).toBe(true);
  });

  it('renders language selector', () => {
    expect(languageSelector().exists()).toBe(true);
  });

  it('calls onLanguageChange when language is changed', () => {
    const onLanguageChangeFunc = jest.fn();
    component.setProps({ onLanguageChange: onLanguageChangeFunc });
    expect(onLanguageChangeFunc).not.toBeCalled();

    languageSelector().simulate('change');
    expect(onLanguageChangeFunc).toBeCalledTimes(1);
  });

  it('selects 1st available language when wrong language is passed', () => {
    component.setProps({
      availableLanguages: [
        { value: '1', label: 'First' },
        { value: '2', label: 'Second' },
        { value: '3', label: 'Third' },
      ],
      language: '4',
    });

    expect(languageSelector().prop('selected')).toEqual({ value: '1', label: 'First' });
  });

  it('selects corresponding available language to language passed', () => {
    component.setProps({
      availableLanguages: [
        { value: '1', label: 'First' },
        { value: '2', label: 'Second' },
        { value: '3', label: 'Third' },
      ],
      language: '2',
    });

    expect(languageSelector().prop('selected')).toEqual({ value: '2', label: 'Second' });
  });

  function languageSelector() {
    return component.find(Select);
  }
});
