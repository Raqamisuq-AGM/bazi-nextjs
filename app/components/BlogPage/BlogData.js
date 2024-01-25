"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogData() {
  const [content, setContent] = useState();
  const [isAdding, setIsAdding] = useState(false);

  const getAgent = async () => {
    setIsAdding(true);
    const response = await axios
      .post("/api/blog/edit-data")
      .then(function (response) {
        setIsAdding(false);
        //console.log(response.data.data);
        setContent(response.data.data);
      })
      .catch(function (error) {
        // //console.log(error);
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

  return (
    <div className="customer-rules bg-white text-black text-left">
      <div className="page-heading text-center p-5 col">
        <h1>{content && content.title}</h1>
        <p>{content && content.subTitle}</p>
      </div>
      <div
        className="page-content p-5 col"
        dangerouslySetInnerHTML={{ __html: content && content.content }}
      />
    </div>
  );
}
