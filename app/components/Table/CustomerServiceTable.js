"use client";

import Table from "../Common/Table";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CustomerServiceTable() {
  const [AgentData, setAgentData] = useState();

  const getAgentData = async () => {
    const response = await axios
      .post("/api/agent/table", {
        type: "customer",
      })
      .then(function (response) {
        setAgentData(response.data.data);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  useEffect(() => {
    // Fetch initial data
    getAgentData();

    // Set up interval to fetch data every 10 minutes
    const intervalId = setInterval(() => {
      getAgentData();
    }, 10 * 60 * 1000); // 10 minutes in milliseconds

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const header = [
    "Type",
    "Name",
    "Agent ID No",
    "Phone App Link",
    "Phone Number",
    "Complain",
  ];
  return <Table header={header} trData={AgentData} />;
}
