import React from 'react'
import "./product.css"
import { useDatalayer } from "./DataLayerProvider"

export const Product = ({id, title, price, rating, image}) => {

    const [ {}, dispatch] = useDatalayer();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image       
            }
        })
    }
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price' >
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img 
         src={image}
         alt='product_img' />

         <button onClick={addToBasket}>Add to cart</button>
    </div>
  )
}

export default Product;
