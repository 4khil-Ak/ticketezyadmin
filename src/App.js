import React, { useState } from "react";
import Axios from "axios";
import "./styles.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Events from "./Pages/Events";
import EventsManager from "./Pages/EventsManager";
import AddEvent from "./Pages/AddEvent";
import AddManager from "./Pages/AddManager";
import AddPriceCard from "./Pages/AddPriceCard";
import AddEventSchedule from "./Pages/AddEventSchedule";
import EventDetails from "./Pages/EventDetails";

export default function App() {
  const url = "/super_admins/login";
  let navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [error, setError] = useState(false);
  const [loginCredential] = useState({
    user_name: "!@#TICKETEZY!@#",
    password: "Ticketezy@123"
  });
  const [adminDetails, setAdminDetails] = useState();
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
    if (adminDetails.email !== loginCredential.user_name) {
      setError("Invalid UserName");
    } else if (adminDetails.password !== loginCredential.password) {
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
        navigate("/");
      });
    }
  };
  const handleLogout = (e) => {
    e.preventDefault();
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
          <Route path="eventsmanager" element={<EventsManager />}></Route>
          <Route path="addeventschedule" element={<AddEventSchedule />}></Route>
          <Route path="addpricecard" element={<AddPriceCard />}></Route>
          <Route path="eventdetails" element={<EventDetails />}></Route>
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
              // loginCredential={loginCredential}
              error={error}
            />
          }
        />
      </Routes>
    </div>
  );
}
