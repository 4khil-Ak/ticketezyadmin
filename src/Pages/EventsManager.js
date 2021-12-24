import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Manager from "../Resusable/Manager";
import ManagerEditModal from "../Resusable/ManagerEditModal";

const EventsManager = () => {
  const [editModal, setEditModal] = useState(false);
  let navigate = useNavigate();

  const onChangeHandler = () => {
    setEditModal((prevState) => {
      return !prevState;
    });
  };
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
          <Manager editModal={onChangeHandler} />
        </div>
      </div>
      {editModal && <ManagerEditModal editModal={onChangeHandler} />}
    </>
  );
};

export default EventsManager;
