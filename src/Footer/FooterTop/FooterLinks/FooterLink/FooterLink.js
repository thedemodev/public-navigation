import React from 'react';
import Types from 'prop-types';

import FooterIconLink from './FooterIconLink';
import FooterTextLink from '../../../common/FooterTextLink';

const FooterLink = ({ icons, link, translationKey }) => (
  <li>
    {icons ? (
      icons.map(({ link: iconLink, external, Icon }) => (
        <FooterIconLink link={iconLink} external={external} Icon={Icon} key={iconLink} />
      ))
    ) : (
      <FooterTextLink translationKey={translationKey} link={link} />
    )}
  </li>
);

FooterLink.propTypes = {
  icons: Types.arrayOf(
    Types.shape({
      link: Types.string.isRequired,
      external: Types.bool,
      Icon: Types.func.isRequired,
    }).isRequired,
  ),
  link: Types.string,
  translationKey: Types.string,
};

FooterLink.defaultProps = {
  icons: null,
  translationKey: null,
  link: null,
};

export default FooterLink;
