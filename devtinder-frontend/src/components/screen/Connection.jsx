import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../../store/slices/connectionSlice";
import { Avatar, Box, Button, Typography } from "@mui/material";

const Connection = () => {
  const connection = useSelector((state) => state.connection);
  const dispatch = useDispatch();
  const fetchConnection = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user/connections", {
        withCredentials: true,
      });

      console.log(res.data.data);

      // ✅ FIX HERE
      dispatch(addConnection(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  console.log(connection);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {connection.map((connection) => (
        <Box
          key={connection._id}
          sx={{
            width: "40vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}>
          <Avatar src={connection.photoURL} />
          <Typography>{`${connection.firstName} ${connection.lastName}`}</Typography>
          <Button>Message</Button>
        </Box>
      ))}
    </div>
  );
};

export default Connection;
