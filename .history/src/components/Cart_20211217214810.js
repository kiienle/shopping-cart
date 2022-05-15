import React, {useContext} from 'react'
import { DataContext } from './DataProvider'
import Sizes from './Sizes'
import Colors from './Colors'
import { Link } from 'react-router-dom'

export default function Cart() {
    const {cartState, addCart} = useContext(DataContext)
    const [cart, setCart] = cartState
    return (
        <>
            {cart.map(product =>
                <div className='details cart' key={product._id}>
                    <div
                        className='img-container'
                        style={{ backgroudImage: `url(${product.images[index]})` }}
                    />
                    <div className='box-details'>
                        <h2 title={product.title}>{product.title}</h2>
                        <h3>${product.price}</h3>
                        <Colors colors={product.colors}/>
                        <Sizes sizes={product.sizes} />
                        <p>{product.description}</p>
                        <p>{product.content}</p>
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
