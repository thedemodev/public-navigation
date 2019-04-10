import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from '.';

const props = {
  className: 'what',
};

const Children = () => <div />;

describe('Dropdown', () => {
  let dropdown;

  it('renders unordered list', () => {
    dropdown = shallow(
      <Dropdown {...props}>
        <Children />
      </Dropdown>,
    );

    expect(dropdown.find('ul').exists()).toBe(true);
  });

  it('renders any children inside the ul', () => {
    dropdown = shallow(
      <Dropdown {...props}>
        <Children />
      </Dropdown>,
    );

    expect(dropdown.find('ul').prop('children')).toEqual(<Children />);
  });
});
