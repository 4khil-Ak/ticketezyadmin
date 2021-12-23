import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import Events from "./Pages/Events";
import EventsManager from "./Pages/EventsManager";
import AddEvent from "./Pages/AddEvent";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="eventsmanager" element={<EventsManager />}></Route>
          <Route path="addevent" element={<AddEvent />}></Route>
          <Route path="events" element={<Events />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
