import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    task: "Study Array methods and Redux toolkit",
  },
  {
    id: "2",
    task: "Look up the Doc and play soccer",
  },
];

const TodoComplete = createSlice({
  name: "completeTask",
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    removeTask(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, removeTask } = TodoComplete.actions;
export default TodoComplete.reducer;
