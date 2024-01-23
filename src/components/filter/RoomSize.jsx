import React, { useContext } from 'react';
import { TbResize } from 'react-icons/tb';
import { HomeContext } from '../../Provider/HomeContext';

const RoomSize = () => {
  const { size, setSize } = useContext(HomeContext);

  const handleSizeChange = (e) => {
   
    setSize(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <TbResize className="text-xl" />
      <input
        type="text"
        className="border p-2 rounded"  
        placeholder="Enter room size"
        value={size}
        onChange={handleSizeChange}
      />
    </div>
  );
};

export default RoomSize;
