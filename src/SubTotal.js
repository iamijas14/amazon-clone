import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useDatalayer } from './DataLayerProvider'
import { useNavigate } from 'react-router-dom'
import { totalPrice } from './reducer.js'
import { DisabledByDefault } from '@mui/icons-material'
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers'

export const SubTotal = ({ disableButton }) => {

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
        prefix={'₹'} 

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

      {basket.length === 0 ? <button className="button_off" disabled={true}>Proceed to checkout
      </button> : <button onClick={() => navigate("/payment") }>Proceed to checkout
      </button>} 
    </div>
  )
}

export default SubTotal;