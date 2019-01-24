import React from 'react';
import Types from 'prop-types';
import { Message } from 'retranslate';
import { Select } from '@transferwise/components';

const FooterLanguageSelector = ({ language, availableLanguages, onLanguageChange, inverse }) => {
  if (availableLanguages.length <= 1 || !onLanguageChange) {
    return null;
  }

  return (
    <div className="row text-xs-center">
      <span className="footer-title m-r-1">
        <Message>footer.language</Message>
      </span>
      <Select
        required
        dropdownUp
        size="sm"
        onChange={onLanguageChange}
        selected={selectedLanguage(language, availableLanguages)}
        options={availableLanguages}
        block={false}
        inverse={inverse}
      />
    </div>
  );
};

function selectedLanguage(language, availableLanguages) {
  return availableLanguages.find(lang => lang.value === language) || availableLanguages[0];
}

FooterLanguageSelector.propTypes = {
  language: Types.string.isRequired,
  availableLanguages: Types.arrayOf(Types.shape({ value: Types.string, label: Types.string }))
    .isRequired,
  onLanguageChange: Types.func,
  inverse: Types.bool.isRequired,
};

FooterLanguageSelector.defaultProps = {
  onLanguageChange: null,
};

export default FooterLanguageSelector;
