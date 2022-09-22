import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../MainData/StateProvider";
// import { LoggedInContext } from "../context/LoggedInContext";
// import styles from "../styles/MainFive.module.scss";
import "./Mthree.css";
const MainFive = () => {
//   const { isLoggedIn } = useContext(LoggedInContext)
const[{user}, dispatch] = useStateValue();
  const imgUrl =
    "https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg";
  return (
    <div className="mainFive">
      {!user ? <div className="top_Content">
        <h3>Sign in for your best experience</h3>
        <Link className="signInBtn" to="/login">
          Sign in securely
        </Link>
        {/* isLoggedIn */}
      </div> : <div className="top_Content">
        <p><strong>Shop on the Amazon App</strong>
        </p>
        <p>Fast, convenient and secure | Over 17 crore products in your pocket </p>
        <Link className="signInBtn" to="#">
          Download the Amazon app
        </Link>
      </div>}
      <div className="bottom_Content">
        <img src={imgUrl} alt="laptop device" />
      </div>
    </div>
  );
};

export default MainFive;