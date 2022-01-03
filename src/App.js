import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./styles.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Events from "./Pages/Events";
import EventsManager from "./Pages/EventsManager";
import AddEvent from "./Pages/AddEvent";
import AddManager from "./Pages/AddManager";
import AddPriceCard from "./Component/Events/AddPriceCard";
import AddEventSchedule from "./Component/Events/AddEventSchedule";
import EventDetails from "./Pages/EventDetails";
import ManagerDetails from "./Pages/ManagerDetails";

export default function App() {
  const url = "https://apidev.ticketezy.com/super_admins/login";
  let navigate = useNavigate();
  const [adminAvail, setAdminAvail] = useState(() => {
    // getting stored value
    const checkId = localStorage.getItem("TicketezyAdmin")
    const initialValue = JSON.parse(checkId);
    return initialValue || "";
  });
  // useEffect(()=>{
  // if (adminAvail !== null) {
  //   setisLoggedIn(true);
  // } else {
  //   setisLoggedIn(false);
  // }
  // },[])
  const [isLoggedIn, setisLoggedIn] = useState(() => {
    if (adminAvail !== null) {
      const initialValue = "true";
      return initialValue || "";
    } else {
      const initialValue = "false";
      return initialValue || "";
    }
  });
  const [error, setError] = useState(false);
  const [adminDetails, setAdminDetails] = useState({
    email: "",
    password: ""
  });
  const onChangeHandler = (event) => {
    let val = event.target.value;
    setAdminDetails((prevState) => {
      return {
        ...prevState,
        [event.target.id]: val
      };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminDetails.email === "null") {
      setError("Invalid UserName");
    } else if (adminDetails.password === "null") {
      setError("Invalid Password");
    } else {
      Axios.post(
        url,
        {
          user_name: adminDetails.email,
          password: adminDetails.password
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      ).then((res) => {
        setisLoggedIn(true);
        let adminId = res.data.message.cookies;
        localStorage.setItem('TicketezyAdmin', JSON.stringify(adminId));
        navigate("/");
      });
    }
  };
  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("TicketezyAdmin");
    setisLoggedIn(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            isLoggedIn ? (
              <Admin handleLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route path="addmanager" element={<AddManager />}></Route>
          <Route path="managerdetails">
            <Route path=":id" element={<ManagerDetails />}></Route>
          </Route>
          <Route path="eventsmanager" element={<EventsManager />}></Route>
          <Route path="addeventschedule" element={<AddEventSchedule />}></Route>
          <Route path="addpricecard" element={<AddPriceCard />}></Route>
          <Route path="eventdetails">
            <Route path=":id" element={<EventDetails />}></Route>
          </Route>
          <Route path="addevent" element={<AddEvent />}></Route>
          <Route index path="events" element={<Events />}></Route>
        </Route>
        <Route
          exact
          path="/login"
          element={
            <Login
              handleLogin={handleLogin}
              onChangeHandler={onChangeHandler}
              error={error}
            />
          }
        />
      </Routes>
    </div>
  );
}
