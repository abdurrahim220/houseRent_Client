import { useEffect, useState } from "react";

const useProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        
        setLoading(false);
      });
  }, [loading]);
  return [properties, setLoading];
};

export default useProperty;
