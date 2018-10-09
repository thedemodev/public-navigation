import React from 'react';
import Types from 'prop-types';

import FooterLink from './FooterLink';

const FooterLinks = ({ items }) => (
  <ul className="list-unstyled">
    {items.map(({ icons, link, translationKey }) => (
      <FooterLink
        icons={icons}
        link={link}
        translationKey={translationKey}
        key={icons && icons.length ? icons[0].link : translationKey}
      />
    ))}
  </ul>
);

FooterLinks.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      icons: Types.arrayOf(Types.shape({}).isRequired),
      link: Types.string,
      translationKey: Types.string,
    }).isRequired,
  ).isRequired,
};

export default FooterLinks;
