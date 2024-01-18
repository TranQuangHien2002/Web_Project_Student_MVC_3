import { useState } from "react";
import React  from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function UpdateStudent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [classname, setClassname] = useState("");
    const {id} = useParams();

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const newStudent = {
            name,
            email,
            classname,
        };
        axios.put(`http://localhost:8082/api/update/${id}`, newStudent)
        .then(res => {
            console.log("success");
            navigate("/about");
        }).catch(err => {
            console.log(err);
        })
    }

  return (
    <div className="container-crud">
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="box">
            <label>Name</label>
            <input type="text" placeholder="Enter Name"
            onChange={e=> setName(e.target.value)} />
          </div>
          <div className="box">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" 
                onChange={e=> setEmail(e.target.value)}
            />
          </div>
          <div className="box">
            <label>Class</label>
            <input type="text" placeholder="Enter Class" 
                onChange={e=> setClassname(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-submit"  >
            Submit
            </button>
        </form>
      </div>
    </div>
  );
}
export default UpdateStudent;
