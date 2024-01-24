import React, { useEffect, useState } from "react";
import AllManageForm from "../../components/forms/AllManageForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const EditHouse = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isHouse, setIsHouse] = useState([]);

  useEffect(() => {
    const fetchHouseData = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          `https://househunter-a83p.onrender.com/api/properties/${id}`
        );

        setIsHouse(response.data);
      } catch (error) {
        console.error("Error fetching house data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHouseData();
  }, [id]);

  const handleSave = async (FormData) => {
    try {
      setIsLoading(true);

      const response = await axios.put(
        `https://househunter-a83p.onrender.com/api/properties/${id}`,
        FormData
      );

      setIsHouse(response.data);

      setIsLoading(false);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your have successfully updated data",
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
        <AllManageForm
          isHouse={isHouse}
          onSave={handleSave}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default EditHouse;
