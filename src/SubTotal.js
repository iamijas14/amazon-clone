import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useDatalayer } from './DataLayerProvider'
import { useNavigate } from 'react-router-dom'
import { totalPrice } from './reducer.js'

export const SubTotal = () => {

  const [{basket}, dispatch] = useDatalayer();
  const navigate = useNavigate();

//SELECTOR
  // const totalPrice = basket?.reduce((accumulatore, currentvalue) => accumulatore + currentvalue.price, 0 )

  return (
    <div className='subTotal'>
      <CurrencyFormat
        decimalScale={2}
        value={totalPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={'$'} 

        renderText={(value) => (
          <>
            <p>
              SubTotal({basket.length} items): <strong>{value}</strong>
            </p>

            <small className='subTotal_gift'>
              <input type='checkbox' /> This order contains a gift 
            </small>
          </>
        )
        }
      />  

      <button onClick={() => navigate("/payment") }>Proceed to checkout</button>
    </div>
  )
}

export default SubTotal;