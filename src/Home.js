import "./home.css"
import  Product  from "./Product"

import React from 'react'

const Home = () => {
  return (
    <div className="home">
        <div className="home_container">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Clearance/PC-3000._CB648065009_.jpg"
            // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="banner" 
            />

            <div className="home_row">
                <Product 
                    id={1}
                    title="Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming" 
                    price={27.99} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"/>  
                <Product
                    id={2}
                    title="Beautiful World, Where Are You by Sally Rooney" 
                    price={17.00} 
                    rating={4} 
                    image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549390054-51UTM2Bgx50L.jpg?crop%3D1xw:0.999xh;center,top%26resize%3D480:*"/>  
            </div>
            <div className="home_row">
                <Product
                    id={3}
                    title="Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming" 
                    price={27.99} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"/>  
                <Product 
                    id={4}
                    title="Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming" 
                    price={27.99} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"/> 
                <Product 
                    id={5}
                    title="Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming" 
                    price={27.99} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"/>
            </div>
            <div className="home_row">
                <Product
                    id={6}
                    title="Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming" 
                    price={27.99} 
                    rating={2} 
                    image="https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"/> 
            </div>
        </div>
    </div>
  )
}

export default Home