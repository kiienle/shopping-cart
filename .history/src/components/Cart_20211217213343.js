import React, {useContext} from 'react'
import { DataContext } from './DataProvider'
import Sizes from './Sizes'
import Colors from './Colors'
import { Link } from 'react-router-dom'

export default function Cart() {
    const {cartsState} = useContext(DataContext)
    const [cart, setCart] = cartsState
    return (
        <>
            {cart.map(product =>
                <div className='cart-icon' key={product._id}>
                    <div
                        className='img-container'
                        // onMouseMove={handleMouseMove}
                        // style={{ backgroudImage: `url(${product.images[index]})` }}
                        // ref={imgDiv}
                        // onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`}
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
