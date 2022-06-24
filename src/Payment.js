import React, { useState, useEffect } from 'react'
import "./payment.css"
import { useDatalayer } from './DataLayerProvider'
import CartProduct from './CartProduct'
import { Link, useNavigate } from 'react-router-dom'
import { totalPrice } from './reducer'
import CurrencyFormat from 'react-currency-format'
import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import axios from "./axios";
import { db } from './firebase'


const Payment = () => {

    const [{basket, user}, dispatch] = useDatalayer();

    const stripe = useStripe();
    const elements = useElements();

    const navigate = useNavigate();

    const [isSucceeded, setSucceeded] = useState(false);
    const [isProcessing, setProcessing] = useState("");
    const [isError, setError] = useState(null);
    const [isDisabled, setDisabled] = useState(true);
    const [isClientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${totalPrice(basket) * 100}` //Stripe expects the total amount in a currencies subunits
            })
            setClientSecret(response.data.clientSecret)
        }
         getClientSecret();
    }, [basket])

    console.log("THE SECRET KEY:", isClientSecret);
    // console.log(user)
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true); //it blocks the button once you hit submit to avoid submitting m0re than once

        const payload = await stripe.confirmCardPayment(isClientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation -> after getting payment confirmation 

            //send order details to database
            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                basket: basket,
                amount: paymentIntent.amount / 100,
                created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type: "EMPTY_BASKET"
            })

            navigate('/orders', { replace: true });
        })

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : " ");
    }

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
                <div className='payment_title'>
                    <h3>Payment method</h3>
                </div>
                
                <div className='payment_details'>
                    
                    <form onSubmit={handleSubmit}>
                        <div className='payment_priceContainer'>
                            <CurrencyFormat
                                decimalScale={2}
                                value={totalPrice(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={'₹'} 

                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                            )} />
                        </div>
                        <div className='payment_card'>
                            <CardElement onChange={handleChange} />

                            <button disabled = {isProcessing || isDisabled || isSucceeded}>
                                <span>{isProcessing ? <p>Processing</p> : "BUY NOW"} </span>
                            </button>
                        </div>           

                        {isError && <div>{isError}</div>}
                    </form>

                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Payment;