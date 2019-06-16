import React from 'react';
import ReactDOM from 'react-dom';
import AsyncComponent from './AsyncComponent';

describe('AsyncComponent', () => {
  it('should render empty until component is loaded', async () => {
    const AsyncApp = await AsyncComponent(() => import('./App'));
    const div = document.createElement('div');
    await ReactDOM.render(<AsyncApp clientSide={true} />, div);
    expect(div).toMatchSnapshot();
  });
});