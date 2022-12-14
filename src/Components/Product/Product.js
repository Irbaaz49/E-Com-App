import React from "react";
import "./Product.css";
import { useStateValue } from "../MainData/StateProvider";
import swal from 'sweetalert'



function Product({ id, title, image, price, rating }) {
  const[{basket}, dispatch] = useStateValue();
  // console.log(basket)
  const addToBasket = () => {
    swal({
      title: "Product Added to cart.",
      icon: "success",
      button : false,
      timer: 1000,
      dangerMode: false,
    })
    //dispatch the item in the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    
     <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
      </div>
    
  );
}

export default Product;
