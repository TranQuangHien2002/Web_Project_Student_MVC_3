import { useState } from "react";
import React  from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import "../styles/room.css";
function UpdateRoom() {
    const [name, setName] = useState("");
    const [infor, setInfor] = useState("");
    const {id} = useParams();

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const newRoom = {
            name,
            infor,
        };
        axios.put(`http://localhost:8082/api/rooms/update/${id}`, newRoom)
        .then(res => {
            console.log("success");
            navigate("/home");
        }).catch(err => {
            console.log(err);
        })
    }

  return (
    <div className="container-crud">
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <h2>Update Room</h2>
          <div className="box-crud">
            <label>Name</label>
            <input type="text" placeholder="Enter Name"
            onChange={e=> setName(e.target.value)} />
          </div>
          <div className="box-crud">
            <label>Room</label>
            <input type="text" placeholder="Enter Room" 
                onChange={e=> setInfor(e.target.value)}
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
export default UpdateRoom;
