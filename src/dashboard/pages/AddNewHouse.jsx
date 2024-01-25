import React, { useState } from "react";
import ManageHouseForms from "../../components/forms/ManageHouseForms";
import axios from "axios";
import Swal from "sweetalert2";

const AddNewHouse = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (FormData) => {
    // console.log()
    try {
      setIsLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/properties",
        FormData
      );

      setIsLoading(false);

      console.log(response)
    
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your have successfully saved data",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setIsLoading(false);

      console.error("Error sending data to backend", error);
    }
  };

  return (
    <div>
      <div className="mx-2 md:mx-0 p-5 border shadow-lg rounded-lg">
        <ManageHouseForms onSave={handleSave} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default AddNewHouse;
