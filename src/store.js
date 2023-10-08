/* eslint-disable no-undef */
import todoReducer from "./slices/todoSlice.js";
import { configureStore } from "@reduxjs/toolkit";


//now we will not create we will config store


const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
