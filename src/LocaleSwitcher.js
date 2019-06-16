import React from 'react';
import './LocaleSwitcher.css';

function LocaleSwitcher({ locales }) {
  return (
    <p className="locale-switcher">
      {locales.map((code, index) => (
        <a href={`?locale=${code}`} key={index}>{code}</a>
      ))}
      <a href="?">default</a>
    </p>
  );
}

export default LocaleSwitcher;
