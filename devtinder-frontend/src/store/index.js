import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import feedReducer from "./slices/feedSlice";
import connectionReducer from "./slices/connectionSlice";
import requestReducer from "./slices/requestSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    feedUser: feedReducer,
    connection: connectionReducer,
    request: requestReducer,
  },
});

export default store;
