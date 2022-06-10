import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useDatalayer } from "./DataLayerProvider"
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  
  const [{}, dispatch] = useDatalayer();

  useEffect(() => {

    auth.onAuthStateChanged(user => {
      // console.log(user);
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
                <Route exact path='/' element={<><Header /> <Home /></>} />
              </Routes>
        </div>
    </Router>
  );
}

export default App;
