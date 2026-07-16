import axios from "axios";
import React, { useEffect } from "react";

const Request = () => {
  const fetchRequest = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/user/request/received",
        {
          withCredentials: true,
        },
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  });

  return <div>Request</div>;
};

export default Request;
