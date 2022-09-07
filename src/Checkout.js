import React from 'react';
import "./checkout.css"
import SubTotal from "./SubTotal";
 
function Checkout() {
  return (
    <div className='checkout'>

<div className='checkout__left'>
    <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='img'/>

<div className='checkout__title'>

<h2 className='checkout__title' >Shopping Basket</h2>
{/* basketItem */}
{/* basketItem */}
{/* basketItem */}
{/* basketItem */}

</div>


</div>


<div className='checkout__right'>
<SubTotal/>

</div>

    </div>
  )
}

export default Checkout