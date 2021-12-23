import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailsCard from "../Resusable/DetailsCard";
import EditModal from "../Resusable/EditModal";

const Events = () => {
  let navigate = useNavigate();
  const [detailsModal, setDetailsModal] = useState(false);

  const onChangeHandler = () => {
    setDetailsModal((prevState) => {
      return !prevState;
    });
  };

  const addNew = () => {
    navigate("/addevent");
  };

  return (
    <>
      <div className="container-fluid p-2">
        <div className="filter-section-header row py-2">
          <div className="header-options add-btn" onClick={addNew}>
            Add New Event
          </div>
          <div className="header-options all">All</div>
          <div className="header-options today">Today</div>
          <div className="header-options active">Active</div>
          <div className="header-options inactive">Inactive</div>
          <div className="header-options date-filter ml-auto mr-0 pr-1">
            <label htmlFor="date">Pick a date -&ensp;</label>
            <input type="date" placeholder="pick" id="date" />
          </div>
        </div>
        <div className="grid-view-section row">
          <DetailsCard editModal={onChangeHandler} />
          <DetailsCard editModal={onChangeHandler} />
          <DetailsCard editModal={onChangeHandler} />
          <DetailsCard editModal={onChangeHandler} />
          <DetailsCard editModal={onChangeHandler} />
          <DetailsCard editModal={onChangeHandler} />
          <DetailsCard editModal={onChangeHandler} />
        </div>
      </div>
      {detailsModal && <EditModal editModal={onChangeHandler} />}
    </>
  );
};

export default Events;
