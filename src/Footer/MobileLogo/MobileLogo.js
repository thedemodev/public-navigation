import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import { Locale, LocaleValues } from '../../common/l10n';

const MobileLogo = ({ locale, inverse }) => {
  const logoLink = `https://transferwise.com/${locale === Locale.GB ? '' : locale}`;

  return (
    <a
      href={logoLink}
      className={classNames('logo logo-3 center-block m-b-4 hidden-md hidden-lg hidden-xl', {
        'logo-inverse': inverse,
      })}
    >
      TransferWise
    </a>
  );
};

MobileLogo.propTypes = {
  locale: Types.oneOf(LocaleValues),
  inverse: Types.bool,
};

MobileLogo.defaultProps = {
  locale: Locale.GB,
  inverse: false,
};

export default MobileLogo;
