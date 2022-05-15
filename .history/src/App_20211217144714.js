import React from 'react';
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'

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
            <img src={Close} alt="" width="30" className='menu' />
          </li>
        </ul>
        <div className='menu'>
          <img src={Menu} width="30"/>
        </div>
      </header>

      <section>
        <div className='products'>
          <div className='card'>
            <a href="/">
              <img src="https://www.upsieutoc.com/images/2020/07/18/img1.jpg" alt="" />
            </a>
            <div className='box'>
              <h3 title="Watch Product 01">
                <a href="/">Watch Product 01</a>
              </h3>
              <p>Description</p>
              <h4>$100</h4>
              <button>Add to cart</button>
            </div>
          </div>
          <div className='card'>
            <a href="/">
              <img src="https://www.upsieutoc.com/images/2020/07/18/img1.jpg" alt="" />
            </a>
            <div className='box'>
              <h3 title="Watch Product 01">
                <a href="/">Watch Product 01</a>
              </h3>
              <p>Description</p>
              <h4>$100</h4>
              <button>Add to cart</button>
            </div>
          </div>
          <div className='card'>
            <a href="/">
              <img src="https://www.upsieutoc.com/images/2020/07/18/img1.jpg" alt="" />
            </a>
            <div className='box'>
              <h3 title="Watch Product 01">
                <a href="/">Watch Product 01</a>
              </h3>
              <p>Description</p>
              <h4>$100</h4>
              <button>Add to cart</button>
            </div>
          </div>
          <div className='card'>
            <a href="/">
              <img src="https://www.upsieutoc.com/images/2020/07/18/img1.jpg" alt="" />
            </a>
            <div className='box'>
              <h3 title="Watch Product 01">
                <a href="/">Watch Product 01</a>
              </h3>
              <p>Description</p>
              <h4>$100</h4>
              <button>Add to cart</button>
            </div>
          </div>
          <div className='card'>
            <a href="/">
              <img src="https://www.upsieutoc.com/images/2020/07/18/img1.jpg" alt="" />
            </a>
            <div className='box'>
              <h3 title="Watch Product 01">
                <a href="/">Watch Product 01</a>
              </h3>
              <p>Description</p>
              <h4>$100</h4>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
