import React from 'react';
import Header from './components/Header'
import Products from './components/Products'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Products />
      </section>
    </div>
  );
}

export default App;
