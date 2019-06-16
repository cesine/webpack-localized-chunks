import React from 'react';
import queryString from 'query-string';

import './LocaleSwitcher.css';

const LOCALES = ['en', 'fr'];
const routeChange = new CustomEvent('routeChange');

function changeUrl (locale) {
  const search = { ... queryString.parse(window.location.search), locale };

  window.history.pushState({
    locale,
  }, locale, `?${queryString.stringify(search)}`);

  window.dispatchEvent(routeChange);
}

function LocaleSwitcher({ clientSide }) {
  return (
    <p className="locale-switcher">
      {LOCALES.map((code, index) => (
        <a href={`?clientSide=${clientSide}&locale=${code}`} key={index} onClick={(e) => {
          if (!clientSide) {
            console.log('Using server side routing');
            return;
          }
          console.log('Using client side routing to use server side routing: ?clientSide=false');
          e.preventDefault();
          changeUrl(code);
        }}>{code}</a>
      ))}
      <a href="?">default</a>
    </p>
  );
}

export default LocaleSwitcher;
