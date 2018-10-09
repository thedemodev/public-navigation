import React from 'react';
import Types from 'prop-types';

const FooterIconLink = ({ link, external, Icon }) => (
  <a
    href={link}
    className="link-icon"
    target={external ? '_blank' : undefined}
    rel="noopener noreferrer"
  >
    <Icon />
  </a>
);

FooterIconLink.propTypes = {
  link: Types.string.isRequired,
  external: Types.bool,
  Icon: Types.func.isRequired,
};

FooterIconLink.defaultProps = {
  external: false,
};

export default FooterIconLink;
