import React , { useEffect } from "react"
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Checkout from "./Components/Checkout/Checkout"; 
import { Routes, Route } from "react-router-dom";
import { auth } from "./Components/Firebase/firebase";
import { useStateValue } from "./Components/MainData/StateProvider";
import  Payment  from "./Components/Payment/Payment"
import Orders from "./Components/Order/Orders"
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";


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
        <Footer/>
        </>} />
        <Route exact path="/checkout" element={<>
        <Header/>
        <Checkout></Checkout>
        <Footer/>
        </>} />
        <Route exact path="/payment" element={<>
        <Header/>
        <Payment></Payment>
        <Footer/>
        </>} />
        <Route exact path="/orders" element={<>
        <Header/>
        <Orders></Orders>
        <Footer/>
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


