import React from "react";

const AddEventSchedule = () => {
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
            <i className="fas fa-plus text-success cursor-pointer mx-2 my-1"></i>
            <div className="row w-100 p-2 align-items-center">
              <input className="col-12 col-md-auto" type="date" />
              &ensp;
              <input className="col-6 col-md-auto px-2 mr-2" type="time" />
              <i className="fas fa-plus text-success cursor-pointer mx-2 my-1"></i>
              <i className="ml-auto fa fa-trash text-danger cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEventSchedule;
