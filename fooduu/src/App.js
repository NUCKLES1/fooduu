import React, { useState } from "react";
import data from "./data";
import Routing from "./pages/Routing";
import './App.css'

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems ] = useState([]);
  const [viewItems, setViewItems] = useState([]);


  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleViewProduct = (product) => {
    const ProductExist = viewItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setViewItems(
        viewItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity }
            : item
        )
      );
    } else {
      setViewItems([...viewItems, { ...product, quantity: 0 }]);
    }
  };


  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div>
      <Routing
        productItems={productItems}
        cartItems={cartItems}
        viewItems={viewItems}
        handleViewProduct={handleViewProduct}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
      />
    </div>
  );
};
export default App;
