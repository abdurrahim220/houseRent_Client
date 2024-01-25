import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { HomeContext } from "../../Provider/HomeContext";
import Swal from "sweetalert2";
import NormalLoading from "../../components/Loading/NormalLoading";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthProvider";
const HouseDetails = () => {
  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const { properties, loading } = useContext(HomeContext);
  if (loading || !properties) {
    return (
      <div className="flex items-center justify-center my-16">
        <NormalLoading />
      </div>
    );
  }

  const house = properties.find((data) => data._id === id);

  if (!house) {
    return <div>House not found</div>;
  }

  const {
    _id,
    name,
    address,
    city,
    bedrooms,
    bathrooms,
    roomSize,
    imageUrls,
    availability,
    rent,
    phoneNumber,
    starRating,
    description,
  } = house;

  const handleBook = async (event) => {
    event.preventDefault();
  
   
    const email = event.target.elements.email.value;
    const userNumber = event.target.elements.userNumber.value;
  
    try {
      
      const response = await fetch(`http://localhost:5000/api/bookings?email=${user.email}`);
      const existingBookings = await response.json();
  
    
      if (existingBookings.length < 2) {
        
        const bookingResponse = await fetch("http://localhost:5000/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...house, email, userNumber }),
        });
  
        if (bookingResponse.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Booking successful!',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          
        }
      } else {
        
        Swal.fire({
          icon: 'error',
          title: 'Booking Limit Exceeded',
          text: 'You can only book up to 2 houses. Remove a previous booking to add a new one.',
        });
      }
    } catch (error) {
      console.error("Error during booking:", error);
    }
  };
  

  return (
    <section>
      <div className="container mx-auto min-h-[800px] my-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold ">{name}</h2>
            <h2 className="text-lg mb-4">{availability}</h2>
          </div>
          <div className="flex lg:mb-0 mb-4 gap-x-2 text-sm">
            <h2 className="bg-green-500 text-white px-3 rounded-full">
              {city}
            </h2>
            <h2 className="bg-violet-600 text-white px-3 rounded-full">
              {address}
            </h2>
          </div>
          <div className="text-2xl text-violet-600 font-semibold">${rent}</div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-4">
              <img src={imageUrls[1]} alt="" />
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-2xl">
                <BiBed />
                {bedrooms}
              </span>
              <span className="flex items-center gap-1 text-2xl">
                <BiBath />
                {bathrooms}
              </span>
              <span className="flex items-center gap-1 text-2xl">
                <BiArea />
                {roomSize}
              </span>
            </div>
            <div>{phoneNumber}</div>
            <div>{description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex flex-col  gap-x-4 mb-8">
              <div>Book your house</div>
              <div>
                <h1>User Name</h1>
              </div>
              <form onSubmit={handleBook} className="flex gap-4 flex-col">
                <input
                  className="border border-gray-300 focus:border-violet-700 outline-none rounded-md w-full p-4 h-12 text-sm text-gray-400"
                  type="email"
                  defaultValue={user.email}
                  placeholder="email"
                  name="email"
                />
                <input
                  className="border border-gray-300 focus:border-violet-700 outline-none rounded-md w-full p-4 h-12 text-sm text-gray-400"
                  type="number"
                  placeholder="phone number"
                  name="userNumber" //
                  required
                />
                <button
                  type="submit"
                  className="bg-violet-700 hover:bg-violet-200 text-white rounded-md p-4 text-sm w-full transition"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseDetails;
