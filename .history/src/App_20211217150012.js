import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <section>
          <Routes>
            <Route path="products" element={<Products />}/>
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
