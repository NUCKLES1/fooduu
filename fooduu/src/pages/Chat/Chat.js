import React from "react";
import "../Chat/Chat.css";
import { Link } from "react-router-dom";

export const Chat = () => {
  return (
    <div className="styles.contain2">
      <div className="holder">
        <div className="chatInfo">
          <Link to="/Notify">
            <img className="back" src="back.png" alt="" />
          </Link>
          <div className="profile">
            <span>Customer Service</span>
          </div>
          <div className="chatIcon">
            <img className="option" src="option.png" alt="" />
          </div>
        </div>

        <div className="chatHolder">
          <div className="message">
            <div className="info">
              <img className="image" src="man.jpg" alt="" />
              <span>Just now</span>
            </div>
            <div className="content">
              <p>Hello</p>
              <img src="man.jpg" alt="" width={250} />
            </div>
          </div>

          <div className="message">
            <div className="info">
              <img className="image" src="man.jpg" alt="" />
              <span>Just now</span>
            </div>
            <div className="content">
              <p>Hello</p>
              <img src="man.jpg" alt="" width={250} />
            </div>
          </div>

          <div className="messageOwner">
            <div className="infoOwner">
              <img className="image" src="man.jpg" alt="" />
              <span>Just now</span>
            </div>
            <div className="contentOwner">
              <p>Hello</p>
              <img src="ham.png" alt="" width={250} />
            </div>
          </div>

          <div className="message">
            <div className="info">
              <img className="image" src="man.jpg" alt="" />
              <span>Just now</span>
            </div>
            <div className="content">
              <p>Hello</p>
              <img src="man.jpg" alt="" width={250} />
            </div>
          </div>

          <div className="messageOwner">
            <div className="infoOwner">
              <img className="image" src="man.jpg" alt="" />
              <span>Just now</span>
            </div>
            <div className="contentOwner">
              <p>Hello</p>
              <img src="burger.png" alt="" width={250} />
            </div>
          </div>
        </div>
        <div className="chatBar">
          <div className="inputHolder">
            <img className="stickers" src="emoji.png" alt="" />
            <input
              className="input"
              type="text"
              placeholder="Type something..."
            />
            <div className="more">
              <img src="attach.png" alt="" />
              <input type="file" style={{ display: "none" }} id="file" />
              <label htmlFor="file">
                <img src="camera.png" alt="" />
              </label>
            </div>
          </div>
          <div className="send">
            <button className="sender">
              <img src="sent.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
