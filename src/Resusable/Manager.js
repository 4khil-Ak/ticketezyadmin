import React, { useEffect, useState } from "react";
import SwitchComponent from "../UI/Switch";
import Axios from "axios";

const Manager = (props) => {
  const url = "https://apidev.ticketezy.com/event_managers/";
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked((prevState) => {
      return !prevState;
    });
  };
  useEffect(() => {
    // Axios.patch()
    if (props.manager.status === "active") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [])
  return (
    <>
      <div className="col-sm-6 col-md-3 px-3 py-2" key={props.manager.secret}>
        <div className="card box-shadow p-2">
          <div className="pb-2">
            <SwitchComponent checked={checked} handleChange={handleChange} />
            <p className="name f-600">{props.manager.name}</p>
            <p className="company">{props.manager.company_name}</p>
            <p className="number">{props.manager.mobile}</p>
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
