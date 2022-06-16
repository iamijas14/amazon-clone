import React from 'react'
import "./Order.css"
import moment  from 'moment'
import CartProduct from './CartProduct'

const Order = ({order}) => {
  return (
    <div className='order'>
        <p className='order_date'><strong>Date:</strong> {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        <p className='order_id'><small><strong>Order ID:</strong> {order.id}</small></p>
        <hr/>

        {order.data.basket?.map(item => (
            <CartProduct 
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                hideButton
            />
        ))}

        <h2 className='order_total'>Order total: ₹{order.data.amount}</h2>
    </div>
  )
}

export default Order;
  