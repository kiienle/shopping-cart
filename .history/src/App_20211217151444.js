import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import DataProvider from './components/DataProvider';

import './App.css';

function App() {
  return (
    <DataProvider>
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
    </DataProvider>
  );
}

export default App;
