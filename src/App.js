import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocaleSwitcher from './LocaleSwitcher';

function App({ activeLocale = 'fr', translations = {} }) {
  return (
    <div className="App">
      <header className="App-header">
        <LocaleSwitcher/>
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
