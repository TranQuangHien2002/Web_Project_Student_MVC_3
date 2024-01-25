import { useState } from "react";
import React  from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

function UpdateStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    classname: "",
  });

  useEffect(() => {
    const storedStudent = localStorage.getItem("student");
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    }
  }, []);

  const navigate = useNavigate();

  function handleChange(event) {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:8082/api/students/update/${id}`, student)
      .then((res) => {
        console.log("success");
        navigate("/about");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container-crud">
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="box-crud">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={student.name}
              onChange={handleChange}
            />
          </div>
          <div className="box-crud">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={student.email}
              onChange={handleChange}
            />
          </div>
          <div className="box-crud">
            <label>Class</label>
            <input
              type="text"
              name="classname"
              placeholder="Enter Class"
              value={student.classname}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default UpdateStudent;