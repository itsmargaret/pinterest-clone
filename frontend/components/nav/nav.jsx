import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { myFunction } from "../dropdown/dropdown";

const Greeting = ({ currentUser, logout }) => {
  const personalGreeting = () => {
    const username = currentUser.email.split("@")[0];

    return (
      <hgroup className="header-group">
        <Link to="/" className="header-link">
          <img
            className="header-link"
            src="https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/apple-touch-icon.png"
            alt=""
          />
        </Link>
        {/* <input type="text" placeholder="    Search" ></input> */}
        <nav className="right-nav">
          <ul className="nav-button">
            <li>
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            {/* <li>
                            <button>Following</button>
                        </li> */}
            <li>
              <Link to={`/${currentUser.id}/boards`}>
                <button id="profile-button">
                  <img className="profile-icon" src={currentUser.imageUrl} />{" "}
                  {username}
                </button>
              </Link>
            </li>
            <div className="border"></div>
            <li className="dropdown">
              <FontAwesomeIcon
                icon={faEllipsisH}
                onClick={() => myFunction()}
                className="dropbtn"
              />
              <ul id="myDropdown" className="dropdown-content">
                <li>
                  <a
                    className="social"
                    href="https://www.linkedin.com/in/margaret-cavenagh-93589846/"
                    target="_blank"
                  >
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
                    {"    "} LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="social"
                    href="https://github.com/itsmargaret"
                    target="_blank"
                  >
                    <img src="https://img.icons8.com/windows/32/000000/github.png" />
                    {"    "} GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="social"
                    href="https://angel.co/margaret-cavenagh-1"
                    target="_blank"
                  >
                    <img src="https://img.icons8.com/color/32/000000/angelist.png" />
                    {"    "} AngelList
                  </a>
                </li>
                <li onClick={logout}>
                  <a>Log out</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </hgroup>
    );
  };

  return currentUser ? personalGreeting(currentUser, logout) : <Modal />;
};

export default Greeting;
