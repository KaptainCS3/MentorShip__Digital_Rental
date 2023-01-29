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
      const index = state.id.findIndex((completeTask) => completeTask.id === action.payload);
      state.task.splice(index, 1);
    },
  },
});

export const { addTask, removeTask } = TodoComplete.actions;
export default TodoComplete.reducer;
