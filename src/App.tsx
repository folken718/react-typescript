import React from 'react';
import './App.css';
import Sample from './Example Components/Sample';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Sample msg="Hello from react typescript" />
      </header>
    </div>
  );
}

export default App;
