import React from 'react';
import Types from 'prop-types';

const DEFAULT_LINK = 'https://transferwise.com';

const Logo = ({ inverse, link }) => (
  <div className="navbar-header pull-xs-left">
    <a
      href={link || DEFAULT_LINK}
      className={`logo-text${
        inverse ? ' logo-text-inverse' : ''
      } visible-xs-block visible-sm-block`}
    >
      <span className="sr-only">TransferWise</span>
    </a>
    <a href={link || DEFAULT_LINK} className="navbar-brand hidden-md hidden-sm hidden-xs">
      TransferWise
    </a>
    <a href={link || DEFAULT_LINK} className="flag flag-info visible-md-block">
      <span className="sr-only">TransferWise</span>
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
