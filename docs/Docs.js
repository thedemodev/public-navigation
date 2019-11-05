import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import classNames from 'classnames';

import './Docs.less';

import { PublicNavigation, Footer, LANGUAGES, LOCALES } from '../src';
import PropControls from './PropControls';

import { simple, complex } from './submenu-items.json';

const submenuOptions = [
  { value: [], label: 'None' },
  { value: simple, label: 'Simple' },
  { value: complex, label: 'Complex' },
];

const availableLanguages = LANGUAGES.includes('source')
  ? [
      { value: 'source', label: 'source' },
      { value: 'en', label: 'English' },
      { value: 'de', label: 'Deutsch' },
    ]
  : LANGUAGES.map(lang => ({ value: lang, label: lang }));

class Docs extends Component {
  state = {
    inverse: true,
    language: LANGUAGES.includes('en') ? 'en' : LANGUAGES[0],
    locale: 'gb',
    activePath: '/',
    isUserLoggedIn: false,
    hasUserPreviouslyLoggedIn: false,
    submenuItems: [],
  };

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    const {
      inverse,
      language,
      locale,
      activePath,
      isUserLoggedIn,
      hasUserPreviouslyLoggedIn,
      submenuItems,
    } = this.state;

    return (
      <div>
        <div
          className={classNames('navbar-background', {
            'navbar-background--inverse': inverse,
            'navbar-background--has-submenu': submenuItems.length,
          })}
        />
        <PublicNavigation
          inverse={inverse}
          language={language}
          locale={locale}
          availableLanguages={availableLanguages}
          onLanguageChange={lang => {
            this.createStateLink('language')(lang.value);
          }}
          activePath={activePath}
          isUserLoggedIn={isUserLoggedIn}
          hasUserPreviouslyLoggedIn={hasUserPreviouslyLoggedIn}
          submenuItems={submenuItems}
        />
        <div className="navbar-push-container">
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
                activePath={activePath}
                onActivePathChange={this.createStateLink('activePath')}
                isUserLoggedIn={isUserLoggedIn}
                onUserLoggedInChange={this.createStateLink('isUserLoggedIn')}
                hasUserPreviouslyLoggedIn={hasUserPreviouslyLoggedIn}
                onHasUserPreviouslyLoggedInChange={this.createStateLink(
                  'hasUserPreviouslyLoggedIn',
                )}
                submenuOptions={submenuOptions}
                submenuItems={submenuItems}
                onSubmenuOptionsChange={this.createStateLink('submenuItems')}
              />
            </div>
          </div>
          <Footer inverse={inverse} language={language} locale={locale} />
        </div>
      </div>
    );
  }
}

export default hot(module)(Docs);
