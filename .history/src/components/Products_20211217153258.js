import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from './DataProvider'
import {Link} from 'react-router-dom'

export default function Products() {
    const [products, setProducts] = useContext(DataContext)
    console.log(products, setProducts)
    return (
        <div className='products'>
            {products.map(product =>
                <div className='card' key={product._id}>
                    <Link to="/">
                        <img src={product.images[0]} alt="" />
                    </Link>
                    <div className='box'>
                        <h3 title={product.title}>
                            <Link to="/">{product.title}</Link>
                        </h3>
                        <p>{product.description}</p>
                        <h4>{product.price}</h4>
                        <button>Add to cart</button>
                    </div>
                </div>
            )}

        </div>
    )
}
