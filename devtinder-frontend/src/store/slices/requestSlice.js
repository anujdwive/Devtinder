import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequest: (state, actions) => {
      return actions.payload;
    },
    removeRequest: (state, actions) => {
      const requestRemove = state.filter((req) => req._id !== actions.payload);
      return requestRemove;
    },
  },
});

export const { addRequest, removeRequest } = requestSlice.actions;

export default requestSlice.reducer;
