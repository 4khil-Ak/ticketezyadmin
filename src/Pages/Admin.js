import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

const Admin = (props) => {
  return (
    <>
      <Navbar handleLogout={props.handleLogout} />
      <Outlet />
    </>
  );
};

export default Admin;
