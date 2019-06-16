import React from 'react';
import logo from './logo.svg';
import './App.css';
import locale from './locale';
import LocaleSwitcher from './LocaleSwitcher';

const LOCALES = ['en', 'fr'];

function App({ activeLocale = 'fr' }) {
  const sanitizedLocale = LOCALES.includes(activeLocale) ? activeLocale: 'fr';
  if (sanitizedLocale !== activeLocale) {
    console.warn(`invalid locale ${activeLocale} please try ${LOCALES}`);
  }
  const translations = locale[sanitizedLocale]();
  return (
    <div className="App">
      <header className="App-header">
        <LocaleSwitcher locales={LOCALES}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p dangerouslySetInnerHTML={{ __html: translations.instructions }}>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translations.cta}
        </a>
      </header>

    </div>
  );
}

export default App;
