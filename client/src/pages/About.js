import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Student from "../components/Student.component";
import CreateStudent from "../components/CreateStudent.component";
import UpdateStudent from "../components/UpdateStudent.component";
import { useState } from "react";
import "../styles/about.css";

function About() {
  const [isToolbarVisible, setToolbarVisible] = useState(false);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const userName = localStorage.getItem('userName');

  const handleUsernameClick = () => {
    setToolbarVisible(!isToolbarVisible);
  };

  const handleSubMenuClick = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };
  return (
    <div className="about-container">
      <header className="about-header">
        <nav>
          <ul className="about-nav-list">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">My Student</Link>
            </li>
          </ul>
        </nav>
        <div className="about-search-container">
          <input type="text" placeholder="Search.." className="about-search-input"/>
        </div>
        <div className="about-username-display" onClick={handleUsernameClick}>
         <p className="home-username-text">{userName} &#9776;</p>
          {isToolbarVisible && (
            <div className="about-toolbar">
              <ul className="about-toolbar-list">
                <li onClick={handleSubMenuClick}>
                  <Link to="/account-info">View Account </Link>
                  {isSubMenuVisible && (
                    <ul className="about-submenu-list">
                      <li>
                        <Link to="/sub-menu-item-1">Sub Menu Item 1</Link>
                      </li>
                      <li>
                        <Link to="/sub-menu-item-2">Sub Menu Item 2</Link>
                      </li>
                    </ul>
                  )}
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
        <Route path="/" element={<Student />} />
        <Route path="/create" element={<CreateStudent />} />
        <Route path="/update/:id" element={<UpdateStudent />} />
      </Routes>
      <footer className="about-footer">
        <p className="about-footer-text">© 2024 My Website</p>
      </footer>
    </div>
  );
}

export default About;