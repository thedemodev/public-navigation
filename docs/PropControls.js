import React from 'react';
import Types from 'prop-types';
import { Checkbox } from '@transferwise/components';

const PropControls = ({ inverse, onInverseChange, logoLink, onLogoLinkChange }) => (
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label className="control-label" htmlFor="inverse">
          Color
        </label>
        <Checkbox label="Inverse" name="inverse" onChange={onInverseChange} checked={inverse} />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label className="control-label" htmlFor="logoLink">
          Logo link
        </label>
        <input
          type="text"
          value={logoLink}
          onChange={event => onLogoLinkChange(event.target.value)}
          placeholder="Logo link"
          className="form-control"
          id="logoLink"
        />
      </div>
    </div>
  </div>
);

PropControls.propTypes = {
  inverse: Types.bool.isRequired,
  onInverseChange: Types.func.isRequired,
  logoLink: Types.string.isRequired,
  onLogoLinkChange: Types.func.isRequired,
};

export default PropControls;
