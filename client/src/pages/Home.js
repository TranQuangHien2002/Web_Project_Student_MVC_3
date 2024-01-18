import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
// import CreateStudent from "../components/CreateStudent.component";
// import UpdateStudent from "../components/UpdateStudent.component";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search.." />
        </div>
        <div className="username-display">
          <p>Username</p>
        </div>
      </header>
      <Routes>
        <Route path="/about/*" element={<About />} />
        {/* <Route path="/create" element={<CreateStudent />} />
        <Route path="/update/:id" element={<UpdateStudent />} /> */}
      </Routes>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default Home;
