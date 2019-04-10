import React from 'react';
import Types from 'prop-types';

import ItemContent from '../ItemContent';
import getIcon from '../../../../../../common/icons';
import './LanguageSelector.less';
import LanguageDropdown from './LanguageDropdown';

const LanguageSelector = ({ language, availableLanguages, onLanguageChange }) => {
  let node;

  function handleClick() {
    node.focus();
    node.blur();
  }

  const languageLabel = language.substring(0, 2).toUpperCase();
  const itemContent = (
    <ItemContent translationKey={languageLabel} Icon={getIcon('globe')} hasCaret />
  );

  return (
    <li
      className="dropdown hidden-md tw-public-navigation-menu__language-selector"
      tabIndex="-1"
      ref={ref => {
        node = ref;
      }}
    >
      <button className="dropdown-toggle link-callout" type="button">
        {itemContent}
      </button>
      <LanguageDropdown
        onToggle={() => handleClick()}
        language={language}
        availableLanguages={availableLanguages}
        onLanguageChange={onLanguageChange}
      />
    </li>
  );
};

LanguageSelector.propTypes = {
  language: Types.string.isRequired,
  availableLanguages: Types.arrayOf(Types.shape({})).isRequired,
  onLanguageChange: Types.func.isRequired,
};

export default LanguageSelector;
