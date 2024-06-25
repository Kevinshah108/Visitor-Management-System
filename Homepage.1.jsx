import React from "react";
// import "./homepage.css";
import "./App.css";
// import Register from "./Register.jsx";
import AsideBar from "./AsideBar.jsx";

function Homepage1() {
  return (
    <>
      <div className="homepage-container">
        <article className="main-div">
          <h1 className="dashboard-text">Dashboard</h1>
          <h1 className="toggle-home-dashboard">
            <span className="home-btn">Home</span> /{" "}
            <span className="dashboard-btn">Dashboard</span>
          </h1>
        </article>

        <header className="homepage-header">
          {/* <a href="asideBar" className="menu">
            <img
              src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
              className="img-menu"
            ></img>
          </a> */}
          {/* <a href="logOut" className="profile-bar"> */}
          <img
            className="profile-header-img"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          {/* </a> */}
        </header>
      </div>
    </>
  );
}
export default Homepage1;
