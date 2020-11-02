import React from 'react';
import ReactDOM from 'react-dom';

/* eslint-disable import/extensions */
import Showcase from './components/Showcase/Index.jsx';

import styleSheet from './main.scss';

const shadowHost = document.getElementById('root');
const shadowRoot = shadowHost.attachShadow({
  mode: 'open',
});

const styleTag = document.createElement('style');
styleTag.innerHTML = styleSheet;
shadowRoot.appendChild(styleTag);

const reactRoot = document.createElement('div');
reactRoot.setAttribute('id', 'react-root');
shadowRoot.appendChild(reactRoot);

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Showcase showcaseId={shadowHost.getAttribute('data-showcase-id')} />,
  reactRoot,
);
