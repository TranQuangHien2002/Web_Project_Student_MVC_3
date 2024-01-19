import { useState} from "react";
import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/crudStudent.css";

function CreateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [classname, setClassname] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // const userId = localStorage.getItem('userId');
    const roomID = localStorage.getItem('roomID');
    const newStudent = {
      name,
      email,
      classname,
      ID : roomID,
    };
    axios
      .post(`http://localhost:8082/api/students/create/${roomID}`, newStudent)
      .then((res) => {
        console.log("success");
        navigate("/about");
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
      <div className="container-crud">
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <div className="box-crud">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="box-crud">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="box-crud">
              <label>Class</label>
              <input
                type="text"
                placeholder="Enter Class"
                onChange={(e) => setClassname(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <footer className="App-footer">
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}

export default CreateStudent;
