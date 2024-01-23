import { createContext, useEffect, useState } from "react";
import useProperty from "../hooks/useProperty";

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [properties] = useProperty();

  const [city, setCity] = useState([]);
  const [bedRoom, setBedRoom] = useState([]);
  const [bathroom, setBathroom] = useState([]);
  const [rent, setPrice] = useState([]);
  const [size, setSize] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState([]);
  useEffect(() => {
    if (properties.length > 0) {
      const uniqueCities = [
        ...new Set(properties.map((property) => property.city)),
      ];

      setCity(uniqueCities);
    }
  }, [properties]);


  useEffect(() => {
    let newFilteredProperties = [...properties];

    if (city) {
      newFilteredProperties = newFilteredProperties.filter(
        (property) => city.includes(property.city)
      );
    }

    setFilteredProperties(newFilteredProperties);
  }, [city, bedRoom, bathroom, rent, size, availability, properties]);

  const handleClick = () => {
    // console.log(filteredProperties);
  };
  

  return (
    <HomeContext.Provider
      value={{
        city,
        setCity,
        bedRoom,
        setBedRoom,
        bathroom,
        setBathroom,
        rent,
        setPrice,
        size,
        setSize,
        availability,
        setAvailability,
        loading,
        properties: filteredProperties,
        handleClick,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
