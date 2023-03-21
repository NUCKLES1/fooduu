import React from "react";
import "../Notify/Notify.css";
import { Link } from "react-router-dom";

export const Notify= () => {
  return (
    <div className="contain3">
      <div className="navBar">
        <div className="Bar">
          <Link to="/">
            <img className="backButton" src="back.png" alt="" />
          </Link>
          <span className="user">Notification</span>
        </div>

        <Link to="/Chat">
          <img
          className="chatlogo"
           src="chat.png"
            alt="" />
        </Link>
      </div>
      <div className="holding">
      <div className="messageCard">
        <img
          className="logoApp"
          src="logofood.png"
          width={50}
          height={50}
          alt=""
        />

        <p className="content">
          <span className="descriptiontext">Orders Cancelled!</span>
          <br />
          consectetur adipisicing elit. Labore, facere sint! Et vitae nesciunt
          aliquid,. Labore, facere sint! Et vitae
        </p>
      </div>

      <div className="messageCard">
        <img
          className="logoApp"
          src="logofood.png"
          width={50}
          height={50}
          alt=""
        />

        <p className="content">
          <span className="descriptiontext">Orders Cancelled!</span>
          <br />
          consectetur adipisicing elit. Labore, facere sint! Et vitae nesciunt
          aliquid,. Labore, facere sint! Et vitae
        </p>
      </div>

      <div className="messageCard">
        <img
          className="logoApp"
          src="logofood.png"
          width={50}
          height={50}
          alt=""
        />

        <p className="content">
          <span className="descriptiontext">Orders Cancelled!</span>
          <br />
          consectetur adipisicing elit. Labore, facere sint! Et vitae nesciunt
          aliquid,. Labore, facere sint! Et vitae
        </p>
      </div>

      <div className="messageCard">
        <img
          className="logoApp"
          src="logofood.png"
          width={50}
          height={50}
          alt=""
        />

        <p className="content">
          <span className="descriptiontext">Orders Cancelled!</span>
          <br />
          consectetur adipisicing elit. Labore, facere sint! Et vitae nesciunt
          aliquid,. Labore, facere sint! Et vitae
        </p>
      </div>

      <div className="messageCard">
        <img
          className="logoApp"
          src="logofood.png"
          width={50}
          height={50}
          alt=""
        />

        <p className="content">
          <span className="descriptiontext">Orders Cancelled!</span>
          <br />
          consectetur adipisicing elit. Labore, facere sint! Et vitae nesciunt
          aliquid,. Labore, facere sint! Et vitae
        </p>
      </div>
      </div>
    </div>
  );
};

export default Notify
