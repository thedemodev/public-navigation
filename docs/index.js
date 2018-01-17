import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Docs from './Docs';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Docs />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Docs);

if (module.hot) {
  module.hot.accept('./Docs', () => {
    render(Docs);
  });
}
