'use strict';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import  ReactDOM from 'react-dom';

import App from './components/app';

const container = document.querySelector('.app');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  container
);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      container
    );
  });
}
