import React from 'react'
import "./Explainer/Explainer.css"
import { Link } from 'react-router-dom'
export const SearchBarx = ({
    viewItems,
    productItems,
    handleAddProduct,
    handleRemoveProduct,
}) => {


  return (
<div className="full">
      <div className="toPBar">
        <Link to="/Homepage">
          <img className="backButton" src="whiteleft.png" alt="" />
        </Link>
      </div>
      <div className="Pusher">
        {viewItems.map((item) => (
          <div key={item.id} className="carTlist">
            <div className="imgBoXing">
              <img src={item.image} alt="" />
            </div>
            <div className="dete">
              <p>
                {item.name}
                <br />
              </p>
              <div className="spanit">
                tjvfiffugfififfifigjfifjfgjfhukyjtenteyrjtehtnetur adipisicing
                elit. Earum dicta quia commodi temporibus consequ
              </div>
            </div>
            <div className="Buttonadder1">
              <button
                className="_buttoning"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <span className="item-quantity">{item.quantity}</span>
              <button
                className="_buttoning"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <button
                className="add_button_"
                onClick={() => handleAddProduct(productItems)}
              >
                Add to cart<span className="coloring_"> {item.price}</span>
              </button>
          </div>
        ))}
      </div>
    </div>
  )
}
