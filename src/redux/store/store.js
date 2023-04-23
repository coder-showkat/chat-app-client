import { configureStore } from "@reduxjs/toolkit";
import chatListReducer from "../features/chatSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
    name: "user",
    reducer: {
        userReducer,
        chatListReducer,
    },
});

export default store;