import React, { useEffect, useState } from 'react'
import "./OrdersDetail.css"
import Order from './Order'
import { useDatalayer } from './DataLayerProvider'
import { db } from './firebase'

const OrdersDetail = () => {

  const [{user}, dispatch] = useDatalayer()
  const [isOrders, setOrders] = useState();

  useEffect(() => {
    if(user){
      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(item => ({
            id: item.id,
            data: item.data()
          })))
      ))
    } else {
      setOrders([])
    }
    
  }, [user])

  return (
    <div className='orders'>
        <h1>Your Order</h1>

        <div className='order_container'>
          {isOrders?.map(order => (
            <Order order={order} />
          ))}
        </div>

    </div>
  )
}

export default OrdersDetail;
