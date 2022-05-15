import React from 'react'
import { Link } from 'react-router-dom'
import Carts from './svg/shopping-cart-solid.svg'

export default function Cart() {
    return (
        <div className='cart-icon'>
            <span>1</span>
            <Link to={'/cart'}>{Carts}</Link>
        </div>
    )
}
