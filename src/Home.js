import "./home.css"
import  Product  from "./Product"
import SimpleImageSlider from "react-simple-image-slider";

import React from 'react'

const Home = () => {

    const bannerImages = [
        { url: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Clearance/PC-3000._CB648065009_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" },
        { url: "https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg" }
      ]

  return (
    <div className="home">
        <div className="home_container">

            <div className="home_image">
            <SimpleImageSlider 
                images={bannerImages}
                width="100%"
                height={504}
                showNavs={true}
            />
            </div>
{/* 
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Clearance/PC-3000._CB648065009_.jpg"
            // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="banner" 
            /> */}

            <div className="home_row">
                <Product
                id="1"
                title="Captain America's shield is a fictional weapon appearing in American comic books published by Marvel Comics. "
                price={1783.81}
                rating={5}
                image="https://m.media-amazon.com/images/I/91aNx9uROFL._AC_UX679_.jpg"
                />
                <Product
                id="2"
                title="Marvel Legends Iron Man Electronic Helmet"
                price={14099.47}
                rating={4}
                image="https://m.media-amazon.com/images/I/81w6jjXIzJL._AC_SY550_.jpg"
                /> 
                <Product
                id="3"
                title="The Noble Collection Harry Potter Wand with Ollivanders Wand Box"
                price={3146.48}
                rating={4}
                image="https://m.media-amazon.com/images/I/71OpgYj98qL._AC_SX425_.jpg"
                /> 
            </div>

            <div className="home_row">
                <Product
                id="4"
                title="Harry Potter Real Talking Sorting Hat Animated Costume, Brown"
                price={5001.29}
                rating={3}
                image="https://m.media-amazon.com/images/I/71q-xAybk0L._AC_SX425_.jpg"
                />
                <Product
                id="5"
                title="McFarlane Toys DC Batman: The Batman (Movie) 7 Action Figure"
                price={2410.69}
                rating={5}
                image="	https://m.media-amazon.com/images/I/71RBNYvWq-L._AC_SX679_.jpg"
                />
                <Product
                id="6"
                title="Ugly Love: A Novel: When Tate Collins meets airline pilot Miles Archer, she doesn't think it's love at first sight."
                price={839.06}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/41g9RfNVZBL._SX320_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                id="7"
                title="Open Road Brands Marvel Heroes in Action Gallery Wrapped Canvas Wall Art - Large Marvel Wall Décor Featuring Spider-Man, Iron Man and Black Panther"
                price={5243.33}
                rating={4}
                image="https://m.media-amazon.com/images/I/81s+A5zd9NL._AC_SX679_.jpg"
                /> 
                <Product
                id="8"
                title="Open Road Brands Marvel Villains Wall Art - Large Marvel Villains Picture Featuring Thanos, Loki, Venom, Green Goblin, Doctor Doom and More"
                price={4839.93}
                rating={4}
                image="https://m.media-amazon.com/images/I/81B6D4fXH8L._AC_SX679_.jpg"
                /> 
            </div>
        </div>
    </div>
  )
}

export default Home