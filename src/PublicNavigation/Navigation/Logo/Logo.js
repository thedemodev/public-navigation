import React from 'react';
import Types from 'prop-types';

import './Logo.less';

const DEFAULT_LINK = 'https://transferwise.com';

const Logo = ({ inverse, link, className, isMenuOpen }) => (
  <div className={`pull-xs-left tw-public-navigation__logo ${className}`}>
    <a
      href={link || DEFAULT_LINK}
      className={`logo-text${
        inverse || isMenuOpen ? ' logo-text-inverse' : ''
      } visible-xs-block visible-sm-block`}
    >
      <span className="sr-only">TransferWise</span>
    </a>
    <a href={link || DEFAULT_LINK} className="navbar-brand hidden-xs hidden-sm hidden-md m-b-1">
      TransferWise
    </a>
    <a href={link || DEFAULT_LINK} className="fast-flag flag-info visible-md-block">
      <span className="sr-only">TransferWise</span>
    </a>
  </div>
);

Logo.propTypes = {
  inverse: Types.bool,
  link: Types.string,
  className: Types.string,
  isMenuOpen: Types.bool,
};

Logo.defaultProps = {
  inverse: false,
  link: '',
  className: '',
  isMenuOpen: false,
};

export default Logo;
