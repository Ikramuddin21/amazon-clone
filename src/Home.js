import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <img
             className="home_image"
             src="https://i.ibb.co/8s5ZSXF/GWBleeding-Hero-ENG-COVIDUPDATE-XSite-1500x600-PV-en-GB-CB428684220.jpg"
             alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home_row">
                <Product 
                    id="1234343"
                    title="The Lean Startup: How Constant Innovation Craates Radically Successful Businesses Paperback"
                    price={592.96}
                    rating={5}
                    image="https://i.ibb.co/Kx4GF5T/51-Zymoq7-Un-L-SX325-BO1-204-203-200.jpg"
                />

                <Product 
                    id="276987"
                    title="Laser-metal-cutting-M How Constant Innovation Craates Radically Successful Businesses Paperback"
                    price={762}
                    rating={4}
                    image="https://i.ibb.co/b5PNj6j/Laser-metal-cutting-M.png"
                />
            </div>

            <div className="home_row">
                <Product 
                    id="343343"
                    title="The Lean Startup: How Constant Innovation Craates Radically Successful Businesses Paperback"
                    price={758.90}
                    rating={3}
                    image="https://i.ibb.co/jVWFjv5/unnamed.png"
                />

                <Product 
                    id="4564343"
                    title="Seiko Core Series Two-tone Solar Alarm Chronograph Stopwatch  #SSC143"
                    price={305.54}
                    rating={5}
                    image="https://i.ibb.co/fn08Hf1/unnamed-1.png"
                />

                <Product
                    id="567343"
                    title="The Lean Startup: How Constant Innovation Craates Radically Successful Businesses Paperback"
                    price={450.58}
                    rating={2}
                    image="https://i.ibb.co/4JBpjn5/nokia-5-3-front-cyan.png"
                />
            </div>

            <div className="home_row">
                <Product 
                        id="643439"
                        title="Harvey Norman, Samsung 48.9 Ultra-wide Curved Gaming Monitor"
                        price={435.70}
                        rating={5}
                        image="https://i.ibb.co/yyRKhmJ/interference.webp"
                    />
            </div>
            
        </div>
    );
};

export default Home;