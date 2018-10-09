import React from 'react';
import Types from 'prop-types';

import { Message } from 'retranslate';

const FooterTitle = ({ translationKey }) => (
  <h5 className="footer-title m-b-2">
    <Message>{translationKey}</Message>
  </h5>
);

FooterTitle.propTypes = {
  translationKey: Types.string.isRequired,
};

export default FooterTitle;
