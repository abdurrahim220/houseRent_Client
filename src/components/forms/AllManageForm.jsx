import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

const AllManageForm = ({ onSave, isLoading }) => {
  const formMethods = useForm();
  const { handleSubmit, reset } = formMethods;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const onSubmit = (formDataJson) => {
    // const formData = new FormData();

    // formData.append("name", formDataJson.name);
    // formData.append("city", formDataJson.city);
    // formData.append("address", formDataJson.address);
    // formData.append("description", formDataJson.description);
    // formData.append("rent", formDataJson.rent);
    // formData.append("bedrooms", formDataJson.bedrooms.toString());
    // formData.append("bathrooms", formDataJson.bathrooms.toString());
    // formData.append("phoneNumber", formDataJson.phoneNumber.toString());
    // formData.append("availability", formDataJson.availability.toString());
    // formData.append("RoomSize", formDataJson.RoomSize.toString());

    // Array.from(formDataJson.imageFiles).forEach((imageFile) => {
    //   formData.append(`imageFiles`, imageFile);
    // });

    // if (formDataJson.imageUrls) {
    //   formDataJson.imageUrls.forEach((url, index) => {
    //     formData.append(`imageUrls[${index}]`, url);
    //   });
    // }

    onSave(formDataJson);
    // onSave(formData);
  };

  return (
    <div>
      {/* <FormProvider {...formMethods}> */}
      <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
        {/* all details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-3">Add House</h1>

          <label className="text-gray-700 text-sm font-bold flex-1">
            Name
            <input
              type="text"
              className="border rounded w-full py-1 px-2 font-normal"
              {...register("name", { required: "This field is required" })}
            ></input>
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </label>

          <div className="flex gap-4">
            <label className="text-gray-700 text-sm font-bold flex-1">
              City
              <input
                type="text"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("city", { required: "This field is required" })}
              ></input>
              {errors.city && (
                <span className="text-red-500">{errors.city.message}</span>
              )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
              Address
              <input
                type="text"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("address", {
                  required: "This field is required",
                })}
              ></input>
              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
            </label>
          </div>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Description
            <textarea
              rows={10}
              className="border rounded w-full py-1 px-2 font-normal"
              {...register("description", {
                required: "This field is required",
              })}
            ></textarea>
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </label>
          <div className="grid sm:grid-cols-3 gap-2 p-6 bg-gray-300">
            <label className="text-gray-700 text-sm flex-1 font-bold max-w-[50%]">
              Mobile Number
              <input
                type="tel"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("phoneNumber", {
                  required: "This field is required",
                })}
              ></input>
              {errors.phoneNumber && (
                <span className="text-red-500">
                  {errors.phoneNumber.message}
                </span>
              )}
            </label>
            <label className="text-gray-700 text-sm flex-1 font-bold max-w-[50%]">
              Rent Per Month
              <input
                type="number"
                min={1}
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("rent", { required: "This field is required" })}
              ></input>
              {errors.rent && (
                <span className="text-red-500">{errors.rent.message}</span>
              )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1 max-w-[50%]">
              Star Rating
              <select
                {...register("starRating", {
                  required: "This field is required",
                })}
                className="border rounded w-full p-2 text-gray-700 font-normal"
              >
                <option value="" className="text-sm font-bold">
                  Select as Rating
                </option>

                {[1, 2, 3, 4, 5].map((num, index) => {
                  return (
                    <option key={index} value={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              {errors.starRating && (
                <span className="text-red-500">
                  {errors.starRating.message}
                </span>
              )}
            </label>
          </div>
        </div>

        {/* <TypesSection /> */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Flat Type</h2>
          <div className="grid sm:grid-cols-2 gap-2 p-6 bg-gray-300">
            <label className="text-gray-700 text-sm font-semibold">
              Bedrooms
              <input
                className="border rounded w-full py-2 px-3 font-normal"
                type="number"
                min={1}
                {...register("bedrooms", {
                  required: "This field is required",
                })}
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
                {...register("bathrooms", {
                  required: "This field is required",
                })}
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
                {...register("roomSize", {
                  required: "This field is required",
                })}
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
                {...register("availability", {
                  required: "This field is required",
                })}
              />
              {errors.availability?.message && (
                <span className="text-red-500 text-sm font-bold">
                  {errors.availability?.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <span className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-md bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl disabled:bg-gray-500"
          >
            {isLoading ? "Saving.." : "Save"}
          </button>
        </span>
      </form>
      {/* </FormProvider> */}
    </div>
  );
};

export default AllManageForm;
