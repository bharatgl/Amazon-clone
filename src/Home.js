import React from "react";
import "./Home.css";
import Product from "./Product.js";
import FlipMove from "react-flip-move";



function Home() {
 
  <FlipMove enterAnimation="elevator" leaveAnimation="elevator" />;
  
  return (

    <div className="home">
      <div className="home_conatiner">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12315251"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={599.99}
            image="https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY327_QL65_.jpg"
            rating={5}
          />

          <Product
            id="48315251"
            title="The lHOWORK Stand Mixer, 8.45 QT Bowl 660W Food Mixer, Multi Functional Kitchen Electric Mixer With Dough Hook, Whisk, Beater, Egg White Separator(8.45 QT, Black)"
            price={13417.99}
            image="https://m.media-amazon.com/images/I/717UEhyRToL._AC_UY327_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="22521542"
            title="OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage, 90Hz Fluid Display,Triple Camera, with Alexa Built-in,"
            price={30499.99}
            image="https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_UY327_QL65_.jpg"
            rating={5}
          />
          <Product
            id="12378251"
            title="SAMSUNG QN32Q50RAFXZA Flat 32- inch QLED 4K 32Q50 Series Smart TV (2019 model) "
            price={79999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_UL160_SR160,160_.jpghttps://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY327_QL65_.jpg"
            rating={5}
          />
          <Product
            id="25155002"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB "
            price={2561.99}
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._AC_SY200_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="51555050"
            title="Acer Aspire 5 A515-46-R14K Slim Laptop | 15.6 inch Full HD IPS | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | Amazon Alexa | Windows 10 Home (S mode) "
            price={75599.99}
            image="https://m.media-amazon.com/images/I/71+2H96GHZL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  
  );
 
}

export default Home;
