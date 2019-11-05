/* eslint-disable react/no-array-index-key */
import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import Item from './Item';

const Items = ({
  items,
  inverse,
  language,
  availableLanguages,
  onLanguageChange,
  activePath,
  isSubMenu,
}) => (
  <ul
    className={classNames('nav', 'navbar-nav', {
      'navbar--submenu-menu': isSubMenu,
      'navbar-right': !isSubMenu,
    })}
  >
    {items.map((item, index) => (
      <Item
        {...item}
        key={index}
        inverse={inverse}
        language={language}
        availableLanguages={availableLanguages}
        onLanguageChange={onLanguageChange}
        activePath={activePath}
        isInSubMenu={isSubMenu}
      />
    ))}
  </ul>
);

Items.propTypes = {
  items: Types.arrayOf(
    Types.oneOfType([
      Types.shape({
        translationKey: Types.string,
      }),
      Types.shape({
        translatedText: Types.string,
      }),
    ]),
  ).isRequired,
  inverse: Types.bool,
  language: Types.string.isRequired,
  availableLanguages: Types.arrayOf(Types.shape({})),
  onLanguageChange: Types.func,
  activePath: Types.string,
  isSubMenu: Types.bool,
};

Items.defaultProps = {
  inverse: false,
  availableLanguages: undefined,
  onLanguageChange: undefined,
  activePath: undefined,
  isSubMenu: false,
};

export default Items;
