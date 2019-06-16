import React from 'react';
import './LocaleSwitcher.css';

const LOCALES = ['en', 'fr'];

function LocaleSwitcher() {
  return (
    <p className="locale-switcher">
      {LOCALES.map((code, index) => (
        <a href={`?locale=${code}`} key={index}>{code}</a>
      ))}
      <a href="?">default</a>
    </p>
  );
}

export default LocaleSwitcher;
