import "./Checkout.css"
import React from 'react'
import SubTotal  from "./SubTotal"
import CartProduct from "./CartProduct"
import { useDatalayer  } from "./DataLayerProvider"

export const Checkout = () => {

const [{ basket, user }, dispatch] = useDatalayer();

  return (
    <div className="checkout">
        <div className="checkout_left">
            <img
                className="checkout_ad"
                src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
                alt="amazon ad" 
            />
            <div>
                <h3>{user ? `hello, ${user?.email.split("@",1)}` : " "}</h3>
                <h2 className="checkout_title">Your cart</h2>

                 {/*{} using this will not render. use () while mapping  */}
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

        <div className="checkout_right">
            <SubTotal />
        </div> 
    </div>
  )
}

export default Checkout;