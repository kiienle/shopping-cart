import React from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import Cart from './svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'

export default function Header() {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    return (
        <header>
            <div onClick={toggleMenu} className='menu'>
                <img src={Menu} width="30" />
            </div>

            <div className="logo">
                <h1><Link to="/products">Citizen</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Login / Register</Link></li>
                <li onClick={toggleMenu} >
                    <img src={Close} alt="" width="30" className='menu' />
                </li>
            </ul>
            
            <div className='cart-icon'>
                <span>1</span>
                <Link to={"/cart"}>
                    <img src={Cart} alt='' width="30" />
                </Link>
            </div>
        </header>
    )
}
