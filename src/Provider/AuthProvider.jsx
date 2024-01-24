import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/auth/validate-token",
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      // setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const authInfo = {
    user,
    setUser,
  };
  // console.log(user);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
