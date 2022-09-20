import React from "react";
// import CheckoutProduct from "./CheckoutProduct";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { memo } from "react";
import "./Order.css"


const Order = ({item}) =>{
    return (
        <>
        <div className="order">


        <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        hideButton


        
        />
    
        </div>
        </>
    )
}

export default memo(Order);