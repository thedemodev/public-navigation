import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import FooterTextLink from '../../common/FooterTextLink';

const FooterBottomItem = ({ logo, link, translationKey, inverse }) => (
  <div className="col-md-3 text-xs-center text-md-left footer-title">
    {logo ? (
      <a
        className={classNames('logo logo-3 hidden-xs hidden-sm', {
          'logo-inverse': inverse,
        })}
        href={link}
      >
        TransferWise
      </a>
    ) : (
      <FooterTextLink translationKey={translationKey} link={link} />
    )}
  </div>
);

FooterBottomItem.propTypes = {
  logo: Types.bool,
  link: Types.string.isRequired,
  translationKey: Types.string,
  inverse: Types.bool,
};

FooterBottomItem.defaultProps = {
  logo: false,
  translationKey: null,
  inverse: false,
};

export default FooterBottomItem;
