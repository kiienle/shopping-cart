import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from './DataProvider'
import {Link} from 'react-router-dom'

export default function Products() {
    const {products} = useContext(DataContext)
    console.log(products)
    // const [products, setProducts] = products
    return (
        <div className='products'>
            {/* {products.map(product =>
                <div className='card' key={product._id}>
                    <Link to={`/products/${product._id}`}>
                        <img src={product.images[0]} alt="" />
                    </Link>
                    <div className='box'>
                        <h3 title={product.title}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </h3>
                        <p>{product.description}</p>
                        <h4>${product.price}</h4>
                        <button>Add to cart</button>
                    </div>
                </div>
            )} */}

        </div>
    )
}
