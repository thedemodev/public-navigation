import React from 'react';
import { PropTypes as Types } from 'prop-types';

const DEFAULT_LINK = 'https://transferwise.com';

const Logo = ({ inverse, link }) => (
  <div className="navbar-header pull-xs-left">
    <a
      href={link || DEFAULT_LINK}
      className={`logo-text${inverse ? ' logo-text-inverse' : ''} hidden-md hidden-lg hidden-xl`}
    >
      <span className="sr-only">TransferWise</span>
    </a>
    <a href={link || DEFAULT_LINK} className="navbar-brand visible-md visible-lg visible-xl">
      TransferWise
    </a>
  </div>
);

Logo.propTypes = {
  inverse: Types.bool,
  link: Types.string,
};

Logo.defaultProps = {
  inverse: false,
  link: '',
};

export default Logo;
