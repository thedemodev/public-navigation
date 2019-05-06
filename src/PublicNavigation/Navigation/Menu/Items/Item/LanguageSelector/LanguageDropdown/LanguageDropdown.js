import React, { PureComponent } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import debounce from 'lodash.debounce';
import Header from '../../../../../Header';
import BackArrow from './BackArrow';
import Dropdown from '../../Dropdown';
import getTitleStringForLanguage from './languageSelectorTitles';

import './LanguageDropdown.less';

class LanguageDropdown extends PureComponent {
  static propTypes = {
    availableLanguages: Types.arrayOf(
      Types.shape({ value: Types.string.isRequired, label: Types.string.isRequired }),
    ).isRequired,
    language: Types.string.isRequired,
    onLanguageChange: Types.func.isRequired,
    onToggle: Types.func.isRequired,
    inverse: Types.bool,
  };

  static defaultProps = {
    inverse: false,
  };

  state = {
    hoverLanguage: this.props.language,
  };

  onLanguageHover = debounce(hoverLanguage => {
    this.setState({ hoverLanguage });
  }, 150);

  getLanguageTitles() {
    const { availableLanguages } = this.props;
    const { hoverLanguage } = this.state;

    return availableLanguages.map(({ value: language }) => {
      const shouldShow = language === hoverLanguage;
      return (
        <span
          className={classNames('language-dropdown-title colored-dot', { active: shouldShow })}
          key={language}
        >
          {getTitleStringForLanguage(language)}
        </span>
      );
    });
  }

  render() {
    const { availableLanguages, language, onLanguageChange, onToggle, inverse } = this.props;

    return (
      <Dropdown className="tw-public-navigation-menu__language-dropdown">
        <li className="dropdown-cta hidden-xs hidden-sm">
          <span className="h2 dropdown-content">{this.getLanguageTitles()}</span>
        </li>
        <li className="hidden-md hidden-lg hidden-xl">
          <Header isMenuOpen onToggle={onToggle} inverse={inverse}>
            <BackArrow />
          </Header>
        </li>
        {availableLanguages.map(({ value, label }) => (
          <li key={value} onMouseEnter={() => this.onLanguageHover(value)}>
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
  }
}

export default LanguageDropdown;
