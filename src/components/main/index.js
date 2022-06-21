import React from "react";
import List from "../list";
import Sidebar from "../sidebar";

const Main = () => {
  return (
    <div className="flex">
      <Sidebar />
      <List />
    </div>
  );
};

export default Main;
