import { useEffect, useState } from "react";

const useProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://househunter-a83p.onrender.com/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        
        setLoading(false);
      });
  }, [loading]);
  return [properties, setLoading];
};

export default useProperty;
