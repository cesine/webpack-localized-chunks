import React from 'react';
import logo from './logo.svg';
import './App.css';
import locale from './locale';

function App() {
  const activeLocale = 'fr';
  const translations = locale[activeLocale]();
  return (
    <div className="App">
      <header className="App-header">
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
