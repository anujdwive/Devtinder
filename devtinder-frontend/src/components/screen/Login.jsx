/* eslint-disable no-unused-vars */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { addUser } from "../../store/slices/authSlice.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("anuj2@gmail.com");
  const [password, setPassword] = useState("Anuj@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      console.log(res);
      dispatch(addUser(res.data));
      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
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
