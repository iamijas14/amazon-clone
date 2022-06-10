import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useDatalayer } from './DataLayerProvider'

export const SubTotal = () => {

  const [{basket}, dispatch] = useDatalayer();

//SELECTOR
  const totalPrice = basket?.reduce((accumulatore, currentvalue) => accumulatore + currentvalue.price, 0 )
  
  return (
    <div className='subTotal'>
      <CurrencyFormat
        decimalScale={2}
        value={totalPrice}
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

      <button>Proceed to checkout</button>
    </div>
  )
}

export default SubTotal;