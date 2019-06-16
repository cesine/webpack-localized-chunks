import React from 'react';
import ReactDOM from 'react-dom';
import LocaleSwitcher from './LocaleSwitcher';

describe('LocaleSwitcher', () => {
  it('should use client side navigation', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocaleSwitcher clientSide={true} />, div);
    expect(div).toMatchSnapshot();
  });

  it('should page reload navigation', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocaleSwitcher clientSide={false} />, div);
    expect(div).toMatchSnapshot();
  });
});