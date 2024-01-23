import React, { useContext } from 'react';
import { FaBed } from 'react-icons/fa';
import { HomeContext } from '../../Provider/HomeContext';

const BedRooms = () => {
  const { bedRoom, setBedRoom } = useContext(HomeContext);

  const handleBedRoomChange = (e) => {
    setBedRoom(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <FaBed className="text-xl" />
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Enter number of bedrooms"
        value={bedRoom}
        onChange={handleBedRoomChange}
      />
    </div>
  );
};

export default BedRooms;
