import "./App.css";
import React from "react";
import AsideBar from "./AsideBar.jsx";
import Homepage1 from "./Homepage.1.jsx";

function VisitorSearch() {
  return (
    <>
      <AsideBar></AsideBar>
      <div className="searchDiv">
        <h5 className="head">Search by Visitor name & mobile number</h5>
        <p className="para">Search by Visitor name & mobile number.</p>
        <input
          type="search"
          className="searchBar"
          placeholder="Enter name & number"
        />
        <input type="submit" className="submit" />
      </div>
    </>
  );
}

export default VisitorSearch;
