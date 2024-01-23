import React, { useContext } from 'react';
import { MdOutlinePriceChange } from 'react-icons/md';
import { HomeContext } from '../../Provider/HomeContext';

const Price = () => {
  const { rent, setPrice } = useContext(HomeContext);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <MdOutlinePriceChange className="text-xl" />
      <input
        type="range"
        min="0"
        max="10000" 
        step="10"  
        value={rent}
        onChange={handlePriceChange}
      />
      <span>{rent}</span>
    </div>
  );
};

export default Price;
