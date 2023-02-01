//! create action and state reducer function
import { createSlice } from "@reduxjs/toolkit";

//! initial todo state object array
const initialState = [
  {
    id: "1",
    task: "Study Array methods and Redux toolkit",
    isComplete: false,
  },
  {
    id: "2",
    task: "Look up the Doc and play soccer",
    isComplete: false,
  },
  {
    id: "3",
    task: "Taking a break at 4:30 PM after long hours of coding",
    isComplete: false,
  },
];

const TodoComplete = createSlice({
  name: "completeTask",
  initialState,
  reducers: {
    //! Add todos
    addTask(state, action) {
      state.unshift(action.payload);
    },
    //! Remove todos
    removeTask(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    //! Mark complete todos
    // markComplete(state, action) {
    //   state.isComplete = action.payload;
    // },
    //! Clear todos
    clearTask(state) {
      state = [];
      return state;
    },
  },
});

//! Export reducer functions
export const { addTask, removeTask, markComplete, clearTask } =
  TodoComplete.actions;
export default TodoComplete.reducer;
