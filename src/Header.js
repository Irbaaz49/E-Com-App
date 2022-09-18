import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from "react-router-dom"
import { SportsBasketball } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
  
const[{basket, user}, dispatch] = useStateValue();
// const [search , setSearch] = useState("");
const handleAuthentication =()=>{
  if(user){
    auth.signOut();

  }
}

const handleSearch =(e)=>{
  // setSearch(e.target.value);
  dispatch({
    type: 'SEARCH_PRODUCT',
    search : e.target.value
  })
}
// if(search !== ""){
//   dispatch({
//     type: 'SEARCH_PRODUCT',
//     search : search
//   })
// }


return (
    <div className="header">
      <NavLink to='/'>
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="header__logo"
        alt="img"
      />
      </NavLink>

      <div className="header__search">
        <input type="text" className="header__searchInput" onChange={handleSearch} />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <NavLink to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello,{user ? user.email.slice(0,user.email.indexOf('@')) : "Guest"}</span>
          <span className="header__optionLineTwo">

            {user ? 'Sign Out' : 'Sign In'}
          </span>
        </div>
</NavLink>
<NavLink to={!user ? '/login' : '/orders'}>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        </NavLink>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
<NavLink to='/checkout'>
        <div className="header__optionBasket">
<ShoppingBasketIcon/>
<span className="header_optionLineTwo header__basketCount">{basket.length}</span>
        </div>
        </NavLink>



      </div>
    </div>
  );
}

export default Header;
