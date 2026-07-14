import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import feedReducer from "./slices/feedSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    feedUser: feedReducer,
  },
});

export default store;
