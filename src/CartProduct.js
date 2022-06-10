import React from 'react'
import "./CartProduct.css"
import { useDatalayer } from './DataLayerProvider'

const CartProduct = ({id, title, price, rating, image}) => {

    const [{}, dispatch] = useDatalayer();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
  return (
    <div className='cartProduct'>
        <img 
            className='checkProduct_iamge'
            src={image}
            alt="product image"
        />

        <div className='cartProduct_info'>
            <p className='cartProduct_title'>
                {title}
            </p>
            <p className='cartProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='cartProduct_rating'>
                {Array(rating).fill().map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>

            <button onClick={removeFromBasket}>Remove from Cart</button>
        </div>

    </div>
  )
}

export default CartProduct;