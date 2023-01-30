import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todos/todoSlice";
export const store = configureStore({
  reducer: {
    completeTask: todoReducer,
  },
});

