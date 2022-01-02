import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Manager from "../Resusable/Manager";
import ManagerEditModal from "../Resusable/ManagerEditModal";
import Axios from "axios";
import Loader from "../UI/Loader";
import $ from "jquery";

const EventsManager = () => {
  const url = "https://apidev.ticketezy.com/event_managers";
  const [manager, setManager] = useState([]);
  const [managerStatus, setManagerStatus] = useState([null])
  const [editModal, setEditModal] = useState(false);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
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
      setManager(res.data);
    })
  }, [])

  const onChangeHandler = () => {
    setEditModal((prevState) => {
      return !prevState;
    });
  };
  const addNew = () => {
    navigate("/addmanager");
  };

  const all = () => {
    setManagerStatus([]);
  }

  const active = () => {
    setManagerStatus("Active");
  }

  const inActive = () => {
    setManagerStatus("Inactive");
  }

  const NoData = () => {
    return (
      <>
        <div className="w-100 text-center">
          <img className="no-data w-50 p-5" src="/images/nodata.gif" alt="nodata" />
          <h4  className="text-primary">OOPS ! No Data to Display</h4>
        </div>
      </>
    )
  }

  let ui = null;
  if (managerStatus === "Active") {
    ui = <>
      {manager !== null && manager.filter(x => x.status === "active").map((data) => {
        return (
          <Manager manager={data} editModal={onChangeHandler} key={data.secret} />
        )
      })
      }
    </>
    if (ui.ref === null) {
      ui = <>
        <NoData />
      </>
    }
  } else if (managerStatus === "Inactive") {
    ui = <>
      {manager !== null && manager.filter(x => x.status === "inactive").map((data) => {
        return (
          <Manager manager={data} editModal={onChangeHandler} key={data.secret} />
        )
      })}
    </>
  } else {
    ui = <>
      {manager !== null && manager.map((data) => {
        return (
          <Manager manager={data} editModal={onChangeHandler} key={data.secret} />
        )
      })}
    </>
  }

  return (
    <>
      <div className="container-fluid p-2">
        <div className="filter-section-header row py-2">
          <div className="header-options add-btn" onClick={addNew}>
            Add New Manager
          </div>
          <div className="header-options active" onClick={all}>All</div>
          <div className="header-options" onClick={active}>Active</div>
          <div className="header-options" onClick={inActive}>In-Active</div>
        </div>
        <div className="grid-view-section row">
          {ui}
        </div>
      </div>
      {editModal && <ManagerEditModal editModal={onChangeHandler} />}
      {loading && <Loader />}
    </>
  )
};
export default EventsManager;
