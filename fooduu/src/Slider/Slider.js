import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Slider/Slider.css";

export default function slider() {
  return (
    <Link to="/Register">
      <div className="S_container">
        <div className="S_slide">
          <div className="S_content">
            <div className="S_textHolder">
              <div className="shadow">
              <span className="S_bigtext">Welcome to Fooduu!</span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                voluptas, vero maxime esse ab sapiente eos molestias debitis
                quo.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
