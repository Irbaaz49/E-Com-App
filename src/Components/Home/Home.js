import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import { useStateValue } from "../MainData/StateProvider";
import { products } from "../Product/diplayProducts";
import Slider from "react-slick";
import { moreProducts } from "../Product/MoreProduct.js"
import { NavLink } from "react-router-dom";
import w11 from "../img/w11.jpg";
import w22 from "../img/w22.jpg";
import w33 from "../img/w33.jpg";
import w44 from "../img/w44.jpg";
import Mone from "../Topdata/Mone";
import Mtwo from "../Topdata/Mtwo";
import Mthree from "../Topdata/Mthree";

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
  <img src={w11} alt=""/>
</div>
<div className="banners">
  <img src={w22} alt=""/>
</div>
<div className="banners">
    <img src={w33} alt=""/>
</div>
<div className="banners">
    <img             src={w44}
 alt=""/>
</div>

</Slider>
<div className="Home_homeContentA__wQGyB">
<Mone/>
<Mtwo/>
<Mthree/>

  </div>

   <div className="home">
      
      <div className="home__container">




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







    </>
  );
}

export default Home;



