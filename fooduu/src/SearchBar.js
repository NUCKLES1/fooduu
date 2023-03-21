import React, { useState } from "react";
import "./pages/component/component.css";
import { Link } from "react-router-dom";
import data from "./data";

export const SearchBar = ({
  productItems,
  handleAddProduct,
  handleViewProduct,
}) => {
  const [data, setData] = -useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(data);

  return (
    <>
      <div className="SearchBar">
        <div className="Searchbutton">
          <Link to="/Homepage">
            <img className="backupButton" src="back.png" alt="" />
          </Link>
          <div className="Form">
            <img className="search-button" src="/search.png" alt="" />
            <form id="searchinput">
              <input
                className="search"
                type="text"
                placeholder="Search"
                onChange={(e) => setData(e.target.value)}
              />
              onSubmit={(e) => handleSubmit(e)}
            </form>
          </div>
        </div>
        <div className="cardioholder">
          {productItems.map((productItems) => (
            <div className="listholder">
              <Link to="/moreinfo">
                <div
                  className="imgbox"
                  onClick={() => handleViewProduct(productItems)}
                >
                  <img src={productItems.image} alt="" />
                </div>
              </Link>
              <div className="detailing">
                <p>{productItems.name}</p>
                <p className="coloring">{productItems.price}</p>
                <button
                  className="add_button"
                  onClick={() => handleAddProduct(productItems)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
