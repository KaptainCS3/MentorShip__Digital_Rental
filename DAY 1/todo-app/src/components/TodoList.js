import React from "react";
//! hook to update redux state
import { useSelector } from "react-redux";
import Fade from "react-reveal";
import Todo from "./Todo";
import styles from "../styles/scroll.module.css";
const TodoList = () => {
  const listTodo = useSelector((state) => state.completeTask);
  const list = listTodo.map((e) => {
    return <Todo {...e} key={e.id} />;
  });
  return (
    <Fade>
      <div className={styles.scroll}>{list}</div>
    </Fade>
  );
};

export default TodoList;
