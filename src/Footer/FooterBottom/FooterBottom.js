import React from 'react';
import Types from 'prop-types';
import FooterBottomItem from './FooterBottomItem';

const FooterBottom = ({ items, inverse }) => (
  <div className="row m-b-5">
    {items.map(({ logo, link, translationKey }) => (
      <FooterBottomItem
        logo={logo}
        link={link}
        translationKey={translationKey}
        inverse={inverse}
        key={translationKey || link}
      />
    ))}
  </div>
);

FooterBottom.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      logo: Types.bool,
      link: Types.string.isRequired,
      translationKey: Types.string,
    }).isRequired,
  ).isRequired,
  inverse: Types.bool,
};

FooterBottom.defaultProps = {
  inverse: false,
};

export default FooterBottom;
