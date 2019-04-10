import React from 'react';
import { shallow } from 'enzyme';

import CardDropdown from '.';

describe('CardDropdown', () => {
  let cardDropdown;
  beforeEach(() => {
    cardDropdown = shallow(
      <CardDropdown
        items={[
          { translationKey: 'hey', link: 'link' },
          { translationKey: 'hey hey', link: 'link' },
        ]}
        mainCTA={{ titleTranslationKey: 'hey 2', test: 'test', link: 'test' }}
      />,
    );
  });

  it('passes mainCTA to dropdown cta', () => {
    expect(dropdownCTA().prop('titleTranslationKey')).toBe('hey 2');
    expect(dropdownCTA().prop('test')).toBe('test');
  });

  it('renders dropdown items', () => {
    expect(dropdownItems()).toHaveLength(3);
  });

  it('passes item params to dropdown item', () => {
    expect(dropdownItemProps('titleTranslationKey')).toEqual(['hey 2', 'hey', 'hey hey']);
    expect(dropdownItemProps('link')).toEqual(['test', 'link', 'link']);
  });

  function dropdownCTA() {
    return cardDropdown.find('DropdownItem.dropdown-cta');
  }

  function dropdownItems() {
    return cardDropdown.find('DropdownItem');
  }

  function dropdownItemProps(prop) {
    return cardDropdown.find('DropdownItem').map(item => item.prop(prop));
  }
});
