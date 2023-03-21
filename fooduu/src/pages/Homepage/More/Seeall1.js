import React from "react";
import "../Homepage.css";
import { Link } from "react-router-dom";

export const Seeall1 = () => {
  return (
    <>
      <div className="Heading">
        <Link to="/Homepage">
          <img className="backButton" src="back.png" alt="" />
        </Link>
        <p>Special Offer</p>
      </div>
      <div className="SeeallBar">
        <div className="Seeall_Content">
          <div className="OfferBox">
            <p>
              <h1>30% Discount</h1>
            </p>
            <img className="discountpic" src="imgs4.jpg" alt="" />
          </div>
          <div className="OfferBox2">
            <p>
              <h1>60% Discount</h1>
            </p>
            <img className="discountpic" src="imgs1.jpg" alt="" />
          </div>
          <div className="OfferBox3">
            <p>
              <h1>50% Discount</h1>
            </p>
            <img className="discountpic" src="imgs3.jpg" alt="" />
          </div>
          <div className="OfferBox5">
            <p>
              <h1>80% Discount</h1>
            </p>
            <img className="discountpic" src="imgs4.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Seeall1;
