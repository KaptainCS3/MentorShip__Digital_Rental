import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//! hook to pass reducer function to component
import { useDispatch } from "react-redux";
import {  removeTask } from "../features/Todos/todoSlice";
import React, { useState } from "react";
import Slide from "react-reveal";

const Todo = (props) => {
  const dispatch = useDispatch();

  //! mark complete task 
  const [mark, setMark] = useState(props.isComplete);
  //! event handler mark task done
  const handleMark = () => {
    setMark((prevMark) => {
      return !prevMark;
    });
  };
  //! remove task from Todolist handler
  const handleRemove = () => dispatch(removeTask({ id: props.id }));

  return (
    <Slide left>
    <section className="mt-2 mb-12 mr-2">
      <div className="flex rounded-[.75em] bg-[#fff] h-[auto] min-h-[2.8em] shadow-none">
        <div className="flex flex-row justify-between w-full items-center px-8">
          {/* //! ternary operator condition check */}
          <div style={{ textDecoration: mark ? "line-through" : "" }}>
            {props.task}
          </div>
          <section className="flex w-[15%] justify-between">
            <div>
              <FontAwesomeIcon
                icon={faCheck}
                className="cursor-pointer text-green-600"
                onClick={handleMark}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className="cursor-pointer text-red-600"
                onClick={handleRemove}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
    </Slide>
  );
};

export default Todo;
