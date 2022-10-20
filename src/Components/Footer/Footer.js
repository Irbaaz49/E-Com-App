import React from "react"
import { useStateValue } from "../MainData/StateProvider"
import "./Footer.css"
import { NavLink } from "react-router-dom"


const Footer = ()=>{

const[{user}, dispatch] = useStateValue();
    return (
        <>
        
        <footer>
   

   <div className="middle">
     <div className="center">
       <ul>
         <li><h3>Get to Know Us</h3></li>
         <li><a href="#">Careers</a></li>
         <li><a href="#">About Ecom</a></li>
         <li><a href="#">Investor Relations</a></li>
         <li><a href="#">Ecom Devices</a></li>
       </ul>
       <ul>
         <li><h3>Make Money with Us</h3></li>
         <li><a href="#">Sell on Ecom</a></li>
         <li><a href="#">Sell Your Services on Ecom</a></li>
         <li><a href="#">Sell on Ecom Business</a></li>
         <li><a href="#">Sell Your Apps on Ecom</a></li>
         <li><a href="#">Become an Affiliate</a></li>
         <li><a href="#">Advertise Your Products</a></li>
         <li><a href="#">Self-Publish with Us</a></li>
         <li><a href="#">Become an Ecom Vendor</a></li>
         <li><a href="#">Sell Your Subscription on Ecom</a></li>
         <li><a href="#">› See all</a></li>
       </ul>
       <ul>
         <li><h3>Ecom Payment Products</h3></li>
         <li><a href="#">Ecom Rewards Visa Signature Cards</a></li>
         <li><a href="#">Ecom.com Store Card</a></li>
         <li><a href="#">Ecmo.com Corporate Credit Line</a></li>
         <li><a href="#">Shop with Points</a></li>
         <li><a href="#">Credit Card Marketplace</a></li>
         <li><a href="#">Reload Your Balance</a></li>
         <li><a href="#">Ecom Currency Converter</a></li>
       </ul>
       <ul>
         <li><h3>Let Us Help You</h3></li>
         <li><a href="#">Your Account</a></li>
         <li><NavLink to={user?'/orders':'/login'}>Your Orders</NavLink></li>
         <li><a href='#'>Shipping Rates &amp; Policies</a></li>
         <li><a href="#">Ecom Prime</a></li>
         <li><a href="#">Returns &amp; Replacements</a></li>
         <li><a href="#">Manage Your Content and Devices</a></li>
         <li><a href="#">Ecmo Assistant</a></li>
         <li><a href="#">Help</a></li>
       </ul>
       <ul className="copy text-center">
         <li>&copy; 1996-2022, Ecom.com, Made by Irbaaz Hussain</li>
       </ul>
     </div>

   </div>

 
 </footer>
        
        </>

    )
}

export default Footer
