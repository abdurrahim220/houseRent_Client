import React from "react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

const HouseCard = ({ house }) => {
  const {
    name,
    address,
    city,
    bedrooms,
    bathrooms,
    roomSize,
    imageUrls,
    availability,
    rent,
    phoneNumber,
    starRating,
    description,
  } = house;
  //   console.log(imageUrls[0])
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={imageUrls[0]} alt="ops link error" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <span className="bg-green-200  rounded-full py-1  px-3">{name}</span>
        <span className="bg-violet-300 rounded-full py-1 px-3">{city}</span>
      </div>
      <div className="grid space-y-1">
        <span className="text-lg font-semibold max-w-[260px]">{address}</span>

        <div className="flex gap-2 items-center">
          <div className="flex items-center text-gray-600 gap-1">
            <BiBed />
            {bedrooms}
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            <BiBath />
            {bathrooms}
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            <BiArea />
            {roomSize}
          </div>
        </div>

        <div className="text-lg font-semibold">
            Rent: 
        <span className="text-lg font-semibold text-red-500">{rent}</span>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
