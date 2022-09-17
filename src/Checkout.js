import React from 'react';
import "./checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import SubTotal from "./SubTotal";

 
function Checkout() {
const[{basket}, dispatch] = useStateValue();


const removeAll = ()=>{
  dispatch({
    type : 'REMOVE_ALL',
  })
}

  return (
    <div className='checkout'>

<div className='checkout__left'>
    <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='img'/>

<div className='checkout__title'>

<h2 className='checkout__title' >Shopping Basket</h2>
{
  basket.map(item=>
<CheckoutProduct id={item.id} image={item.image} price={item.price} rating={item.rating} title={item.title} />

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