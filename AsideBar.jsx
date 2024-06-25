import "./App.css";
import { Link } from "react-router-dom";
import React from "react";
import Homepage1 from "./Homepage.1.jsx";

function AsideBar() {
  return (
    <>
      <Homepage1 />
      <aside className="homepage-aside">
        <div className="my-asides">
          <Link to="/register" className="aside-button">
            Register
          </Link>
          <Link to="/dashboardBar" className="aside-button" id="dashboard">
            Dashboard
          </Link>
          <button className="aside-button">Add Visitors</button>
          <Link to="/manageVisitor" className="aside-button">
            Manage Visitors
          </Link>
          <Link to="/visitorSearch" className="aside-button">
            Visitors Search
          </Link>
          <button className="aside-button">Visitors B/W Dates</button>
          <button className="aside-button">Change Password</button>
        </div>
      </aside>
      ;
    </>
  );
}

export default AsideBar;
