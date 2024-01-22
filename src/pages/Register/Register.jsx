import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import API_BASE_URL from "../../hooks/api";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const Owner = "Owner";
  const Renter = "Renter";
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        data
      );

      //   console.log(response.data);
      navigate("/login");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your have successfully Register",
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
      <form
        className="flex flex-col gap-5 border p-5 shadow-lg w-[25%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl font-bold">Create an account</h2>

        <div className="flex flex-col md:flex-row gap-5">
          <label className="text-gray-700 text-sm font-bold flex-1">
            Full Name
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              {...register("username", { required: "This field is required" })}
            ></input>
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </label>
          <label className="text-gray-700 text-sm font-bold ">
            Select Role
            <select
              {...register("role", {
                required: "This field is required",
              })}
              className="border rounded w-full p-2 text-gray-700 font-normal"
            >
              <option value="" className="text-sm font-bold">
                Select as role
              </option>

              {[Owner, Renter].map((value, index) => {
                return (
                  <option key={index} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
            {errors.role && (
              <span className="text-red-500">{errors.role.message}</span>
            )}
          </label>
        </div>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Email
          <input
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("email", { required: "This field is required" })}
          ></input>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          ></input>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Conform Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) {
                  return "This field is required";
                } else if (watch("password") !== val) {
                  return "Your passwords do not match";
                }
              },
            })}
          ></input>
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>

        <span className="flex justify-between items-center">
          <div className="text-sm">
            Already have an account? <Link to="/login">login</Link>
          </div>
          <button
            type="submit"
            className="bg-blue-600 rounded-lg text-white p-2 font-bold hover:bg-blue-500 text-xl"
          >
            Create account
          </button>
        </span>
      </form>
    </div>
  );
};

export default Register;
