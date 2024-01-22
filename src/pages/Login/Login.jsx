import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );

      //   console.log(response.data);
      navigate("/");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your have successfully login",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      // Handle errors
      console.error("Error sending data to backend", error);
    }
  };

  return (
    <div className="h-[calc(100vh-200px)]  flex justify-center items-center">
      <div className="border p-7 shadow-lg mx-2 md:my-0   md:mx-0 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <h2 className="text-3xl font-bold">Login In</h2>
          <label className="text-gray-700 text-sm font-bold  flex-1">
            Email
            <input
              type="email"
              className="border rounded w-full py-1 px-2 font-normal"
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </label>
          <label className="text-gray-700 text-sm font-bold  flex-1">
            Password
            <input
              type="password"
              className="border rounded w-full py-1 px-2 font-normal"
              {...register("password", { required: "This field is required" })}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </label>

          <span className="flex justify-between items-center mt-2">
            <div className="text-sm">
              Not Registered? <Link to="/register">Create an account here</Link>
            </div>
            <button
              className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
              type="submit"
            >
              login
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
