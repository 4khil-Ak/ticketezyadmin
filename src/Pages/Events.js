import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailsCard from "../Resusable/DetailsCard";
import EditModal from "../Resusable/EditModal";
import Axios from "axios";
import Loader from "../UI/Loader";
import $ from "jquery";

const Events = () => {
  let navigate = useNavigate();
  const url = "https://apidev.ticketezy.com/events_list";
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [loading, setLoading] = useState(true);
  $(document).ready(function () {
    $(".filter-section-header div").click(function () {
      $(".filter-section-header div.active").removeClass("active");
      $(this).addClass("active");
    });
  });
  useEffect(() => {
    Axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => {
      setLoading(false);
      setEvents(res.data);
    })
  }, [])
  const onChangeHandler = (eventData) => {
    setEditModal((prevState) => {
      return !prevState;
    });
    setEventDetails(eventData);
  };

  const onCloseHandler = ()=> {
    setEditModal((prevState) => {
      return !prevState;
    });
  }

  const addNew = () => {
    navigate("/addevent");
  };

  let ui = null;
  if (events === null) {
    ui = <>
      <div className="w-100 text-center">
        <img className="no-data w-50 p-5" src="/images/nodata.gif" alt="nodata" />
        <h4 className="text-primary">OOPS ! No Data to Display</h4>
      </div>
    </>
  } else {
    ui = <>
      {events.map((data) => {
        return (
          <DetailsCard details={data} editModal={onChangeHandler} key={data.secret} />
        )
      })}
    </>
  }

  return (
    <>
      <div className="container-fluid p-2">
        <div className="filter-section-header row py-2">
          <div className="header-options add-btn" onClick={addNew}>
            Add New Event
          </div>
          <div className="header-options active">All</div>
          {/* <div className="header-options">Today</div>
          <div className="header-options">Active</div>
          <div className="header-options">Inactive</div> */}
          {/* <div className="header-options date-filter ml-auto mr-0 pr-1">
            <label htmlFor="date">Pick a date -&ensp;</label>
            <input type="date" placeholder="pick" id="date" />
          </div> */}
        </div>
        <div className="grid-view-section row">
          {ui}
        </div>
      </div>
      {editModal && <EditModal eventDetails={eventDetails} onCloseHandler={onCloseHandler} editModal={()=>onChangeHandler(eventData)} />}
      {loading && <Loader />}
    </>
  );
};

export default Events;
