import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';

import './index.css';
import AsyncComponent from './AsyncComponent';
import * as serviceWorker from './serviceWorker';
const AsyncApp = AsyncComponent(() => import("./App"));

let activeLocale = '';
try {
  activeLocale = queryString.parse(window.location.search).locale;
} catch (err) {
  console.error(err);
}

ReactDOM.render(<AsyncApp activeLocale={activeLocale} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
