import React, { useContext } from "react";
import { HomeContext } from "../../../Provider/HomeContext";

import { Link } from "react-router-dom";
import HouseCard from "../../../components/HouseCard/HouseCard";

const PropertyList = () => {
  const { properties } = useContext(HomeContext);
//   console.log(properties)
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {properties?.map((house, index) => {
            return <Link key={index} to={`/property/${house._id}`}>
                <HouseCard house={house}/>
            </Link>;
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
