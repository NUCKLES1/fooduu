import React from 'react'
import "../Homepage/Homepage.css"
import { Link } from "react-router-dom";

 export const Header = ({ cartItems }) => {

  return (
    <div className="description">
    <div className="profile">
      <img
        src="/man.jpg"
        alt="Profile pic"
        className="man"
        width={50}
        height={50}
        priority
      />
      <span>
        <code className="code">Nuckles Daan</code>
      </span>
    </div>

    <div className="buttons">
      <Link to="/cart">
        <img src="/Cart.png" alt="cart" height={32} className="cart"
       />
        <div className="cartNotify">{cartItems.length === 0 ? "" : cartItems.length}</div>
      </Link>

      <Link to="/notify">
        <img src="/bell.png" alt="bell" className="bell" />
        <div className="notify"></div>
      </Link>
    </div>
  </div>
  )
}

export default Header;