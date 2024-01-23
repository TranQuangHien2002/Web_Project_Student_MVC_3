import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import About from "./About";
import Room from "../components/Room.component";
import UpdateRoom from "../components/UpdateRoom.component";
import CreateRoom from "../components/CreateRoom.component";
import "../styles/home.css";
function Home() {
  const [isToolbarVisible, setToolbarVisible] = useState(false);
  const userName = localStorage.getItem('userName');
  const handleUsernameClick = () => {
    setToolbarVisible(!isToolbarVisible);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <nav>
          <ul className="home-nav-list">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">My Student</Link>
            </li>
          </ul>
        </nav>
        <div className="home-search-container">
          <input type="text" placeholder="Search.." className="home-search-input"/>
        </div>
        <div className="home-username-display" onClick={handleUsernameClick}>
          <p className="home-username-text">{userName} &#9776;</p>
          {isToolbarVisible && (
            <div className="home-toolbar">
              <ul className="home-toolbar-list">
                <li >
                  <Link to="/account-info">View Account </Link>
                </li>
                <li>
                  <Link to="/">Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <Routes>
        <Route path="/about/*" element={<About />} />
        <Route path="/" element={<Room />} />
        <Route path="/create/room" element={<CreateRoom />} />
        <Route path="/update/room/:id" element={<UpdateRoom />} />
      </Routes>
      <footer className="home-footer">
        <p className="home-footer-text">© 2024 My Website</p>
      </footer>
    </div>
  );
}

export default Home;