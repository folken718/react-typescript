import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Example Components/Sample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sample msg={'Hello from simple component written in typescript!!'} />
      </header>
    </div>
  );
}

export default App;
