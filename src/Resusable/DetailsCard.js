import React from "react";

const DetailsCard = (props) => {
  return (
    <>
      <div className="col-sm-6 col-md-3 px-3 py-2">
        <div className="card box-shadow p-2">
          {/* <img src="/images/events.png" className="card-img" alt="section" /> */}
          <div className="pb-2">
            <p className="title f-600">Event Name</p>
            <p className="venue f-600">Location</p>
            <p className="date">xx-yy-zzzz</p>
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

export default DetailsCard;
