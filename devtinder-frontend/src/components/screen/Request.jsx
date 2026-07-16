import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../../store/slices/requestSlice";
import { Avatar, Box, Button, Typography } from "@mui/material";

const Request = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) => state.request);

  const fetchReviewRequest = async (status, _id) => {
    try {
      await axios.post(
        "http://localhost:3000/review/request/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        },
      );
      dispatch(removeRequest(_id));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRequest = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/user/request/received",
        {
          withCredentials: true,
        },
      );
      console.log(res);
      dispatch(addRequest(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!request) {
    return (
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        No more connection request!
      </Box>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {request?.map((request) => (
        <Box
          key={request._id}
          sx={{
            width: "40vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}>
          <Avatar src={request.fromUserId.photoURL} />
          <Typography>{`${request.fromUserId.firstName} ${request.fromUserId.lastName}`}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button onClick={() => fetchReviewRequest("accepted", request._id)}>
              Accept
            </Button>
            <Button onClick={() => fetchReviewRequest("rejected", request._id)}>
              Reject
            </Button>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default Request;
