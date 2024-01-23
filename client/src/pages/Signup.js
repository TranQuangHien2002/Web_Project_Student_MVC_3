import React from "react";
import { Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Validation from "../components/SignupValidation";
import "../styles/signup.css";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === ""){
      axios.post("http://localhost:8082/api/logins/signup",values)
      .then((res)=>{
        navigate("/");
      })
      .catch((err)=>{ 
        console.log(err);
      })
    }
  };
  return (
    <div className="signup-container">
       <div className="signup-form-container">
      <h1>Signup</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={handleInput}
          className="signup-input-name"
        />
        <span>{errors.name && <span className="signup-error-name">{errors.name}</span>}</span>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleInput}
          className="signup-input-email"
        />
        <span>{errors.email && <span className="signup-error-email">{errors.email}</span>}</span>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleInput}
          className="signup-input-password"
        />
        <span>{errors.password && <span className="signup-error-password">{errors.password}</span>}</span>
        <button type="submit" onClick={handleSubmit} className="signup-submit-button">
          Create Account
        </button>
        <Link to="/" className="signup-signin-link">
          Sign In
        </Link>
      </form>
    </div>
    </div>
   
  );
}

export default Signup;