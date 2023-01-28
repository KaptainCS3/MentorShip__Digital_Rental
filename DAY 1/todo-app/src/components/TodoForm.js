import React from "react";
import styles from "../styles/TodoForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock} from "@fortawesome/free-solid-svg-icons";
const TodoForm = () => {
  return (
    <div className="p-[2em]">
      <h1 className="text-3xl text-white">Today's Main Focus</h1>
      <form action="#" className={styles.form__container}>
        <div className="flex z-[3] rounded-[.75em] bg-[#fff] h-[44px] w-[638px] max-w-[584px] w-auto m-[0 auto] shadow-none">
          <div className="flex flex-1 basis-1 shrink grow flex-wrap">
            <input
              type="text"
              className={styles.input__form}
              placeholder="What is your next task?"
              name="todo__input"
            />
          </div>
          <span className="flex justify-evenly w-[15%]">
            <FontAwesomeIcon
              icon={faClock}
              className="inline-block cursor-pointer text-[#ca8bfe]"
            />
            <FontAwesomeIcon
              icon={faCalendar}
              className="inline-block cursor-pointer text-[#ca8bfe]"
            />
          </span>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
