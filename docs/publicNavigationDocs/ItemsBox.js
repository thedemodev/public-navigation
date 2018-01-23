/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import { PropTypes as Types } from 'prop-types';

const ItemsBox = ({ itemsJSON, onChange, isValid }) => (
  <div className={`items-box form-group ${isValid ? 'has-success' : 'has-error'}`}>
    <label className="control-label" htmlFor="itemsBox">
      JSON for items
    </label>
    <textarea id="itemsBox" className="form-control" rows="10" onChange={onChange}>
      {itemsJSON}
    </textarea>
  </div>
);

ItemsBox.propTypes = {
  itemsJSON: Types.string.isRequired,
  onChange: Types.func.isRequired,
  isValid: Types.bool.isRequired,
};

export default ItemsBox;
