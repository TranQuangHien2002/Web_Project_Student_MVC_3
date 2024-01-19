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
import Room from "./components/Room.component";
import CreateRoom from "./components/CreateRoom.component";
import UpdateRoom from "./components/UpdateRoom.component";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
          <Route path="/" element={<Room />} />
          <Route path="/create/room" element={<CreateRoom />} />
          <Route path="/update/room/:id" element={<UpdateRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
