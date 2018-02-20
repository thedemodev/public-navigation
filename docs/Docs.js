import React, { Component } from 'react';

import PublicNavigation from '../src';
import PropControls from './PropControls';

import './Docs.less';

class Docs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inverse: true,
      logoLink: '#logo-link',
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

        <PublicNavigation inverse={this.state.inverse} logoLink={this.state.logoLink} />

        <div className="container">
          <PropControls
            inverse={this.state.inverse}
            onInverseChange={this.createStateLink('inverse')}
            logoLink={this.state.logoLink}
            onLogoLinkChange={this.createStateLink('logoLink')}
          />
        </div>
      </div>
    );
  }
}

export default Docs;