import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './Docs.less';

import { PublicNavigation, Footer, LANGUAGES, LOCALES } from '../src';
import PropControls from './PropControls';

class Docs extends Component {
  state = {
    inverse: true,
    language: LANGUAGES.includes('en') ? 'en' : LANGUAGES[0],
    locale: 'gb',
  };

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    const { inverse, language, locale } = this.state;
    return (
      <div>
        <div className={`navbar-background${inverse ? ' navbar-background--inverse' : ''}`} />

        <PublicNavigation inverse={inverse} language={language} locale={locale} />

        <div className="section">
          <div className="container">
            <PropControls
              inverse={inverse}
              onInverseChange={this.createStateLink('inverse')}
              languages={LANGUAGES}
              language={language}
              onLanguageChange={this.createStateLink('language')}
              locales={LOCALES}
              locale={locale}
              onLocaleChange={this.createStateLink('locale')}
            />
          </div>
        </div>

        <Footer inverse={inverse} language={language} locale={locale} />
      </div>
    );
  }
}

export default hot(module)(Docs);
