import React from "react";
import { Link } from "react-router-dom";
import "../pages/component/component.css";

export const Product = ({ productItems, handleAddProduct,handleViewProduct }) => {
  return (
    <div className="cardio">
      {productItems.map((productItems) => { 
        return (
        <div className="listHolder" key={productItems}>

          <Link to="/moreinfo" productItems={productItems}>
          <div className="imgbox">
            <img src={productItems.image} alt="" />
          </div>
          </Link>
          <div className="detailing" >
            <p>{productItems.name}</p>
            <p className="coloring">{productItems.price}</p>
            <button className="add_button"
             onClick={() => handleAddProduct(productItems)}
             >Add to cart</button>
          </div>
      
        </div>
      )})}
    </div>
  );
};

export default Product;
