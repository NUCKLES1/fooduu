import React from "react";
import { Link } from "react-router-dom";
import products from "../data";
import "../Explainer/Explainer.css";


export const Explainer = ({productItems}) => {
  const product = products.find((product) => product.id ===
  productItems);

  const { image, price, name } = product;


  return (
    <div className="full">
      <div className="toPBar">
        <Link to="/Homepage">
          <img className="backButton" src="whiteleft.png" alt=""/>
        </Link>
      </div>
     <div className="boxpad">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h4>{price}</h4>
     </div>
    </div>
  );
};
export default Explainer;
