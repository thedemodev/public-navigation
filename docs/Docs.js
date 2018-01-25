import React, { Component } from 'react';

import PublicNavigation from '../src';
import PropControls from './PropControls';

import './Docs.less';

class Docs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inverse: true,
    };
  }

  render() {
    return (
      <div>
        <div
          className={`navbar-background${this.state.inverse ? ' navbar-background--inverse' : ''}`}
        />

        <PublicNavigation inverse={this.state.inverse} />

        <div className="container">
          <PropControls
            inverse={this.state.inverse}
            onInverseChange={(inverse) => {
              this.setState({ inverse });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Docs;
