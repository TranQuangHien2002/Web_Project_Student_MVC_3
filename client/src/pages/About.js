import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Student from "../components/Student.component";
import CreateStudent from "../components/CreateStudent.component";
import UpdateStudent from "../components/UpdateStudent.component";
import { useState } from "react";
function About() {
  const [isToolbarVisible, setToolbarVisible] = useState(false);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const handleUsernameClick = () => {
    setToolbarVisible(!isToolbarVisible);
  };

  const handleSubMenuClick = () => {
    setSubMenuVisible(!isSubMenuVisible);
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
          <p>UserName   &#9776;</p>
          {isToolbarVisible && (
            <div className="toolbar">
              <ul>
                <li onClick={handleSubMenuClick}>
                  <Link to="/account-info">View Account </Link>
                  {isSubMenuVisible && (
                    <ul>
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
      <footer className="App-footer">
      <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}

export default About;
