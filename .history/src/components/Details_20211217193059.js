import React, { useContext, useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './DataProvider'
import Sizes from './Sizes'
import DetailsThumb from './DetailsThumb'
import { Link } from 'react-router-dom'
import Colors from './Color'


export default function Details() {
    const { id } = useParams()
    const [products, setProducts] = useContext(DataContext)
    const [index, setIndex] = useState(0)
    const imgDiv = useRef()

    const details = products.filter(product => product._id === id)
    console.log(details)
    const handleMouseMove = () => {

    }

    const addCart = () => {

    }
    return (
        <>
            {details.map(product =>
                <div className='details' key={product._id}>
                    <div
                        className='img-container'
                        onMouseMove={handleMouseMove}
                        style={{ backgroudImage: `url(${product.images[index]})` }}
                        ref={imgDiv}
                        onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`}
                    />
                    <div className='box-details'>
                        <h2 title={product.title}>{product.title}</h2>
                        <h3>${product.price}</h3>
                        <Colors colors={product.colors}/>
                        <Sizes sizes={product.sizes} />
                        <p>{product.description}</p>
                        <p>{product.content}</p>
                        {/* <DetailsThumb
                            images={product.images}
                            setIndex={setIndex}
                        /> */}
                        <Link to="/cart" className="cart"
                            // onClick={() => addCart(product._id)}
                        >
                            Add to cart
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}
