import React from 'react';
import './LocaleSwitcher.css';

const LOCALES = ['en', 'fr'];
const routeChange = new CustomEvent('routeChange');

function changeUrl (locale) {
  window.history.pushState({
    locale,
  }, locale, `?locale=${locale}`);

  window.dispatchEvent(routeChange);
}

function LocaleSwitcher() {
  return (
    <p className="locale-switcher">
      {LOCALES.map((code, index) => (
        <a href={`?locale=${code}`} key={index} onClick={(e) => {e.preventDefault(); changeUrl(code) }}>{code}</a>
      ))}
      <a href="?">default</a>
    </p>
  );
}

export default LocaleSwitcher;
