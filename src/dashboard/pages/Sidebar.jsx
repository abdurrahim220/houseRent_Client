import React from "react";

import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="">
      <div className="my-5">
        <Link to="/dashboard">
          <h1 className="text-2xl text-white font-bold">House Hunter</h1>
        </Link>
      </div>
      <div className="my-2 space-y-4 text-white flex flex-col gap-1">
        <Link to="/dashboard/addNewHouse">Booked House</Link>
        <Link to="/dashboard/addNewHouse">Add New House</Link>
      </div>
    </div>
  );
};

export default Sidebar;
