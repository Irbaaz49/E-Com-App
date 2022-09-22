// import { Check } from '@mui/icons-material';
import React, { useState } from 'react'
// import styles from "./CheckOutDetailsPage.module.scss"
// import { CartItemsContext } from "../../context/CartItemsContext";
// import { useContext } from 'react';
// import primeLogo from "../../assets/images/checked_prime.png";
// import { AiOutlineLock } from 'react-icons/ai';
// import amazonLogo from "../../assets/images/amazon1.png"
import { useNavigate } from 'react-router-dom';
// import useStateValue from "../Firebase/firebase"
import { useStateValue } from '../MainData/StateProvider';

import "./Check.css";

const Check = () => {
    // const { items, dispatchItemEvent } = useContext(CartItemsContext);
    // const[{basket,user}, dispatch] = useStateValue();
  const [{ basket, user }, dispatch] = useStateValue();

    const [address, setAddress] = useState("");
    const addressHandler = (value) => {
        setAddress(value);
    }
    const [paymentMethod, setPaymentMethod] = useState("")
    const paymentHandler = (value) => {
        setPaymentMethod(value);
    }
    // let subtotal = items.reduce((accumulator, object) => {
    //     return Number(accumulator) + Number(object.price);
    // }, 0);
    const navigate = useNavigate();
    const placeOrderHandler = () => {
        if (!address || !paymentMethod) {
            alert("Please select Address and Payment method");
            return;
        } else {
            alert("order placed successfully.");
            // dispatchItemEvent("REMOVE_ALL_ITEMS");
            navigate("/")

        }
    }
    return (
        <div className="checkOutDetailsPage">
            <div className="top">
                {/* <img src={amazonLogo} alt="" /> */}
                <p className="checkout">Checkout</p>
                {/* <p className="Icon"><AiOutlineLock className="lockIcon" /></p> */}
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="section">
                        <p className="head">1 &nbsp;
                            Select a delivery address</p>
                        <div className="content">
                            <p className="contentHead">Most recently used</p>
                            <div className={address === "address1" ? "selected" :""}>
                                <input type="radio" checked={address === "address1"} name="address" value="address1" onClick={(e) => addressHandler(e.target.value)} /> <label htmlFor="">Room No 18, 2nd Flr, Mandvi Chambers, 184, Samuel Street, Masjid Bunder(e),Mumbai,Maharashtra,Phone number - 02223443418</label>
                            </div>
                            <div className={address === "address2" ? "selected": ""}>
                                <input type="radio" checked={address === "address2"} name="address" value="address2" onClick={(e) => addressHandler(e.target.value)} /> <label htmlFor="">107 Avanti Chambers R C Dutt Road, B/h Express Hotel R C Dutt Road,Mumbai,Maharashtra,Phone number - 02223443418</label>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <p className="head">2 &nbsp;

                            Payment method</p>
                        <div className="content">
                            <p className="contentHead">Most recently used</p>
                            <div className={paymentMethod === "COD" ? "selected" : ""}>
                                <input type="radio" name="paymentMethod" onClick={(e) => paymentHandler(e.target.value)} value="COD" /> <label htmlFor="">Cash on delivery (COD)</label>
                            </div>
                            <div className={paymentMethod === "netBanking" ? "selected" : ""}>
                                <input type="radio" name="paymentMethod" onClick={(e) => paymentHandler(e.target.value)} value="netBanking" /> <label htmlFor="">Net banking</label>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <p className="head">3 &nbsp;


                            Items and delivery</p>
                        <div className="content">
                            <p className="contentHead">Delivery date: <span className="date">7 July 2022</span> </p>
                            <p>If you order in the next 20 hours and 21 minutes ( Details )
                            </p>
                            <p>Items dispatched by Amazon
                            </p>
                            {
                                basket.map((item) =>
                                    <div key={item.id} className="items">
                                        <img src={item.img || item.image} alt="" />
                                        <div className="itemDetails">
                                            <p> <strong>{item.title}</strong> </p>
                                            {/* <p className="price">₹{item.price} <img src={primeLogo} className="checkedPrime" alt="" /> </p> */}
                                            <select name="" id="">
                                                <option value="">Qty :1</option>
                                            </select>
                                            <p>Sold by : Amazon India</p>
                                        </div>
                                        <div className="deliveryDetails">
                                            <p> <strong>Choose a delivery option:</strong>
                                            </p>
                                            <p>
                                                <input type="radio" checked />
                                                <span> <span className="day">Thursday</span>   — FREE Delivery with Prime</span>
                                            </p>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
                <div className="right">
                    <button onClick={placeOrderHandler}>Place your order</button>
                    <p className="rightTopText">By placing your order, you agree to Amazon's privacy notice and conditions of use.</p>
                    <p className="rightHead">Order Summary</p>
                    <p className="numbers">
                        <span>Items:</span>
                        {/* <span>₹{subtotal}</span> */}
                    </p>
                    <p className="numbers">
                        <span>Delivery:	</span>
                        <span>₹0.00</span>
                    </p>
                    <p className="numbers">
                        <span>Order Total:</span>
                        {/* <span>₹{subtotal} */}
                        {/* </span> */}
                    </p>
                    <div className="bottomText">
                        <p>How are delivery costs calculated?</p>
                        <p>Amazon Prime Delivery has been applied to the eligible items in your order.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Check