import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./styles.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Theatres from "./Pages/Theatres";
import Movies from "./Pages/Movies";
import EventsManager from "./Pages/EventsManager";
import Events from "./Pages/Events";
import AddEvent from "./Pages/AddEvent";
import AddManager from "./Pages/AddManager";
import AddTheatre from "./Component/Theatres/AddTheatre";
import AddPriceCard from "./Component/Events/AddPriceCard";
import AddEventSchedule from "./Component/Events/AddEventSchedule";
import EventDetails from "./Pages/EventDetails";
import ManagerDetails from "./Pages/ManagerDetails";

export default function App() {
  const url = "https://apidev.ticketezy.com/super_admins/login";
  let navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(() => {
    if (localStorage.getItem("TicketezyAdmin") === null) {
      return false
    } else {
      return true
    }
  })
  const [error, setError] = useState(null);
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
    if (adminDetails.email === null) {
      setError("Enter UserName");
    } else if (adminDetails.password === null) {
      setError("Enter Password");
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
      }).catch((error) => {
        setError("Invalid Username or Password")
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
          <Route path="/events/:id/event_schedules" element={<AddEventSchedule />}></Route>
          <Route path="/events/:id/event_seats" element={<AddPriceCard />}></Route>
          <Route path="eventdetails">
            <Route path=":id" element={<EventDetails />}></Route>
          </Route>
          <Route path="addevent" element={<AddEvent />}></Route>
          <Route path="events" element={<Events />}></Route>
          <Route path="addtheatre" element={<AddTheatre />}></Route>
          <Route path="theaters" element={<Theatres />}></Route>
          <Route index element={<Movies />}></Route>
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
