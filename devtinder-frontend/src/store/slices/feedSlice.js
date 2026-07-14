/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feedUser",
  initialState: null,
  reducers: {
    addFeedUser: (state, actions) => {
      return actions.payload;
    },
    removeFeedUser: (state, actions) => {
      return null;
    },
  },
});

export const { addFeedUser, removeFeedUser } = feedSlice.actions;

export default feedSlice.reducer;
