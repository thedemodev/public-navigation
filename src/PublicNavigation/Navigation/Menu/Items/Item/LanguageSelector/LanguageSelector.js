import React, { createRef } from 'react';
import Types from 'prop-types';

import ItemContent from '../ItemContent';
import getIcon from '../../../../../../common/icons';
import './LanguageSelector.less';
import LanguageDropdown from './LanguageDropdown';

const LanguageSelector = ({ language, availableLanguages, onLanguageChange }) => {
  const nodeRef = createRef();

  function handleClick() {
    nodeRef.current.focus();
    nodeRef.current.blur();
  }

  const languageLabel = language.substring(0, 2).toUpperCase();
  const itemContent = (
    <ItemContent translationKey={languageLabel} Icon={getIcon('globe')} hasCaret />
  );

  return (
    <li
      className="dropdown tw-public-navigation-menu__language-selector"
      tabIndex="-1"
      ref={nodeRef}
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
