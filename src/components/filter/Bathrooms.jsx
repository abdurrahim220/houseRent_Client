import React, { useContext } from "react";
import { HomeContext } from "../../Provider/HomeContext";
import { FaBath } from "react-icons/fa6";

const Bathrooms = () => {
  const { bathroom, setBathroom } = useContext(HomeContext);

  const handleBathroomChange = (e) => {
    // Update the bathroom state when the input value changes
    setBathroom(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <FaBath className="text-xl" />
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Enter number of bathrooms"
        value={bathroom}
        onChange={handleBathroomChange}
      />
    </div>
  );
};

export default Bathrooms;
