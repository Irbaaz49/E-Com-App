import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import { products } from "./diplayProducts";




function Home() {
  const[{search}, dispatch] = useStateValue();

 
 
 
  return (
    <div className="home">
      <div className="home__container">
      <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/611wsb3NSWL._SX3000_.jpg"
            alt="im1"
          />

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
  );
}

export default Home;



