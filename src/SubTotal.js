import React,{ useState } from 'react';
import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider"
import { getBasketTotal } from "./reducer"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';



function SubTotal() {
  const navigate = useNavigate();
  const [check, setCheck] = useState();
  const[{basket,user}, dispatch] = useStateValue();
 const disc = 100;
 if(check && basket.length>0 && user){
 swal({
  title: "Gift Benefits Applied",
  icon: "success",
  button : false,
  timer: 1000,
  dangerMode: false,
})}else if(check && basket.length>0 && !user){
  swal({
    title: "Please Sign in",
    // icon: "success",
    button : false,
    timer: 1000,
    dangerMode: false,
  }) 
};
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
              <input type="checkbox" value='one' onChange={(e)=> setCheck(e.target.value)} /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={ getBasketTotal(basket)  }
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