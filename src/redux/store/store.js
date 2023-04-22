import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

const store = configureStore({
    name: "user",
    reducer: userReducer,
});

export default store;