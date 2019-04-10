import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Message } from 'retranslate';

import Header from '../../../../../Header';
import BackArrow from './BackArrow';
import Dropdown from '../../Dropdown';

import './LanguageDropdown.less';

const LanguageDropdown = ({
  availableLanguages,
  language,
  onLanguageChange,
  onToggle,
  inverse,
}) => (
  <Dropdown className="tw-public-navigation-menu__language-dropdown">
    <li className="dropdown-cta hidden-xs hidden-sm hidden">
      <h2 className="dropdown-content">
        <Message dangerouslyTranslateInnerHTML="public-navigation.language-selector.title" />
      </h2>
    </li>
    <li className="hidden-md hidden-lg hidden-xl">
      <Header isMenuOpen onToggle={onToggle} inverse={inverse}>
        <BackArrow />
      </Header>
    </li>
    {availableLanguages.map(({ value, label }) => (
      <li key={value}>
        <button
          type="button"
          className="btn dropdown-content"
          onClick={() => onLanguageChange({ value, label })}
        >
          <strong className={classNames({ 'text-info': language === value })}>{label}</strong>
          {language === value && (
            <span className="text-info glyphicon glyphicon-ok pull-xs-right pull-md-none" />
          )}
        </button>
      </li>
    ))}
  </Dropdown>
);

LanguageDropdown.propTypes = {
  availableLanguages: Types.arrayOf(
    Types.shape({ value: Types.string.isRequired, label: Types.string.isRequired }),
  ).isRequired,
  language: Types.string.isRequired,
  onLanguageChange: Types.func.isRequired,
  onToggle: Types.func.isRequired,
  inverse: Types.bool,
};

LanguageDropdown.defaultProps = {
  inverse: false,
};

export default LanguageDropdown;
