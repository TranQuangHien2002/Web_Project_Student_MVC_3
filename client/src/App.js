import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import "./App.css";
import Student from "./components/Student.component";
import CreateStudent from "./components/CreateStudent.component";
import UpdateStudent from "./components/UpdateStudent.component";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
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
        </header> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
        <footer className="App-footer"></footer>
      </div>
    </Router>
  );
}

export default App;
