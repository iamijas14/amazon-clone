import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import Payment from './Payment';
import OrdersDetail from './OrdersDetail';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useDatalayer } from "./DataLayerProvider"
import { useEffect } from 'react';
import { auth } from './firebase';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51L9m55SCQmpVLuslnX2pVxWw4mCEOpHrsBZMFgpumJ4Np7sjSiGCnyH1HOotRN8YeswCiHXT31ZdYkxfNHrg76aZ00dr042Zke")

function App() {
  
  const [{}, dispatch] = useDatalayer();

  useEffect(() => {

    auth.onAuthStateChanged(user => {
      if(user){
        dispatch({
          type:"SET_USER",
          user: user
        })
      } else {
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  }, [])

  return (
    <Router>
        <div className="app">
              <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/checkout' element={<><Header /> <Checkout /></>} />
                <Route path='/payment' element={<>
                                                  <Header/> 
                                                  <Elements stripe={promise}>
                                                    <Payment />
                                                  </Elements>
                                                </>}/>
                <Route path='/orders' element={<><Header /> <OrdersDetail /></>} />
                <Route exact path='/' element={<><Header /> <Home /></>} />
              </Routes>
        </div>
    </Router>
  );
}

export default App;
