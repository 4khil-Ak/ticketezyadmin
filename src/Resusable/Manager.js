import React from "react";

const Manager = (props) => {
  return (
    <>
      <div className="col-sm-6 col-md-3 px-3 py-2">
        <div className="card box-shadow p-2">
          {/* <img src="/images/events.png" className="card-img" alt="section" /> */}
          <div className="pb-2">
            <p className="name f-600">Manager Name</p>
            <p className="company">Company Name</p>
            <p className="number">1234567890</p>
            <p className="eventno">
              Number of events <span className="f-600">:&ensp;3</span>
            </p>
          </div>
          <div className="card-footer bg-transparent row py-2">
            <i className="footer-icon fas fa-eye text-primary"></i>
            <i
              className="footer-icon fas fa-edit text-secondary"
              onClick={props.editModal}
            ></i>
            <i className="footer-icon fa fa-trash ml-auto mr-0  text-danger"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
