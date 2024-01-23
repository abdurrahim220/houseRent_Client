import React, { useContext } from 'react';
import { HomeContext } from '../../Provider/HomeContext';
import { FaLocationDot } from 'react-icons/fa6';

const City = () => {
  const { city, setCity } = useContext(HomeContext);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <FaLocationDot className="text-xl" />
      <select
        className="border p-2 rounded"
        value={city}
        onChange={handleCityChange}
      >    
        <option value="">Select City</option>
        {/* Check if city is an array before mapping */}
        {Array.isArray(city) &&
          city.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))
        }
      </select>
    </div>
  );
};

export default City;
