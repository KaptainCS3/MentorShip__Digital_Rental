import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: counterReducer,
});

const increment = () => {
  return {
    type: "counter/increment",
  };
};
store.dispatch({ type: "counter/increment" });
store.getState();

export default store;
