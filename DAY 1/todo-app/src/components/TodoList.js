import React from 'react'
import {useSelector} from "react-redux"
import Todo from './Todo';
import styles from "../styles/scroll.module.css"
const TodoList = () => {
  const listTodo = useSelector((state) => state.completeTask);
  const list = listTodo.map((e)=>{
    return (
      <Todo todos={e} key={e.id}/>
    )
  })
  return (
      <div className={styles.scroll}>
        {list}
      </div>
  );
}

export default TodoList