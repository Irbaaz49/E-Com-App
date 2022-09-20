import React from "react"
import CheckoutProduct from "../Checkout/CheckoutProduct";
import './Payment.css'
import { useStateValue } from "../MainData/StateProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { db } from "../Firebase/firebase";



const Payment = () =>{
    const navigate = useNavigate();
const [{basket,user} , dispatch] = useStateValue();

const TheOrders = async (e) =>{
    e.preventDefault();
    
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(user?.uid)
        .set({
            basket : basket
        });
       
            navigate('/orders');
            dispatch({
                type : 'REMOVE_ALL'
            })
      

}


    return (
        <div className="payment">

<div className="payment__container" >
<h1>
checkout (<NavLink to='/checkout'>{basket?.length} items</NavLink>)
</h1>



<div className="payment__section" >
<div  className="payment__title">
    <h3>Delivery address </h3>
</div>
<div className="payment_address">
    <p> {user?.email}</p>
    <p> 123 , Amazon Street </p>
    <p> India</p>
</div>


</div>

<div className="payment__section" >
<div className="payment__title">
    
<h3>Review items and delivery</h3>    
    </div>
    <div className="payment__item">
    {
        basket.map(item=>{
            return (
            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
        )})
    }

    </div>
</div>



<div className="payment__section" >
<div className="payment__title">
    
    <h3>Payment Method</h3>    
        </div>

        <div className="payment__details">
<p>UPI <input type='radio' /> </p>
<br/>
<button onClick={TheOrders}>Buy now</button>
             {/* redirect to orders page and empty the basket */}
        </div>
</div>


</div>
        
        </div>
    )
}

export default Payment