import React from 'react';
import ReactDOM from 'react-dom';

/* eslint-disable import/extensions */
import App from './components/App.jsx';

import styleSheet from './main.scss';

const shadowRoot = document.getElementById('root').attachShadow({
  mode: 'open',
});

const styleTag = document.createElement('style');
styleTag.innerHTML = styleSheet;
shadowRoot.appendChild(styleTag);

const reactRoot = document.createElement('div');
reactRoot.setAttribute('id', 'react-root');
shadowRoot.appendChild(reactRoot);

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<App />, reactRoot);
