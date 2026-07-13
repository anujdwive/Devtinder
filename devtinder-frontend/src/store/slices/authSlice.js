/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, actions) => {
      return actions.payload;
    },
    removeUser: (state, actions) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
