import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import FooterBottomItem from './FooterBottomItem';
import './FooterBottom.less';

const FooterBottom = ({ items, inverse }) => {
  const [logo, ...rest] = items;

  return (
    <div className="row m-b-5">
      <div className="col-md-3 text-xs-center text-md-left footer-title">
        <a
          className={classNames('logo logo-3 hidden-xs hidden-sm', {
            'logo-inverse': inverse,
          })}
          href={logo.link}
        >
          TransferWise
        </a>
      </div>
      <div className="col-md-6 footer-bottom-group">
        {rest.map(({ link, translationKey }) => (
          <div className="footer-bottom-item  text-xs-center text-md-left footer-title">
            <FooterBottomItem
              link={link}
              translationKey={translationKey}
              inverse={inverse}
              key={translationKey || link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

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
