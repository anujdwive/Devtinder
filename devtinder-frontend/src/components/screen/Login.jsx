/* eslint-disable no-unused-vars */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { addUser } from "../../store/slices/authSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("anuj2@gmail.com");
  const [password, setPassword] = useState("Anuj@123");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      // login API

      await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      // profile API

      const profile = await axios.get("http://localhost:3000/profile", {
        withCredentials: true,
      });

      // store user

      dispatch(addUser(profile.data.data));

      // move dashboard

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Box>Login</Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}>
        <TextField
          label={"Email"}
          size='small'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label={"Password"}
          size='small'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained' onClick={handleLogin}>
          Login
        </Button>
        {/* <Button size='small'>Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
