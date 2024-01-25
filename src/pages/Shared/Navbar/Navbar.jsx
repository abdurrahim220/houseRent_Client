import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const {setUser,user} = useContext(AuthContext)
  const handleNav = () => {
    setNav(!nav);
  };

  // console.log(user)

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Dashboard", link: "/dashboard" },
    { id: 3, text: "Resources", link: "/" },
    { id: 4, text: "Contact", link: "/" },
    
  ];

  const renderAuthButton = () => {
    if (user) {
      
      return (
        <li
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          onClick={handleLogout}
        >
          Logout
        </li>
      );
    } else {
     
      return (
        <Link to="/login">
          <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
            Login
          </li>
        </Link>
      );
    }
  };

  const handleLogout = async () => {
    try {
      
      const response = await axios.post(
        "http://localhost:5000/api/auth/logout"
      );
  
      // console.log(response);
      setUser(null);
  
     
      localStorage.removeItem("user");
  
      // navigate("/");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have successfully logged out",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      // Handle errors
      console.error("Error sending data to backend", error);
    }
  };
  

  return (
    <div className="bg-black flex justify-between items-center h-20  mx-auto px-12 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">House Hunter</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
      {navItems.map((item) => (
        <Link to={item.link} key={item.id}>
          <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
            {item.text}
          </li>
        </Link>
      ))}
      {renderAuthButton()} 
    </ul>

     
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      
      <div className="">
        <ul
          className={
            nav
              ? "fixed z-50 md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] z-50 duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            House Hunter
          </h1>

          
          {navItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                {item.text}
              </li>
            </Link>
          ))}
           {renderAuthButton()} 
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
