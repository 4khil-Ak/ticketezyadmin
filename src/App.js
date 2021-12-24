import React, { useState } from "react";
import "./styles.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import PrivateRoute from "./Component/PrivateRoute";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Events from "./Pages/Events";
import EventsManager from "./Pages/EventsManager";
import AddEvent from "./Pages/AddEvent";
import AddManager from "./Pages/AddManager";

export default function App() {
  let navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [loginCredential] = useState({
    user_name: "!@#TICKETEZY!@#",
    password: "Ticketezy@123"
  });
  const [adminDetails, setAdminDetails] = useState();
  console.log(adminDetails);
  const onChangeHandler = (event) => {
    let val = event.target.value;
    setAdminDetails((prevState) => {
      return {
        ...prevState,
        [event.target.id]: val
      };
    });
    console.log(adminDetails, "onchange");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminDetails.email !== loginCredential.user_name) {
      setError("Invalid UserName");
    } else if (adminDetails.password !== loginCredential.password) {
      setError("Invalid Password");
    } else {
      setisLoggedIn(true);
      navigate("/");
      console.log("success");
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
              adminDetails={adminDetails}
              error={error}
            />
          }
        />
      </Routes>
    </div>
  );
}
