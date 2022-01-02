import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DetailsCard = (props) => {
  let navigate = useNavigate();
  const eventsDetails = (details) => {
    navigate(
      "/eventdetails", { state: {details} }
    );
  };
  return (
    <>
      <div className="col-sm-6 col-md-3 px-3 py-2">
        <div className="card box-shadow p-2">
          {/* <img src="/images/events.png" className="card-img" alt="section" /> */}
          <div className="pb-2">
            <p className="title f-600">{props.details.title}</p>
            <p className="location">Loaction: <b>{props.details.location}</b></p>
            <p className="venue">Venue: <b>{props.details.venue}</b></p>
            <p className="duration">Duration: <b>{props.details.duration}</b></p>
          </div>
          <div className="card-footer bg-transparent row py-2">
            <i className="footer-icon fas fa-eye text-primary" onClick={() => eventsDetails(props.details)}></i>
            <i
              className="footer-icon fas fa-edit text-secondary"
              // onClick={props.editModal}
            ></i>
            <i className="footer-icon fa fa-trash ml-auto mr-0  text-danger"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
