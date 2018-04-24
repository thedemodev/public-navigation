import React from 'react';
import Types from 'prop-types';
import { Checkbox, Select } from '@transferwise/components';

const PropControls = ({
  inverse,
  onInverseChange,
  languages,
  language,
  onLanguageChange,
  locales,
  locale,
  onLocaleChange,
}) => (
  <div className="row">
    <div className="col-md-4">
      <div className="form-group">
        <label className="control-label" htmlFor="inverse">
          Color
        </label>
        <Checkbox label="Inverse" name="inverse" onChange={onInverseChange} checked={inverse} />
      </div>
    </div>
    <div className="col-md-4">
      <div className="form-group">
        <label className="control-label" htmlFor="language">
          Language
        </label>

        <Select
          selected={{ value: language, label: language }}
          options={languages.map(lang => ({ value: lang, label: lang }))}
          onChange={selection => (selection ? onLanguageChange(selection.value) : () => {})}
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="form-group">
        <label className="control-label" htmlFor="locale">
          Locale
        </label>

        <Select
          selected={{ value: locale, label: locale }}
          options={locales.map(loc => ({ value: loc, label: loc }))}
          onChange={selection => (selection ? onLocaleChange(selection.value) : () => {})}
        />
      </div>
    </div>
  </div>
);

PropControls.propTypes = {
  inverse: Types.bool.isRequired,
  onInverseChange: Types.func.isRequired,
  languages: Types.arrayOf(Types.string).isRequired,
  language: Types.string.isRequired,
  onLanguageChange: Types.func.isRequired,
  locales: Types.arrayOf(Types.string).isRequired,
  locale: Types.string.isRequired,
  onLocaleChange: Types.func.isRequired,
};

export default PropControls;
