import React from "react";
import "../Cart/cart.css";
import { Link } from "react-router-dom";

export const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  const totalPrices = cartItems.reduce(
    (price, item) => price + item.quantity * item.Price,
    0
  );
  return (
    <div className="contain">
      <div className="naviBar">
        <div className="Bar">
          <Link to="/Homepage">
            <img className="backButton" src="back.png" alt="" />
          </Link>

          <span className="user">Cart</span>
          <div className="chatIcon">
            <Link to="">
              <img src="option.png" width={40} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div>
      <div className="Total">
            <h3>Total Price</h3>
            <div className="cartitemTotal">${totalPrices}</div>
            <button className="order">
              <h2>Order now</h2>
            </button>
          </div>

        <div className="pusher">
          {cartItems.map((item) => (
            <div key={item.id} className="cartlist">
              <div className="imgboxing">
                <img src={item.image} alt="" />
              </div>
              <div className="dete">
                <p>{item.name}</p>
                <p className="coloring">
                  {" "}
                  {item.quantity} * {item.price}
                  <div className="Buttonadder">
                    <button
                      className="_button"
                      onClick={() => handleAddProduct(item)}
                    >
                      +
                    </button>
                    <button
                      className="button"
                      onClick={() => handleRemoveProduct(item)}
                    >
                      -
                    </button>
                  </div>
                </p>
              </div>
            </div>
          ))}         
        </div>
        <div className="cart-item">
          {cartItems.length === 0 && <div><h2> Cart is empty</h2></div>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
