import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/student.css";
function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // const userId = localStorage.getItem('userId');
    let roomID = localStorage.getItem('roomID');
    axios
      .get(`http://localhost:8082/api/students/${roomID}`)
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = async (id_student) => {
    try {
      await axios.delete(`http://localhost:8082/api/students/${id_student}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="container">
      <Link to='/create' className="btn-add"> Add + </Link>
      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.classname}</td>
              <td>
                <Link to={`update/${data.ID_student}`} className="btn-edit">Edit</Link>
                <button className="btn-delete" onClick={ e=> handleDelete(data.ID_student)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Student;
