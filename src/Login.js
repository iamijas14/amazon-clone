import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate} from "react-router-dom"
import {auth} from "./firebase"

const Login = () => {

    const navigate = useNavigate();
    const [isEmail, setEmail] = useState('');
    const [isPassword, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(isEmail, isPassword)
            .then(auth => {
                navigate('/')
            }).catch(error => alert(error.message))
    };

    const signUp = (e) => {
        e.preventDefault()
        
        auth.createUserWithEmailAndPassword(isEmail, isPassword)
            .then((auth) => {  //if new user is created successfully then an object(auth) is returned
                if(auth) {
                    navigate('/')
                }
            }).catch(error => alert(error.message))
    };

  return (
    <div className='login'>
        <Link to="/">
                <img
                className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                alt="amazon-login-logo"
            />
        </Link>

        <div className='login_container' >
    
            <form>
                <h1>Sign-In</h1>
                <h5>Email</h5>
                <input 
                    type="text"
                    onChange={event => setEmail(event.target.value)}
                    value={isEmail}/>

                <h5>Password</h5>
                <input 
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                    value={isPassword}/>

                <button onClick={signIn} className='login_signIn'>Sign-In</button>

                <p>
                    By signing-In, you agree to Amazon-clone's Conditions of Use 
                    and Privacy Notice.
                </p>
            </form>
        </div>

        <p> New to Amazon?</p>
        <button onClick={signUp} className='login_signUpButton'>Create your Amazon accouunt</button>

    </div>
  )
}

export default Login;
