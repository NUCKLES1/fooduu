import React from "react";
import "../Homepage/Homepage.css";
import Header from "../component/Header";
import Product from "../Products";
import { Link } from 'react-router-dom';

export const Homepage = ({
  cartItems,
  productItems,
  handleAddProduct,
  handleViewProduct
}) => {

  return (
    <div className="container">
      <Header cartItems={cartItems} />
      <main div className="main">
        <div className="form">
          <form id="searchInput">
            <Link to="/SearchBar">
            <input
              className="search"
              type="text"
              placeholder="What are you craving for?"
            />
            </Link>
          </form>
          <img className="search_button" src="/search.png" alt="" />
          <div className="item-container">

          </div>
        </div>
        <div className="grid">
          <div className="space">
            <p> Special Offer😋 </p>
            <Link to="/Seeall1">
            <p className="green">See All</p>
            </Link>
          </div>
        </div>
        <div className="Slider_frame">
          <div className="Slide_images">
            <div className="burger">
              <img height={250} className="burger" src="burgerr.jpg" alt="" />
            </div>
            <div className="burger">
              <img height={250} className="burger" src="imgs1.jpg" alt="" />
            </div>
            <div className="burger">
              <img height={250} className="burger" src="imgs4.jpg" alt="" />
            </div>
            <div className="burger">
              <img height={250} className="burger" src="imgs3.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="gridbar">
          <img height={70} width={70} src="ham.png" alt="" />

          <img height={70} width={70} className="push" src="pizza.png" alt="" />

          <img
            height={70}
            width={70}
            className="push"
            src="noodles.png"
            alt=""
          />

          <img height={70} width={70} className="push" src="meat.png" alt="" />
        </div>
        <div className="gridtext">
          <p>Hambur.</p>
          <p className="pushtext">Pizza</p>
          <p className="pushtext">Noodles</p>
          <p className="pushtext">Meat</p>
        </div>
        <div className="nextgrid">
          <img height={70} width={70} src="vegetable.png" alt="" />

          <img height={70} width={70} className="push" src="cake.png" alt="" />

          <img height={70} width={70} className="push" src="drink.png" alt="" />

          <img height={70} width={70} className="push" src="more.png" alt="" />
        </div>
        <div className="gridtext">
          <p className="pushtext">Vegeta</p>
          <p className="pushtext">Cake</p>
          <p className="pushtext">Drinks</p>
          <p className="pushtext">More</p>
        </div>
        <div className="space">
          <p>Discount Offer!🤩 </p>
          <Link to="/Seeall2">
          <p className="green">See All</p>
          </Link>
        </div>
        <div className="slide">
          <div className="card">
            <img
              height={200}
              width={200}
              className="salad"
              src="salad1.jpg"
              alt=""
            />
            <div className="cardtext">
              <p className="name">Mixed salad Bonb...</p>

              <p className="price">$6.00</p>
            </div>
          </div>

          <div className="card">
            <img
              height={200}
              width={200}
              className="salad"
              src="salad2.jpg"
              alt=""
            />
            <div className="cardtext">
              <p className="name">Mixed salad Bonb...</p>
              <p className="price">$6.00</p>
            </div>
          </div>

          <div className="card">
            <img
              height={200}
              width={200}
              className="salad"
              src="salad3.jpg"
              alt=""
            />
            <div className="cardtext">
              <p className="name">Mixed salad Bonb...</p>

              <p className="price">$6.00</p>
            </div>
          </div>

          <div className="card">
            <img
              height={200}
              width={200}
              className="salad"
              src="salad4.jpg"
              alt=""
            />
            <div className="cardtext">
              <p className="name">Mixed salad Bonb...</p>

              <p className="price">$6.00</p>
            </div>
          </div>

          <div className="card">
            <img
              height={200}
              width={200}
              className="salad"
              src="salad5.jpg"
              alt=""
            />
            <div className="cardtext">
              <p className="name">Mixed salad Bonb...</p>

              <p className="price">$6.00</p>
            </div>
          </div>

          <div className="card">
            <img
              height={200}
              width={200}
              className="salad"
              src="salad6.jpg"
              alt=""
            />
            <div className="cardtext">
              <p className="name">Mixed salad Bonb...</p>

              <p className="price">$6.00</p>
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="space">
            <p>Recommended😍</p>
            <p className="green">See All</p>
          </div>
        </div>
        <Product
          productItems={productItems}
          handleViewProduct={handleViewProduct}
          handleAddProduct={handleAddProduct}
        />
      </main>
    </div>
  );
};

export default Homepage;
