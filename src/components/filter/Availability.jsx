import React, { useContext } from 'react';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { HomeContext } from '../../Provider/HomeContext';

const Availability = () => {
  const { availability, setAvailability } = useContext(HomeContext);

  const handleAvailabilityChange = (e) => {
    
    setAvailability(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <BsCalendar2DateFill className="text-xl" />
      <input
        type="date"
        className="border p-2 rounded"
        value={availability}
        onChange={handleAvailabilityChange}
      />
    </div>
  );
};

export default Availability;
