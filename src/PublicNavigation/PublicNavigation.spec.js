import React from 'react';
import { shallow } from 'enzyme';

import PublicNavigation from './PublicNavigation';
import { getItems, getButtonItems } from './items';

jest.mock('./items', () => ({ getItems: jest.fn(), getButtonItems: jest.fn() }));
jest.mock('../common/i18n', () => ({
  messages: {},
  LANGUAGES: [],
}));

describe('PublicNavigation', () => {
  let publicNavigation;

  afterEach(jest.resetAllMocks);

  it('gets items for gb locale by default', () => {
    expect(getItems).not.toBeCalled();
    publicNavigation = shallow(<PublicNavigation language="gb" />);
    expect(getItems).toBeCalledWith('gb', false, false, []);
  });

  it('gets items for passed locale', () => {
    expect(getItems).not.toBeCalled();
    publicNavigation = shallow(<PublicNavigation language="gb" locale="br" />);
    expect(getItems).toBeCalledWith('br', false, false, []);
  });

  it('passes items to navigation', () => {
    getItems.mockReturnValue([{}, {}, {}]);

    publicNavigation = shallow(<PublicNavigation language="gb" />);

    expect(navigation().prop('items')).toEqual([{}, {}, {}]);
  });

  it('passes that it should have inverse colors to navigation by default', () => {
    publicNavigation = shallow(<PublicNavigation language="gb" />);

    expect(navigation().prop('inverse')).toBe(true);
  });

  it('passes that it should not have inverse colors to navigation if specified', () => {
    publicNavigation = shallow(<PublicNavigation language="gb" inverse={false} />);

    expect(navigation().prop('inverse')).toBe(false);
  });

  it('passes available languages to navigation', () => {
    const availableLanguages = [{ value: 'un', label: 'unicorn' }];
    publicNavigation = shallow(
      <PublicNavigation language="gb" availableLanguages={availableLanguages} />,
    );

    expect(navigation().prop('availableLanguages')).toBe(availableLanguages);
  });

  it('passes language change handler to navigation', () => {
    const onLanguageChange = () => {};
    publicNavigation = shallow(
      <PublicNavigation language="gb" onLanguageChange={onLanguageChange} />,
    );

    expect(navigation().prop('onLanguageChange')).toBe(onLanguageChange);
  });

  it('passes button items to navigation', () => {
    getButtonItems.mockReturnValue([{}, {}, {}]);

    publicNavigation = shallow(<PublicNavigation language="gb" />);

    expect(navigation().prop('buttonItems')).toEqual([{}, {}, {}]);
  });

  it('passes className prop to Navigation', () => {
    publicNavigation = shallow(<PublicNavigation language="gb" className="heyy" />);

    expect(navigation().prop('className')).toEqual('heyy');
  });

  it('passes subnavItems prop to Navigation', () => {
    publicNavigation = shallow(<PublicNavigation language="gb" subnavItems={[{}, {}, {}]} />);

    expect(navigation().prop('subnavItems')).toEqual([{}, {}, {}]);
  });

  it('passes revealed ID list to getItems', () => {
    const revealedItems = ['sorry', 'Dave'];
    publicNavigation = shallow(
      <PublicNavigation language="gb" revealHiddenItemsList={revealedItems} />,
    );
    expect(getItems).toBeCalledWith('gb', false, false, revealedItems);
  });

  function navigation() {
    return publicNavigation.find('Navigation');
  }
});
