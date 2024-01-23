import React from 'react'
import { useFormContext } from 'react-hook-form';


const TypesSection = () => {
    const {
        register,
        formState: { errors },
      } = useFormContext();
    
      return (
        <div>
          <h2 className="text-2xl font-bold mb-3">Flat Type</h2>
          <div className="grid sm:grid-cols-2 gap-2 p-6 bg-gray-300">
            <label className="text-gray-700 text-sm font-semibold">
              Bedrooms
              <input
                className="border rounded w-full py-2 px-3 font-normal"
                type="number"
                min={1}
                {...register("bedrooms", { required: "This field is required" })}
              />
            {errors.bedrooms?.message && (
              <span className="text-red-500 text-sm font-bold">
                {errors.bedrooms?.message}
              </span>
            )}
            </label>
            <label className="text-gray-700 text-sm font-semibold">
            Bathrooms
              <input
                className="border rounded w-full py-2 px-3 font-normal"
                type="number"
                min={0}
                {...register("bathrooms", { required: "This field is required" })}
              />
            {errors.bathrooms?.message && (
              <span className="text-red-500 text-sm font-bold">
                {errors.bathrooms?.message}
              </span>
            )}
            </label>
          </div>
          <div className="grid sm:grid-cols-2 gap-2 p-6 bg-gray-300">
            <label className="text-gray-700 text-sm font-semibold">
              RoomSize
              <input
                className="border rounded w-full py-2 px-3 font-normal"
                type="number"
                min={1}
                {...register("roomSize", { required: "This field is required" })}
              />
            {errors.roomSize?.message && (
              <span className="text-red-500 text-sm font-bold">
                {errors.roomSize?.message}
              </span>
            )}
            </label>
            <label className="text-gray-700 text-sm font-semibold">
            Availability
              <input
                className="border rounded w-full py-2 px-3 font-normal"
                type="date"
                min={0}
                {...register("availability", { required: "This field is required" })}
              />
            {errors.availability?.message && (
              <span className="text-red-500 text-sm font-bold">
                {errors.availability?.message}
              </span>
            )}
            </label>
          </div>
        </div>
      );
}

export default TypesSection