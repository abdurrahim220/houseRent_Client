import React, { useContext, useState } from "react";
import { HomeContext } from "../../../Provider/HomeContext";
import { Link, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import HouseCard from "../../../components/HouseCard/HouseCard";
import NormalLoading from "../../../components/Loading/NormalLoading";
import { AuthContext } from "../../../Provider/AuthProvider";

const PropertyList = () => {
  const { properties, loading } = useContext(HomeContext);
  const [visibleItems, setVisibleItems] = useState(10);
  const itemsPerPage = 10;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchMoreData = () => {
    const newVisibleItems = visibleItems + itemsPerPage;

    if (newVisibleItems <= properties.length) {
      setVisibleItems(newVisibleItems);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <NormalLoading />
      </div>
    );
  }

  const renderHouseCardLink = (house) => {
    if (user) {
      // If user is found, go to the property link
      return (
        <Link key={house._id} to={`/property/${house._id}`}>
          <HouseCard house={house} />
        </Link>
      );
    } else {
      // If user is not found, go to the login route
      return (
        <div
          key={house._id}
          onClick={() => navigate("/login")}
          style={{ cursor: "pointer" }}
        >
          <HouseCard house={house} />
        </div>
      );
    }
  };

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        {properties.length > 0 ? (
          <InfiniteScroll
            dataLength={visibleItems}
            next={fetchMoreData}
            hasMore={visibleItems < properties.length}
            loader={<NormalLoading />}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {properties.slice(0, visibleItems).map((house) =>
                renderHouseCardLink(house)
              )}
            </div>
          </InfiniteScroll>
        ) : (
          <div>No properties found.</div>
        )}
      </div>
    </section>
  );
};

export default PropertyList;
