import React from 'react';
import { NavLink } from 'react-router-dom';
import "./checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../MainData/StateProvider';
import SubTotal from '../SubTotal/SubTotal';
import c11 from "../img/c11.jpg";

function Checkout() {
const[{basket, user}, dispatch] = useStateValue();


const removeAll = ()=>{
  dispatch({
    type : 'REMOVE_ALL',
  })
}

  return (
    <div className='checkout'>

<div className='checkout__left'>
    <img src={c11} alt='img'/>

<div className='checkout__title'>
<h3>Hello,{user ? user.email.slice(0,user.email.indexOf('@')) : "Guest"}</h3>
<h2 className='checkout__title' >Shopping Basket</h2>
{basket.length > 0 ?(
  basket.map(item=>
<CheckoutProduct id={item.id} image={item.image} price={item.price} rating={item.rating} title={item.title} />

  )):(
    <p>Your basket is empty : <NavLink to='/'>Go Add Something</NavLink></p>
  )
}

</div>
{
basket.length > 0 ?
<button onClick={removeAll}>Remove all</button>
:
""
}



</div>


<div className='checkout__right'>
<SubTotal/>

</div>

    </div>
  )
}

export default Checkout