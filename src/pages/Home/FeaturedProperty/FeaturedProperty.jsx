import React from "react";
import { FaHome } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineVilla } from "react-icons/md";

const FeaturedProperty = () => {
  return (
    <div className="my-10">
      <div className="grid items-center space-y-1 justify-center my-3">
        <h1 className="lg:text-3xl text-2xl font-bold">
          Featured Property Types
        </h1>
        <p className="text-center">Find all Type Property</p>
      </div>

      <div className="container px-4 md:px-0 my-5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="flex flex-col space-y-1 justify-center items-center border rounded-lg shadow-1 p-5">
          <GiFamilyHouse size={50} />
          <h1 className="text-lg font-semibold">Family House</h1>
          <p>122 Property</p>
        </div>

        <div className="flex flex-col space-y-1 justify-center items-center border rounded-lg shadow-1 p-5">
          <FaHome size={50} />
          <h1 className="text-lg font-semibold">House & villa</h1>
          <p>150 Property</p>
        </div>

        <div className="flex flex-col space-y-1 justify-center items-center border rounded-lg shadow-1 p-5">
          <MdApartment size={50} />
          <h1 className="text-lg font-semibold">Apartment</h1>
          <p>220 Property</p>
        </div>

        <div className="flex flex-col space-y-1 justify-center items-center border rounded-lg shadow-1 p-5">
          <HiOutlineOfficeBuilding size={50} />
          <h1 className="text-lg font-semibold">Office & studio</h1>
          <p>80 Property</p>
        </div>
        <div className="flex flex-col space-y-1 justify-center items-center border rounded-lg shadow-1 p-5">
          <MdOutlineVilla size={50} />
          <h1 className="text-lg font-semibold">Villa</h1>
          <p>100 Property</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
