"use client";
import { useState, useEffect } from "react";
import CommonComponent from "./CommonComponent";
import axios from "axios";

export default function CommonSection() {
  const [content, setContent] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const [HomeData, setHomeData] = useState([]);

  const getAgentData = async () => {
    setIsAdding(true);
    const response = await axios
      .post("/api/home/table", {
        id: "fea",
      })
      .then(function (response) {
        setIsAdding(false);
        setHomeData(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        setIsAdding(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getAgentData();
  }, []);

  return (
    <>
      {!isAdding && HomeData && HomeData.length > 0 ? (
        HomeData.map((item, index) => {
          return (
            <section key={index} className="how-to-create-account py-5">
              <CommonComponent
                firstA={""}
                lastA={""}
                title={item.title}
                body={item.content}
              />
            </section>
          );
        })
      ) : (
        <div className="text-center py-5">Loading...</div>
      )}
    </>
  );
}
