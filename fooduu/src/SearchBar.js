import React, { useState } from "react";
import "./pages/component/component.css";
import { Link } from "react-router-dom";
import data from "./TemplateData.json";

export const SearchBar = ({ handleAddProduct,handleViewProduct,productItems }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </form>
          </div>
        </div>

        <div className="Template">
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div key={val.id} className="listHolder">
                  <Link
                    to="/SearchBarx"
                    onClick={() => handleViewProduct(productItems)}
                  >
                    <div className="imgboxing">
                      <img src={val.image} alt="" />
                    </div>
                  </Link>
                  <div className="dete1">
                    <p>{val.name}</p>
                    <p className="coloring">{val.price}</p>
                    <button
                      className="add_button"
                      onClick={() => handleAddProduct(val)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
