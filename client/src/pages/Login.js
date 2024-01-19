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
  // const [userId, setUserId] = useState(null); 

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
            // setUserId(res.data.userId);
            localStorage.setItem('userId', res.data.userId); 
            console.log(res.data.userId);
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
    <div className="container_login">
      <div className="Login">
        <h1>Sign in</h1>
        <form>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
          />
          <span>{errors.email && <span>{errors.email}</span>}</span>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleInput}
          />
          <span>{errors.password && <span>{errors.password}</span>}</span>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
          <Link to="/signup" className="btn-signup">
            Sign Up
          </Link>
        </form>
      </div>
    </div>

  );
}

export default Login;
