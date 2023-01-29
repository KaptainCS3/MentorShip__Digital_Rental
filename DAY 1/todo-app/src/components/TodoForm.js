import React, { useState, useRef } from "react";
import styles from "../styles/TodoForm.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask} from "../features/Todos/todoSlice";
import TodoList from "./TodoList";
const TodoForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    todoInput: "",
    isDone: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };

  const input = useRef();
  // console.log(input);
  const addTodo = () => {
    if (!input.current.value) {
      // input.style.borderColor = "#f96262";
      // input.style.display = "block";
      // input.innerHTML = "Please enter a todo";
      alert("Please enter a todo item");
      return false;
    }
    dispatch(
      addTask({
        id: nanoid(),
        task: task.todoInput,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl text-white">Today's Main Focus</h1>
      <form
        action="#"
        className={styles.form__container}
        onSubmit={handleSubmit}
      >
        <div className="flex z-[3] rounded-[.75em] bg-[#fff] h-[44px] shadow-none w-4/5">
          <div className="flex flex-1 basis-1 shrink grow">
            <input
              type="text"
              className={styles.input__form}
              placeholder="What is your next task?"
              name="todoInput"
              onChange={handleChange}
              value={task.todoInput}
              ref={input}
            />
          </div>
        </div>
        <button
          onClick={addTodo}
          class="inline-block px-4 h-[44px] bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-[.75em] shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Task
        </button>
      </form>
      <TodoList task={task} />
    </div>
  );
};

export default TodoForm;
