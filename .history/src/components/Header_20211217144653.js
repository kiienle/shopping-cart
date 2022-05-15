import React from 'react'

export default function Header() {
    return (
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
                <img src={Menu} width="30" />
            </div>
        </header>
    )
}
