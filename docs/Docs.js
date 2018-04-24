import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './Docs.less';

import PublicNavigation, { LANGUAGES } from '../src';
import PropControls from './PropControls';
import LOCALES from './locales';

class Docs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inverse: true,
      language: LANGUAGES.includes('en') ? 'en' : LANGUAGES[0],
      locale: 'gb',
    };
  }

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <div
          className={`navbar-background${this.state.inverse ? ' navbar-background--inverse' : ''}`}
        />

        <PublicNavigation
          inverse={this.state.inverse}
          language={this.state.language}
          locale={this.state.locale}
        />

        <div className="container m-t-5">
          <PropControls
            inverse={this.state.inverse}
            onInverseChange={this.createStateLink('inverse')}
            languages={LANGUAGES}
            language={this.state.language}
            onLanguageChange={this.createStateLink('language')}
            locales={LOCALES}
            locale={this.state.locale}
            onLocaleChange={this.createStateLink('locale')}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(Docs);
