import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function StudentDetail() {
  const student = JSON.parse(localStorage.getItem("selectedStudent")); // lấy thông tin sinh viên được lưu trong localStorage
  const userName = localStorage.getItem('userName');
  const [isToolbarVisible, setToolbarVisible] = useState(false);
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
      <div>
        <h2>{student.name}</h2>
        <p>{student.email}</p>
        <p>{student.classname}</p>
      </div>
      
      <footer className="home-footer">
        <p className="home-footer-text">© 2024 My Website</p>
      </footer>
    </div>
  );
}

export default StudentDetail;
