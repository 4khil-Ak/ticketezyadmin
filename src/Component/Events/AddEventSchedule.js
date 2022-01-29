import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

const AddEventSchedule = () => {
  let params = useParams();
  let url = `https://apidev.ticketezy.com/events/${params.id}/event_schedules`;
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState([]);
  // const [time, setTime] = useState([]);
  const addSchedule = () => {
    // create an array
    let addData = {
      id: schedule.length,
      date: "",
      times: [],
    };
    setSchedule((prevState) => {
      return [...prevState, addData];
    });
  };
  const addTime = (e) => {
    let addValue = {
      id: schedule[e].times.length,
      time: "",
      uniq: e,
    };
    setSchedule((prevState) => {
      prevState[e].times.push(addValue);
      return [...prevState];
    });
  };
  const onChangeHandler = (e, data) => {
    setSchedule((prevState) => {
      let updatedData = null;
      if (e.target.name === "date") {
        updatedData = {
          ...data,
          date: e.target.value,
        };
      }
      prevState[data.id] = updatedData;
      return [...prevState];
    });
  };
  const handleChange = (e, value) => {
    setSchedule((prevState) => {
      let updatedData = null;
      updatedData = {
        ...value,
        time: e.target.value,
      };
      prevState[value.uniq].times[value.id] = updatedData;
      return [...prevState];
    });
  };
  function tConvert(time, date) {
    var splitDate = date.split("-");
    if (splitDate.count == 0) {
      return null;
    }

    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2];

    let updatedDate = month + "\\" + day + "\\" + year;
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    // return time.join (''); // return adjusted time or original string
    let instance = "2/11/1998, " + time.join("");
    const d = new Date(instance);
    return d.getTime()/1000;
  }
  const handleSubmit = () => {
    let time = [];
    let final = schedule.map((data) => {
      let value = {
        date: data.date,
        times: data.times.map((value) => {
          return tConvert(value.time, data.date);
        }),
      };
      time.push(value);
    });
    setLoading(true);
    Axios.post(
      url,
      {
        event_schedule: {
          schedules: time,
        },
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setLoading(false);
        navigate(`/eventdetails/${params.id}`);
      })
      .catch((error) => {
        setLoading(false);
        alert("Network Error");
      });
  };
  const handleCancel = () => {
    navigate(`/eventdetails/${params.id}`);
  };
  return (
    <>
      <div className="details p-3" style={{ background: "#fff" }}>
        <h3 className="text-dark p-2">Add Event Schedule !</h3>
        <div
          className="d-flex flex-column p-4"
          style={{ background: "var(--secondary)", borderRadius: "8px" }}
        >
          <div className="row p-2">
            <label className="mb-2">Show Schedule</label>
            <i
              className="fas fa-plus text-success cursor-pointer mx-2 my-1"
              onClick={addSchedule}
            ></i>
            {schedule.map((data) => {
              return (
                <div className="row w-100 p-2 align-items-center" key={data.id}>
                  <input
                    className="col-12 col-md-auto"
                    type="date"
                    name="date"
                    onChange={(e) => {
                      onChangeHandler(e, data);
                    }}
                    value={data.date}
                  />
                  &ensp;
                  {data.times.map((value, index) => {
                    return (
                      <input
                        className="col-6 col-md-auto px-2 mr-2"
                        type="time"
                        name="time"
                        onChange={(e) => {
                          handleChange(e, value);
                        }}
                        key={index}
                        value={value.time}
                      />
                    );
                  })}
                  <i
                    className="fas fa-plus text-success cursor-pointer mx-2 my-1"
                    onClick={() => addTime(data.id)}
                  >&ensp;Add Show</i>
                  {/* <i className="ml-auto fa fa-trash text-danger cursor-pointer"></i> */}
                </div>
              );
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
          <button
            className="btn btn-primary px-3"
            type="submit"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEventSchedule;
