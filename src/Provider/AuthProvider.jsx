import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5000/api/auth/validate-token",
        {
          withCredentials: true,
        }
      );
      setUser(res.data);
    } catch (err) {
      // console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user, loading]);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
