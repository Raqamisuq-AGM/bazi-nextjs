"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AccountCreateData() {
  const [content, setContent] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const getAgent = async () => {
    setIsAdding(true);
    const response = await axios
      .post("/api/account/edit-data")
      .then(function (response) {
        setIsAdding(false);
        console.log(response.data.data);
        setContent(response.data.data);
      })
      .catch(function (error) {
        // console.log(error);
        setIsAdding(false);
        toast.error("Something went wrong! Please try again later.", {
          position: "bottom-left",
          autoClose: 20000,
          hideProgressBar: true,
          pauseOnHover: true,
        });
      });
  };

  useEffect(() => {
    getAgent();
  }, []);

  return <div>AccountCreateData</div>;
}
