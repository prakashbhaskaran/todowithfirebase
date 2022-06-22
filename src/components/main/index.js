import React from "react";
import List from "../list";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

const Main = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <List />
      </div>
    </React.Fragment>
  );
};

export default Main;
