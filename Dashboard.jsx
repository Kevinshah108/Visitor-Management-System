import React from "react";
import AsideBar from "./AsideBar";
import "./App.css";

function Dashboard() {
  return (
    <>
      <AsideBar></AsideBar>
      <div className="cards">
        <div className="card-1">
          <div className="num-1">
            <u>0</u>
          </div>
          <a className="text-1">Today's Visitors</a>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/020/911/732/small/profile-icon-avatar-icon-user-icon-person-icon-free-png.png"
            alt="logo"
            className="profile-1"
          ></img>
          <footer className="footer-1">
            {" "}
            <div className="bottom-1">
              <a className="info">More info</a>
            </div>
          </footer>
        </div>

        <div className="card-2">
          <div className="num-2">
            <u>0</u>
          </div>
          <a className="text-2">Yesterday visitors</a>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/020/911/732/small/profile-icon-avatar-icon-user-icon-person-icon-free-png.png"
            alt="logo"
            className="profile-2"
          ></img>
          <footer className="footer-2">
            <div className="bottom-2">
              <a className="info">More info</a>
            </div>
          </footer>
        </div>

        <div className="card-3">
          <div className="num-3">
            <u>0</u>
          </div>
          <a className="text-3">This month visitors</a>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/020/911/732/small/profile-icon-avatar-icon-user-icon-person-icon-free-png.png"
            alt="logo"
            className="profile-3"
          ></img>
          <footer className="footer-3">
            <div className="bottom-3">
              <a className="info">More info</a>
            </div>
          </footer>
        </div>

        <div className="card-4">
          <div className="num-4">
            <u>1</u>
          </div>
          <a className="text-4">All visitors</a>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/020/911/732/small/profile-icon-avatar-icon-user-icon-person-icon-free-png.png"
            alt="logo"
            className="profile-4"
          ></img>
          <footer className="footer-4">
            <div className="bottom-4">
              <a className="info">More info</a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
