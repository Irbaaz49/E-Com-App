import React from "react"
import CheckoutProduct from "./CheckoutProduct";
import './Payment.css'
import { useStateValue } from "./StateProvider"
import { NavLink, useNavigate } from "react-router-dom";
import { db } from "./firebase";
// import { getBasketTotal } from "./reducer"
// import { v4 as uuid } from "uuid/";



// value={getBasketTotal(basket)}
const Payment = () =>{
    const navigate = useNavigate();
const [{basket,user} , dispatch] = useStateValue();
// let value = getBasketTotal(basket);

const TheOrders = async (e) =>{
    e.preventDefault();
    
    // try {
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(user?.uid)
        .set({
            basket : basket
        });
        // if(user)
        // setTimeout(() => {
            
            navigate('/orders');
            dispatch({
                type : 'REMOVE_ALL'
            })
        // }, 2000);
// 
    // } catch (error) {
        // console.log(error)
    // }


}
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2022, 10, 17);
//     }
//   }
// }


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
    <p>123 , street line</p>
    <p>Hyderabad India</p>
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

<button onClick={TheOrders}>Buy now</button>
             {/* redirect to orders page and empty the basket */}
        </div>
</div>


</div>
        
        </div>
    )
}

export default Payment