import React from "react";
import AsideBar from "./AsideBar";
import "./App.css";

function LogOut() {
  return (
    <>
      <AsideBar></AsideBar>
      <div className="profile">
        <div className="first">
          <p>Log Out</p>
        </div>
        <p>Change Password</p>
      </div>
    </>
  );
}

export default LogOut;
