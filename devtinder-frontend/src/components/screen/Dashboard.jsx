/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/slices/authSlice";
import { addFeedUser } from "../../store/slices/feedSlice";
import Profile from "./Profile";
import { Box } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const feedUser = useSelector((state) => state.feedUser);
  const navigate = useNavigate();
  const fetchFeedUserProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/feed",

        {
          withCredentials: true,
        },
      );
      console.log(res);
      dispatch(addFeedUser(res.data.data));
    } catch (error) {
      console.error(error);
      // ✅ If token expired or unauthorized
      if (error.response && error.response.status === 401) {
        navigate("/login", { replace: true });
      }
    }
  };

  useEffect(() => {
    fetchFeedUserProfile();
  }, []);
  console.log(feedUser);

  return (
    <Box sx={{ height: "80vh", overflow: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
        {feedUser?.map((user) => (
          <Box key={user._id}>
            <Profile user={user} isOwnProfile={false} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
