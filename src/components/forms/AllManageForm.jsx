import React, { useEffect } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypesSection from "./TypesSection";

const AllManageForm = ({ isHouse, onSave, isLoading }) => {
  const formMethods = useForm();

  const { handleSubmit, reset, getValues } = formMethods;

  useEffect(() => {
    reset(isHouse);
  }, [isHouse, reset]);

  const onSubmit = (data) => {
    const formData = getValues();

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
              {isLoading ? "Updating.." : "Update"}
            </button>
          </span>
        </form>
      </FormProvider>
    </div>
  );
};

export default AllManageForm;
