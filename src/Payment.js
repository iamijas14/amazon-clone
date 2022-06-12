import React from 'react'
import "./payment.css"
import { useDatalayer } from './DataLayerProvider'
import CartProduct from './CartProduct'
import { Link } from 'react-router-dom'
import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js"


const Payment = () => {

    const [{basket, user}, dispatch] = useDatalayer();

    const stripe = useStripe();
    const elements = useElements();

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>Checkout(<Link to="/checkout">{basket?.length} Items
                </Link>)</h1>

            <div className='payment_section' >
                <div className='payment_title'>
                    <h3>Delivery address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>React developer</p>
                    <p>Bangalore, India</p>
                </div>
            </div>

            <div className='payment_section' >
                <div className='payment_title'>
                    <h3>Review Items</h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item => (
                        <CartProduct 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />    
                    ))}
                </div>
            </div>

            <div className='payment_section' >
            
            </div>
        </div>
    </div>
  )
}

export default Payment;