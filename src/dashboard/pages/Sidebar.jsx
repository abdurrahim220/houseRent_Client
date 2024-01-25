import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="fixed">
      <div className="my-5">
        <Link to="/dashboard">
          <h1 className="text-2xl text-white font-bold">House Hunter</h1>
        </Link>
      </div>
      <div className="my-2 space-y-4 text-white flex flex-col gap-1">
        <Link to="/dashboard/bookedHouse">Booked House</Link>

        {user.role === "Owner" && (
          <Link to="/dashboard/addNewHouse">Add New House</Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
