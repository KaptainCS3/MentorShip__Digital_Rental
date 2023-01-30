import React from "react";
import TodoForm from "./TodoForm";
import { useDispatch } from "react-redux";
import { clearTask } from "../features/Todos/todoSlice";
const MainContainer = () => {
  const dispatch = useDispatch();
  const handleClear = () => dispatch(clearTask());
  return (
    <section className="w-[70%] bg-[#a18aff] rounded-tr-[0.5em] rounded-br-[0.5em] p-[2em] main__width">
      //! todo form component 
      <TodoForm />
      //! clear function from todoSlice reducer
      <div
        className="flex justify-center items-center mt-4"
        onClick={handleClear}
      >
        <button
          onClick={handleClear}
          className="inline-block px-4 h-[44px] bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-[.75em] shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Clear
        </button>
      </div>
    </section>
  );
};

export default MainContainer;
