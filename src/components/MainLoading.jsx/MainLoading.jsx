import React from "react";
import { useState, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const MainLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen"><PacmanLoader color="rgba(54, 215, 183, 1)" /></div>
  );
};

export default MainLoading;
