import React from 'react';
import Types from 'prop-types';

import Dropdown from '../Dropdown';
import DropdownItem from './DropdownItem';

const CardDropdown = ({ items, mainCTA, activePath }) => (
  <Dropdown className="hidden-xs hidden-sm">
    <DropdownItem className="dropdown-cta" {...mainCTA} activePath={activePath} />
    {items.map(item => (
      <DropdownItem
        {...item}
        titleTranslationKey={item.translationKey}
        activePath={activePath}
        key={item.translationKey}
      />
    ))}
  </Dropdown>
);

CardDropdown.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      translationKey: Types.string.isRequired,
    }),
  ).isRequired,
  mainCTA: Types.shape({}).isRequired,
  activePath: Types.string,
};

CardDropdown.defaultProps = {
  activePath: undefined,
};

export default CardDropdown;
