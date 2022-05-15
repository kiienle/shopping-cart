import React, { useContext, useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './DataProvider'
import { Link } from 'react-router-dom'
import Sizes from './Sizes'
import DetailsThumb from './DetailsThumb'
import Colors from './Colors'


export default function Details() {
    const { id } = useParams()
    const {productsState, cartState} = useContext(DataContext)
    const [products, setProducts] = productsState
    const [index, setIndex] = useState(0)
    const imgDiv = useRef()

    const details = products.filter(product => product._id === id)
    console.log(details)
    const handleMouseMove = e => {
        const {left, top, width, height} = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x} % ${y}`
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
                        <DetailsThumb
                            images={product.images}
                            setIndex={setIndex}
                        />
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
