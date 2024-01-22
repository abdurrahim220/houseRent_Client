import { createContext, useState } from "react";
import useProperty from "../hooks/useProperty";

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [properties] = useProperty();
  // console.log(properties)

  const [city, setCity] = useState([]);
  const [bedRoom, setBedRoom] = useState([]);
  const [bathroom, setBathroom] = useState([]);
  const [price, setPrice] = useState([]);
  const [room, setRoom] = useState([]);
  const [availability, setAvailability] = useState([]);


  const [loading,setLoading]=useState(false)

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
        room,
        setRoom,
        availability,
        setAvailability,loading,properties
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
