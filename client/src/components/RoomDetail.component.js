import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/room.css";
import boloImage from "../asset/bolo.jpg";
import "../styles/student.css";
function Class() {
  const [room, setRoom] = useState([]);
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios
      .get(`http://localhost:8082/api/rooms/${userId}`)
      .then((res) => {
        setRoom(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDelete = async (id_room) => {
    try {
      await axios.delete(`http://localhost:8082/api/rooms/${id_room}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = (id) => {
    console.log("Room ID: ", id);
     localStorage.setItem('roomID', id);
  };
  return (
    <div>
      <div className="container-room">
        <div className="box-container">
          {room.map((data, index) => (
           <div className="box" key={index} onClick={() => handleClick(data.ID_room)}>
            <Link to="/about" key={index} style={{textDecoration:"none"}}>
              <img
                src={boloImage}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <h2>{data.name}</h2>
              <p>{data.infor}</p>
              <p>Phòng: {data.ID_room}</p>
              </Link>
              <Link to={`update/room/${data.ID_room}`} className="btn-edit">
                Edit
              </Link>
              <button
                className="btn-delete"
                onClick={(e) => handleDelete(data.ID_room)}
              >
                Delete
              </button>
          </div>
          ))}
        </div>
      </div>
      <div
        className="btn-create-room"
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to="/create/room"
          className="btn-add"
          style={{ top: -5, left: 20 }}
        >
          Add Room
        </Link>
      </div>
    </div>
  );
}

export default Class;
