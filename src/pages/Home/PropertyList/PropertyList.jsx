import React, { useContext } from "react";
import { HomeContext } from "../../../Provider/HomeContext";

import { Link } from "react-router-dom";

const PropertyList = () => {
  const { properties } = useContext(HomeContext);
  // console.log(properties)
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div>
          {properties?.map((house, index) => {
            return <Link to={`/property/${house._id}`}>
                <HouseCard/>
            </Link>;
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
