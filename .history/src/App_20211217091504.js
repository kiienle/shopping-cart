import React from 'react';
import Menu from './components/svg/bars-solid.svg'
import Close from './components/svg/times-solid.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <h1><a href="/">Citizen</a></h1>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Login / Register</a></li>
          <li>
            <img src={Close} alt="" />
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
