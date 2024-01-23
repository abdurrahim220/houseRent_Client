import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypesSection from "./TypesSection";
const NewManageForm =  ({ onSave, isLoading })  => {
  const formMethods = useForm();

  const { handleSubmit, reset, getValues } = formMethods;

  const onSubmit = (formDataJson) => {
    const formData = new FormData();

    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("address", formDataJson.address);
    formData.append("description", formDataJson.description);
    formData.append("rent", formDataJson.rent);
    formData.append("bedrooms", formDataJson.bedrooms.toString());
    formData.append("bathrooms", formDataJson.bathrooms.toString());
    formData.append("phoneNumber", formDataJson.phoneNumber.toString());
    formData.append("availability", formDataJson.availability.toString());
    formData.append("roomSize", formDataJson.roomSize.toString());

    // Array.from(formDataJson.imageFiles).forEach((imageFile) => {
    //   formData.append(`imageFiles`, imageFile);
    // });

    // if (formDataJson.imageUrls) {
    //   formDataJson.imageUrls.forEach((url, index) => {
    //     formData.append(`imageUrls[${index}]`, url);
    //   });
    // }

    onSave(formData);
  };

  return (
    <div>
      <FormProvider {...formMethods}>
        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <DetailsSection />
          <TypesSection />

          {/* <ImageFields /> */}
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
      </FormProvider>
    </div>
  );
};

export default NewManageForm;
