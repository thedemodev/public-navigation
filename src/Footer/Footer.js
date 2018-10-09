import React, { StrictMode } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Provider as TranslationProvider } from 'retranslate';

import getItems from './items';
import { messages, LANGUAGES } from '../common/i18n';
import { Locale, LocaleValues } from '../common/l10n';
import FooterTop from './FooterTop';
import FooterDivider from './FooterDivider';
import FooterBottom from './FooterBottom';
import FooterSmall from './FooterSmall';
import MobileLogo from './MobileLogo';

import './Footer.less';

const Footer = ({ inverse, language, locale, className, ...otherProps }) => {
  const items = getItems(locale);
  const footerClass = classNames('footer p-y-section-5', className, {
    'footer-inverse': inverse,
  });

  return (
    <StrictMode>
      <TranslationProvider language={language} messages={messages}>
        <footer className={footerClass} {...otherProps}>
          <div className="container">
            <MobileLogo locale={locale} inverse={inverse} />
            <FooterTop sections={items.top} />
            <FooterDivider />
            <FooterBottom items={items.bottom} inverse={inverse} />
            <FooterSmall items={items.small} />
          </div>
        </footer>
      </TranslationProvider>
    </StrictMode>
  );
};

Footer.propTypes = {
  inverse: Types.bool,
  language: Types.oneOf(LANGUAGES),
  locale: Types.oneOf(LocaleValues),
  className: Types.string,
};

Footer.defaultProps = {
  inverse: false,
  language: 'en',
  locale: Locale.GB,
  className: '',
};

export default Footer;
