import React from 'react';
import Types from 'prop-types';

import FooterTitle from './FooterTitle';
import FooterLinks from './FooterLinks';

const FooterTop = ({ sections }) => (
  <div className="row">
    {sections.map(({ titleTranslationKey, items }) => (
      <div className="col-md-3 text-xs-center text-md-left" key={titleTranslationKey}>
        <FooterTitle translationKey={titleTranslationKey} />
        <FooterLinks items={items} />
      </div>
    ))}
  </div>
);

FooterTop.propTypes = {
  sections: Types.arrayOf(
    Types.shape({
      titleTranslationKey: Types.string.isRequired,
      items: Types.arrayOf(Types.shape({})).isRequired,
    }),
  ).isRequired,
};

export default FooterTop;
