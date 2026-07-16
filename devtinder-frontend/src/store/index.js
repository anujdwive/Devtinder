import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import feedReducer from "./slices/feedSlice";
import connectionReducer from "./slices/connectionSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    feedUser: feedReducer,
    connection: connectionReducer,
  },
});

export default store;
