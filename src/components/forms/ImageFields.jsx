import { useFormContext } from "react-hook-form";

const ImageFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // You can perform additional checks here if needed

    // Set the value of the imageFiles field
    register("imageFiles").onChange(selectedFile);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Images</h2>
      <input
        type="file"
        accept="image/*"
        className="w-full text-gray-700 font-normal"
        {...register("imageFiles", {
          required: "This field is required",
        })}
        onChange={handleFileChange}
      />
      {errors.imageFiles?.message && (
        <span className="text-red-500 text-sm font-bold">
          {errors.imageFiles?.message}
        </span>
      )}
    </div>
  );
};

export default ImageFields;
