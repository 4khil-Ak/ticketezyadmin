import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

const AddEventSchedule = () => {
  let params = useParams();
  let url = `https://apidev.ticketezy.com/events/${params.id}/event_schedules`;
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [time, setTime] = useState({
    "schedules": [
      { "date": "2022-01-21", "times": ["1639246330"] },
      { "date": "2022-01-22", "times": ["1639242330"] }
    ]
  })
  const addTime = () => {
    // create an array
    let addData = {
      id: schedule.length,
      name: "",
      price: "",
      total_seats: "",
      available_seats: ""
    }
    setSchedule((prevState) => {
      return [...prevState, addData]
    })
  };
  const handleSubmit = () => {
    setLoading(true)
    Axios.post(url, {
      event_schedule: time
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      setLoading(false)
      console.log(res, "success")
      navigate("/events");
    }).catch((error) => {
      setLoading(false)
      console.log(error)
      alert("Network Error");
    })
  }
  const handleCancel = () => {
    navigate("/events");
  }
  return (
    <>
      <div className="details p-3" style={{ background: "#fff" }}>
        <h3 className="text-dark p-2">Add Price Card !</h3>
        <div
          className="d-flex flex-column p-4"
          style={{ background: "var(--secondary)", borderRadius: "8px" }}
        >
          <div className="row p-2">
            <label className="mb-2">Show Schedule</label>
            <i className="fas fa-plus text-success cursor-pointer mx-2 my-1" onClick={addTime}></i>
            {schedule.map((data) => {
              return (
                <>
                  <div className="row w-100 p-2 align-items-center">
                    <input className="col-12 col-md-auto" type="date" />
                    &ensp;
                    <input className="col-6 col-md-auto px-2 mr-2" type="time" />
                    <i className="fas fa-plus text-success cursor-pointer mx-2 my-1"></i>
                    {/* <i className="ml-auto fa fa-trash text-danger cursor-pointer"></i> */}
                  </div></>
              )
            })}
          </div>
        </div>
        <div className="row justify-content-end pt-3">
          <button
            className="btn btn-primary mr-2 px-3"
            type="button"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button className="btn btn-primary px-3" type="submit" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEventSchedule;
