import React , { useEffect } from "react"
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout"; 
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider"
import  Payment  from "./Payment"
import Orders from "./Orders"
import Register from "./Register";
// import { loadStripe } from "@stripe/stripe-js"
//react flip move
//react spinner
//stripe

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
auth.onAuthStateChanged(authUser=>{
  console.log("the user is ->", authUser);
  if(authUser){
    //the user just logged in / the user was logged in 

dispatch({
  type:'SET_USER',
  user : authUser
})

  }else{
    //the user is logged out
dispatch({
  type:'SET_USER',
  user : null
})
  }
})
  },[])
  return (
    <>
      <div className="App">
          
    <Routes>
        <Route exact path="/" element={<>
        <Header /><Home></Home>
        </>} />
        <Route exact path="/checkout" element={<>
        <Header/>
        <Checkout></Checkout>
        </>} />
        <Route exact path="/payment" element={<>
        <Header/>
        <Payment></Payment>
        </>} />
        <Route exact path="/orders" element={<>
        <Header/>
        <Orders></Orders>
        </>} />
        <Route exact path="/register" element={<Register></Register>} />
        <Route exact path="/login" element={<Login></Login>} />

    </Routes>
      </div>
    </>
  );
}

export default App;

//https://mui.com/material-ui/material-icons/?query=basket
//https://medium.com/cleverprogrammer/amazon-clone-using-react-the-ultimate-guide-fba2b36f3458
//https://console.firebase.google.com/u/0/project/clone-234cc/settings/general/web:YjJiZTRkMjktMmRmMy00N2YwLTg2OWItNzA5OTZhYzI1M2U3
//https://console.firebase.google.com/u/0/project/clone-234cc/firestore/data/~2F


//material -ui for icons
//router for navigation
//react currency format
//stripe liberary for payment 


