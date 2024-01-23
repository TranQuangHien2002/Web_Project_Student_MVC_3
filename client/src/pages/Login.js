import React from "react";
import { Link } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Validation from "../components/LoginValidation";
import "../styles/login.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8082/api/logins/login", values)
        .then((res) => {
          if (res.data.status === "Success") {
            localStorage.setItem('userId', res.data.userId); 
            localStorage.setItem('userName', res.data.userName); 
            console.log(res.data.userId);
            console.log(res.data.userName);
            navigate("/home");
          } else {
            alert("No record exist");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
 
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1>Sign in</h1>
        <form>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
            className="login-input-email"
          />
          <span>{errors.email && <span className="login-error-email">{errors.email}</span>}</span>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleInput}
            className="login-input-password"
          />
          <span>{errors.password && <span className="login-error-password">{errors.password}</span>}</span>
          <button type="submit" onClick={handleSubmit} className="login-submit-button">
            Login
          </button>
          <Link to="/signup" className="login-signup-link">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;