import React from 'react';
import ReactDOM from 'react-dom';

/* eslint-disable import/extensions */
import App from './components/App.jsx';

const shadowRoot = document.getElementById('root').attachShadow({
  mode: 'open',
});

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<App />, shadowRoot);
