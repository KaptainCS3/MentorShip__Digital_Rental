import { faCheck, faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removeTask } from "../features/Todos/todoSlice";
import React from "react";

const Todo = (props) => {
  // console.log();
  const dispatch = useDispatch();
  const handleClick = () => dispatch(removeTask(props.completeTask.id));
  return (
    <section className="mt-2 mb-12 mr-2">
      <div className="flex rounded-[.75em] bg-[#fff] h-[45px] shadow-none">
        <div className="flex flex-row justify-between w-full items-center px-8">
          <div>{props.todos.task}</div>
          <section className="flex w-[15%] justify-between">
            <div>
              <FontAwesomeIcon
                icon={faCheck}
                className="cursor-pointer text-green-600"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className="cursor-pointer text-red-600"
                onClick={handleClick}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPen}
                className="cursor-pointer text-[#717082]"
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Todo;
