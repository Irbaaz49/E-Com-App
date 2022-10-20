import React from "react";
import { Link } from "react-router-dom";
import "./Mtwo.css"

const MainTwo = () => {
  const mainContentArray = [
    {
      id: "1",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Flight_186x116._SY116_CB653435429_.jpg",
      title: "Flight tickets",
    },
    {
      id: "2",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Bus_186x116._SY116_CB653435429_.jpg",
      title: "Bus Tickets",
    },
    {
      id: "3",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Train_186x116._SY116_CB653435429_.jpg",
      title: "Train Tickets",
    },
    {
      id: "4",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/essential_186x116._SY116_CB653435429_.jpg",
      title: "Essential Travel Products",
    },
  ];
  return (
    <div className="mainTwo">
      <h3 className="head">Ecom Pay | Book your travel tickets</h3>
      <div className="mainContent">
        {mainContentArray.map((item) => {
          return (
            <div className="mainContentItem" key={item.id}>
              <img src={item.imgUrl} alt="s" />
              <p className="title">{item.title}</p>
            </div>
          );
        })}
      </div>
      <Link to="#">Explore more from Amazon Pay</Link>
    </div>
  );
};

export default MainTwo;
