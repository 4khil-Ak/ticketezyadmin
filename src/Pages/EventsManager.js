import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Manager from "../Resusable/Manager";
import ManagerEditModal from "../Resusable/ManagerEditModal";
import Axios from "axios";
import Loader from "../UI/Loader";
import NoData from "../UI/NoData";
import $ from "jquery";

const EventsManager = () => {
  const url = "https://apidev.ticketezy.com/event_managers";
  const [manager, setManager] = useState([]);
  const [managerDetails, setManagerDetails] = useState(null);
  const [managerStatus, setManagerStatus] = useState([null]);
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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setLoading(false);
      setManager(res.data);
    });
  }, []);

  const onChangeHandler = (managerData) => {
    setEditModal((prevState) => {
      return !prevState;
    });
    setManagerDetails(managerData);
  };

  const onCloseHandler = () => {
    setEditModal((prevState) => {
      return !prevState;
    });
  };
  const addNew = () => {
    navigate("/addmanager");
  };

  const all = () => {
    setManagerStatus([]);
  };

  const active = () => {
    setManagerStatus("active");
  };

  const inActive = () => {
    setManagerStatus("inactive");
  };

  let ui = null;
  if (managerStatus === "active") {
    if (
      manager !== null &&
      manager.filter((x) => x.status === "active").length === 0
    ) {
      ui = <NoData />;
    } else {
      ui = (
        <>
          {manager !== null &&
            manager
              .filter((x) => x.status === "active")
              .map((data) => {
                return (
                  <Manager
                    manager={data}
                    editModal={onChangeHandler}
                    key={data.secret}
                  />
                );
              })}
        </>
      );
    }
  } else if (managerStatus === "inactive") {
    if (
      manager !== null &&
      manager.filter((x) => x.status === "inactive").length === 0
    ) {
      ui = <NoData />;
    } else {
      ui = (
        <>
          {manager !== null &&
            manager
              .filter((x) => x.status === "inactive")
              .map((data) => {
                return (
                  <Manager
                    manager={data}
                    editModal={onChangeHandler}
                    key={data.secret}
                  />
                );
              })}
        </>
      );
    }
  } else {
    if (
      manager !== null &&
      manager.length === 0
    ) {
      ui = <NoData />;
    } else {
      ui = (
        <>
          {manager !== null &&
            manager.map((data) => {
              return (
                <Manager
                  manager={data}
                  onCloseHandler={onCloseHandler}
                  editModal={onChangeHandler}
                  key={data.secret}
                />
              );
            })}
        </>
      );
    }
  }

  return (
    <>
      <div className="container-fluid p-2">
        <div className="filter-section-header row py-2">
          <div className="header-options add-btn" onClick={addNew}>
            Add New Manager
          </div>
          <div className="header-options active" onClick={all}>
            All
          </div>
          <div className="header-options" onClick={active}>
            Active
          </div>
          <div className="header-options" onClick={inActive}>
            In-Active
          </div>
        </div>
        <div className="grid-view-section row">{ui}</div>
      </div>
      {editModal && (
        <ManagerEditModal
          managerDetails={managerDetails}
          onCloseHandler={onCloseHandler}
          editModal={() => onChangeHandler(managerData)}
        />
      )}
      {loading && <Loader />}
    </>
  );
};
export default EventsManager;
