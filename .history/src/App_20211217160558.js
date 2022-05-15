import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import DataProvider from './components/DataProvider';
import Details from './components/Details'

import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />

          <section>
            <Routes>
              <Route path="products/" element={<Products />}/>
              <Route path="products/1" element={<Details />}/>
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
