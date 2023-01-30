import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todos/todoSlice";
//! create a reducer store for app global state
export const store = configureStore({
  reducer: {
    completeTask: todoReducer,
  },
});

