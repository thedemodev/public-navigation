import React from 'react';
import Types from 'prop-types';
import { Message } from 'retranslate';

import './FooterSmall.less';

const FooterSmall = ({ items }) => (
  <div className="row text-xs-center m-t-5">
    <div className="col-xs-12 col-md-8 col-md-offset-2">
      {items.map(({ translationKey }) => (
        <p className="tiny" key={translationKey}>
          <Message
            dangerouslyTranslateInnerHTML={translationKey}
            params={{ year: new Date().getFullYear() }}
          />
        </p>
      ))}
    </div>
  </div>
);
FooterSmall.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      translationKey: Types.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FooterSmall;
