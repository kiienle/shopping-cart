import React, {useContext} from 'react'
import { DataContext } from './DataProvider'

export default function Cart() {
    const {productsState} = useContext(DataContext)
    const [products, setProducts]
    return (
        <>
            {products.map(product =>
                <div className='cart-icon' key={product._id}>
                    <div
                        className='img-container'
                        // onMouseMove={handleMouseMove}
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
                            onClick={() => addCart(product._id)}
                        >
                            Add to cart
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}
