import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import { products } from "./diplayProducts";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { moreProducts } from "./MoreProduct.js"
import { NavLink } from "react-router-dom";


function Home() {
  const[{search,user}, dispatch] = useStateValue();

 
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
      cssEase: "linear"
  };
const settings2 = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
            }  
        },
        {
            breakpoint: 900,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }  
        },
        {
            breakpoint: 680,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }  
        },
        
    ]
}

 
  return (
   <>
       <Slider {...settings}>

<div className="banners">
  <img src="https://m.media-amazon.com/images/I/71LyiPYjaNL._SX3000_.jpg" alt=""/>
</div>
<div className="banners">
  <img src="https://m.media-amazon.com/images/I/713QMfztDGL._SX3000_.jpg" alt=""/>
</div>
<div className="banners">
    <img src="https://m.media-amazon.com/images/I/71ZMRzVcenL._SX3000_.jpg" alt=""/>
</div>
<div className="banners">
    <img             src="https://m.media-amazon.com/images/I/611wsb3NSWL._SX3000_.jpg"
 alt=""/>
</div>

</Slider>
   <div className="home">
      
      <div className="home__container">
      {/* <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/611wsb3NSWL._SX3000_.jpg"
            alt="im1"
          /> */}




<div className="home__row">

{products.prod.filter((val)=>{
if(val.title.toLowerCase().includes(search.toLowerCase()))
  return val;

}).map((ele)=>{
    return(
      <Product 
      id={ele.id}
      title={ele.title}
      price={ele.price}
      rating={ele.rating}
      image={ele.image}
      ></Product>
    )
  })
}

</div>


        


      </div>
    </div>
    <hr/>
    <div className="home-product-slider">

<h2 className="sec-title">More Products</h2>

<Slider {...settings2}>
    {moreProducts && moreProducts.map((product)=>{
            return(
                // <>
<NavLink to='/' className='link'>
                 <div className="product-card" >
            <div className="product-image">
                <img src= {product.image} alt=""/>
            </div>
            <p>{product.title}</p>
            <p>₹ {product.price}</p>
        </div>
</NavLink>
            )
        })
    }
</Slider>
</div>






    <footer>
   

    <div className="middle">
      <div className="center">
        <ul>
          <li><h3>Get to Know Us</h3></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">About Amazon</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Amazon Devices</a></li>
        </ul>
        <ul>
          <li><h3>Make Money with Us</h3></li>
          <li><a href="#">Sell on Amazon</a></li>
          <li><a href="#">Sell Your Services on Amazon</a></li>
          <li><a href="#">Sell on Amazon Business</a></li>
          <li><a href="#">Sell Your Apps on Amazon</a></li>
          <li><a href="#">Become an Affiliate</a></li>
          <li><a href="#">Advertise Your Products</a></li>
          <li><a href="#">Self-Publish with Us</a></li>
          <li><a href="#">Become an Amazon Vendor</a></li>
          <li><a href="#">Sell Your Subscription on Amazon</a></li>
          <li><a href="#">› See all</a></li>
        </ul>
        <ul>
          <li><h3>Amazon Payment Products</h3></li>
          <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
          <li><a href="#">Amazon.com Store Card</a></li>
          <li><a href="#">Amazon.com Corporate Credit Line</a></li>
          <li><a href="#">Shop with Points</a></li>
          <li><a href="#">Credit Card Marketplace</a></li>
          <li><a href="#">Reload Your Balance</a></li>
          <li><a href="#">Amazon Currency Converter</a></li>
        </ul>
        <ul>
          <li><h3>Let Us Help You</h3></li>
          <li><a href="#">Your Account</a></li>
          <li><NavLink to={user?'/orders':'/login'}>Your Orders</NavLink></li>
          <li><a href='https://www.amazon.in/'>Shipping Rates &amp; Policies</a></li>
          <li><a href="#">Amazon Prime</a></li>
          <li><a href="#">Returns &amp; Replacements</a></li>
          <li><a href="#">Manage Your Content and Devices</a></li>
          <li><a href="#">Amazon Assistant</a></li>
          <li><a href="#">Help</a></li>
        </ul>
        <ul className="copy text-center">
          <li>&copy; 1996-2022, Amazon.com, Made by Irbaaz Hussain</li>
        </ul>
      </div>

    </div>

  
  </footer>

    </>
  );
}

export default Home;



