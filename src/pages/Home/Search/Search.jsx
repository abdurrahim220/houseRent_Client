import React, { useContext } from "react";
import Bathrooms from "../../../components/filter/Bathrooms";
import BedRooms from "../../../components/filter/BedRooms";
import City from "../../../components/filter/City";
import Price from "../../../components/filter/Price";
import RoomSize from "../../../components/filter/RoomSize";
import Availability from "../../../components/filter/Availability";

import { RiSearch2Line } from "react-icons/ri";
import { HomeContext } from "../../../Provider/HomeContext";
const Search = () => {
  const {properties,handleClick} = useContext(HomeContext)
  // console.log(properties)
  return (
    <div className="px-[30px] py-6 container mx-auto flex flex-col lg:flex-row justify-between gap-2 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur">
      <City />
      <Bathrooms />
      <BedRooms />
      <Price />
      <RoomSize />
      <Availability />
      <button onClick={()=>handleClick()} className="bg-violet-700 hover:bg-violet-900 rounded-lg h-16 transition w-full lg:max-w-[162px] flex justify-center items-center text-white">
        <RiSearch2Line size={30} />
      </button>
    </div>
  );
};

export default Search;
