import React from "react";
import { Link } from "react-router-dom";
import "./Mone.css"
const Mone = () => {
  const mainContentArray = [
    {
      id: "1",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg",
      title: "Smart LED TVs",
    },
    {
      id: "2",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Appliances_1x._SY116_CB627444559_.jpg",
      title: "Appliances",
    },
    {
      id: "3",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg",
      title: "Furniture",
    },
    {
      id: "4",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg",
      title: "Kitchen products",
    },
  ];
  return (
    <div className="mainOne">
      <h3 className="head">Upgrade your home | Amazon Brands & more</h3>
      <div className="mainContent">
        {mainContentArray.map((item) => {
          return (
            <div className="mainContentItem" key={item.id}>
              <img src={item.imgUrl} alt="alt" />
              <p className="title">{item.title}</p>
            </div>
          );
        })}
      </div>
      <Link to="#">See more</Link>
    </div>
  );
};

export default Mone;