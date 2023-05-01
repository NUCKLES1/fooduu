import React from "react";
import Cart from "./Cart/Cart";
import Notify from "./Notify/Notify";
import Homepage from "./Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Chat from "../pages/Chat/Chat";
import Explainer from "../Explainer/Explainer";
import SearchBar from "../SearchBar";
import Seeall1 from "./Homepage/More/Seeall1";
import Seeall2 from "./Homepage/More/Seeall2";
import Seeall3 from "./Homepage/More/Seeall3";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Slider from "../Slider/Slider";
import { SearchBarx } from "../SearchBarx";

export const Routing = ({
  productItems,
  val,
  viewItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleViewProduct,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Homepage"
          element={
            <Homepage
              cartItems={cartItems}
              productItems={productItems}
              handleAddProduct={handleAddProduct}
              handleViewProduct={handleViewProduct}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
        <Route path="/notify" element={<Notify />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/Moreinfo" element={<Explainer viewItems={viewItems} 
        handleAddProduct={handleAddProduct}
        productItems={productItems}
         handleRemoveProduct={handleRemoveProduct}
        />} />
        <Route
          path="/SearchBar"
          element={
            <SearchBar
              productItems={productItems}
              handleAddProduct={handleAddProduct}
              handleViewProduct={handleViewProduct}
            />
          }
        />
        <Route path="/SearchBarx" element={<SearchBarx />} />
        <Route path="/Seeall1" element={<Seeall1 />} />
        <Route path="/Seeall2" element={<Seeall2 />} />
        <Route path="/Seeall3" element={<Seeall3 />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Slider" element={<Slider />} />
      </Routes>
      <div></div>
    </div>
  );
};

export default Routing;
