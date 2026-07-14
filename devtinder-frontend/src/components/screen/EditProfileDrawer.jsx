import { Box, TextareaAutosize, TextField } from "@mui/material";
import DynamicDrawer from "../layout/UI/drawer/DynamicDrawer";
import { useState } from "react";

const EditProfileDrawer = ({ open, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [about, setAbout] = useState("");
  const handleUpdate = () => {};
  return (
    <DynamicDrawer
      open={open}
      onClose={handleClose}
      title='Edit Profile'
      primaryText='Update'
      customWidth={500}>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}>
          <TextField
            label={"First Name"}
            size='small'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label={"Last Name"}
            size='small'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <TextField
          sx={{ marginTop: 2 }}
          fullWidth
          size='small'
          label='Photo URL'
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <TextareaAutosize
          aria-label='minimum height'
          minRows={3}
          placeholder='About yourself'
          style={{ width: 200, marginTop: 5 }}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </Box>
    </DynamicDrawer>
  );
};

export default EditProfileDrawer;
