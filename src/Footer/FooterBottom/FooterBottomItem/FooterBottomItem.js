import React from 'react';
import Types from 'prop-types';

import FooterTextLink from '../../common/FooterTextLink';

const FooterBottomItem = ({ link, translationKey }) => (
  <FooterTextLink translationKey={translationKey} link={link} />
);

FooterBottomItem.propTypes = {
  link: Types.string.isRequired,
  translationKey: Types.string,
};

FooterBottomItem.defaultProps = {
  translationKey: null,
};

export default FooterBottomItem;
