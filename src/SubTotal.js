import React from 'react';
import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider"
import { getBasketTotal } from "./reducer"
import { useNavigate } from 'react-router-dom';


function SubTotal() {
  const navigate = useNavigate();
  const[{basket,user}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>


<CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
{/* <button onClick={console.log(search)}>click</button> */}
<button onClick={(e)=> {
  
  if(user){
  navigate('/payment');
  }else{
    navigate('/login');
  }
  }} disabled={basket.length>0 ?'':'true'}>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal