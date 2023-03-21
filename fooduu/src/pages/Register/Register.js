import "../Register/Register.css"
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"


export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <img
      className="logoimage"
       src="logofood.png"
        alt=""
        />
        <span className="logo">Create new Account</span>
        <form>
          <input className="input" type="text" placeholder="Fullname" />
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="label" htmlFor="file">
            <img src="imagefolder.png" alt="" />
            <span>Add an avatar</span>
          </label>
        </form>
        <Link to="/Homepage" className="send"> 
          <button className="button_Text">Sign up</button>
          </Link>


        <Link to="/Slider">
          <p className="option">Already have an account? Login</p>
        </Link>
     
      </div>
    </div>
  );
};

export default Register;