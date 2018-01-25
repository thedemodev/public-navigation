import React from 'react';
import { PropTypes as Types } from 'prop-types';
import { Checkbox } from '@transferwise/components';

const PropControls = ({ inverse, onInverseChange }) => (
  <Checkbox
    label="Inverse"
    onChange={(checked) => {
      onInverseChange(checked);
    }}
    checked={inverse}
  />
);

PropControls.propTypes = {
  inverse: Types.bool.isRequired,
  onInverseChange: Types.func.isRequired,
};

export default PropControls;
