import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout"; 
import { Routes, Route } from "react-router-dom";


function App() {
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
//1:34:00

//material -ui for icons
//router for navigation
//react currency format

