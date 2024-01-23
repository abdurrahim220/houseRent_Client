import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
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
            {...register("address", { required: "This field is required" })}
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
          {...register("description", { required: "This field is required" })}
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
          {...register("phoneNumber", { required: "This field is required" })}
        ></input>
        {errors.phoneNumber && (
          <span className="text-red-500">{errors.phoneNumber.message}</span>
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
          <span className="text-red-500">{errors.starRating.message}</span>
        )}
      </label>
      </div>
    </div>
  );
};

export default DetailsSection;
