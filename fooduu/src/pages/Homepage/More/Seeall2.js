import React from "react";
import "../Homepage.css";
import { Link } from "react-router-dom";

export const Seeall2 = () => {
  return (
    <div className="SeeallBar">
      <div className="Heading">
        <Link to="/">
          <img className="backButton" src="back.png" alt="" />
        </Link>
      </div>
      <div className="Seeall_Content2">
        <div className="Fold">
        <div className="cardContent">
          <img
            height={200}
            width={200}
            className="sala"
            src="salad1.jpg"
            alt=""
          />
          <div className="cardtextcontent">
            <p className="name">Mixed salad...</p>
            <p className="prices">$6.00</p>
          </div>
        </div>
        <div className="cardContent2">
          <img
            height={200}
            width={200}
            className="sala"
            src="salad2.jpg"
            alt=""
          />
          <div className="cardtextcontent">
            <p className="name">Mixed salad...</p>
            <p className="prices">$6.00</p>
          </div>
        </div>
        </div>
       
        <div className="Fold">
        <div className="cardContent">
          <img
            height={200}
            width={200}
            className="sala"
            src="salad4.jpg"
            alt=""
          />
          <div className="cardtextcontent">
            <p className="name">Mixed salad...</p>
            <p className="prices">$6.00</p>
          </div>
        </div>
        <div className="cardContent2">
          <img
            height={200}
            width={200}
            className="sala"
            src="salad3.jpg"
            alt=""
          />
          <div className="cardtextcontent">
            <p className="name">Mixed salad...</p>
            <p className="prices">$6.00</p>
          </div>
        </div>
        </div>
        <div className="Fold">
        <div className="cardContent">
          <img
            height={200}
            width={200}
            className="sala"
            src="salad5.jpg"
            alt=""
          />
          <div className="cardtextcontent">
            <p className="name">Mixed salad...</p>
            <p className="prices">$6.00</p>
          </div>
        </div>
        <div className="cardContent2">
          <img
            height={200}
            width={200}
            className="sala"
            src="salad6.jpg"
            alt=""
          />
          <div className="cardtextcontent">
            <p className="name">Mixed salad...</p>
            <p className="prices">$6.00</p>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Seeall2;
