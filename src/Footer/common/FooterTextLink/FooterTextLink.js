import React from 'react';
import Types from 'prop-types';
import { Message } from 'retranslate';

const FooterTextLink = ({ translationKey, link }) => (
  <a className="footer-link" href={link}>
    <Message>{translationKey}</Message>
  </a>
);

FooterTextLink.propTypes = {
  translationKey: Types.string.isRequired,
  link: Types.string.isRequired,
};

export default FooterTextLink;
