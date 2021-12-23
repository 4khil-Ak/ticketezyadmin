import React from "react";
import { useNavigate } from "react-router-dom";
import Manager from "../Resusable/Manager";

const EventsManager = () => {
  let navigate = useNavigate();
  const addNew = () => {
    navigate("/addmanager");
  };
  return (
    <>
      <div className="container-fluid p-2">
        <div className="filter-section-header row py-2">
          <div className="header-options add-btn" onClick={addNew}>
            Add New Manager
          </div>
          <div className="header-options all">All</div>
          <div className="header-options active">Blocked</div>
        </div>
        <div className="grid-view-section row">
          <Manager />
        </div>
      </div>
    </>
  );
};

export default EventsManager;
