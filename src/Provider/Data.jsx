import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/validate-token`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Token invalid");
        }

        const userData = await response.json();
        return userData;
      } catch (error) {
        console.error("Error fetching user details:", error.message);
        throw error; // Propagate the error to the calling code
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Other user details */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserProfile;
