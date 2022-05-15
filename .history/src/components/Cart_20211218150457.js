import React, {useContext} from 'react'
import { DataContext } from './DataProvider'
import Sizes from './Sizes'
import Colors from './Colors'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'

export default function Cart() {
    const {cartState, addCart} = useContext(DataContext)
    const [cart, setCart] = cartState
    const [total, setTotal] = useState

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + item.prive * item.count
            }, 0)
            setTotal()
        }
    }, [cart])
    const reduction = (id) => {
        cart.reduce((item, total) => {
            item.count--
            return item 
        }, 0)
    }
    return (
        <>
            {cart.map(product =>
                <div className='details cart' key={product._id}>
                    <div
                        className='img-container'
                        style={{ backgroudImage: `url(${product.images[0]})` }}
                    />
                    <div className='box-details'>
                        <h2 title={product.title}>{product.title}</h2>
                        <h3>${product.price}</h3>
                        <Colors colors={product.colors}/>
                        <Sizes sizes={product.sizes} />
                        <p>{product.description}</p>
                        <p>{product.content}</p>
                        <div className='amount'>
                            <button className='count' onClick={() => reduction(product._id)}>-</button>
                            <span>{product.count}</span>
                            <button className='count' onClick={() => inscrese(product._id)}>+</button>
                        </div>
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
