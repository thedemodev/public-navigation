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
      translationKey: Types.string,
      // Conditional propType via https://stackoverflow.com/a/47389109
      translatedText(props, propName, componentName) {
        const { translationKey, translatedText } = props;
        if (!translationKey && !translatedText) {
          return new Error(
            `${propName} is required when no translationKey is provided in ${componentName}.`,
          );
        }
        return null;
      },
    }),
  ).isRequired,
  mainCTA: Types.shape({}).isRequired,
  activePath: Types.string,
};

CardDropdown.defaultProps = {
  activePath: undefined,
};

export default CardDropdown;
