import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import About from "./About";
import Room from "../components/Room.component";
import UpdateRoom from "../components/UpdateRoom.component";
import CreateRoom from "../components/CreateRoom.component";


function Home() {
  const [isToolbarVisible, setToolbarVisible] = useState(false);

  const handleUsernameClick = () => {
    setToolbarVisible(!isToolbarVisible);
  };


  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">My Student</Link>
            </li>
          </ul>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search.." />
        </div>
        <div className="username-display" onClick={handleUsernameClick}>
          <p>UserName &#9776;</p>
          {isToolbarVisible && (
            <div className="toolbar">
              <ul>
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
      <footer className="App-footer">
        <p className="text-footer-header">© 2024 My Website</p>
      </footer>
    </div>
  );
}

export default Home;
