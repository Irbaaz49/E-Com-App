import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { memo } from "react";
import "./Order.css"


const Order = ({item}) =>{
    return (
        <>
        <div className="order">
{/* <h2>Order</h2> */}
{/* <p>{order.data.created}</p>
<p className="order_id">
<small>{order.id}</small>
</p> */}

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