import React from 'react';
import Types from 'prop-types';
import requiredIf from 'react-required-if';

import Dropdown from '../Dropdown';
import DropdownItem from './DropdownItem';

const CardDropdown = ({ items, mainCTA, activePath }) => (
  <Dropdown className="hidden-xs hidden-sm">
    <DropdownItem className="dropdown-cta" {...mainCTA} activePath={activePath} />
    {items.map(item => (
      <DropdownItem
        {...item}
        titleTranslationKey={item.translationKey}
        titleTranslatedText={item.translatedText}
        activePath={activePath}
        key={item.translationKey ? item.translationKey : item.translatedText}
      />
    ))}
  </Dropdown>
);

CardDropdown.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      translationKey: requiredIf(Types.string, props => !props.translatedText),
      translatedText: requiredIf(Types.string, props => !props.translationKey),
    }),
  ).isRequired,
  mainCTA: Types.shape({}).isRequired,
  activePath: Types.string,
};

CardDropdown.defaultProps = {
  activePath: undefined,
};

export default CardDropdown;
