import { createContext, useEffect, useState } from "react";
import useProperty from "../hooks/useProperty";

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [properties] = useProperty();
  // console.log(properties);

  const [city, setCity] = useState([]);
  const [bedRoom, setBedRoom] = useState([]);
  const [bathroom, setBathroom] = useState([]);
  const [price, setPrice] = useState([]);
  const [size, setSize] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if properties is not empty
    if (properties.length > 0) {
      // Extract unique cities from the properties array
      const uniqueCities = [...new Set(properties.map(property => property.city))];
  
      // Set the unique cities to the state
      setCity(uniqueCities);
    }
  }, [properties]);

  const handleClick = ()=>{
    // console.log("click")
  }

  return (
    <HomeContext.Provider
      value={{
        city,
        setCity,
        bedRoom,
        setBedRoom,
        bathroom,
        setBathroom,
        price,
        setPrice,
        size, setSize,
        availability,
        setAvailability,
        loading,
        properties,
        handleClick
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
