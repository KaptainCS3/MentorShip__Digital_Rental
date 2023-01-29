import React from 'react'
import styles from "../styles/MainPanel.module.css"
import Todo from './Todo'
import TodoForm from './TodoForm'
const MainContainer = () => {
  return (
    <section className="w-[70%] bg-[#a18aff] rounded-tr-[0.5em] rounded-br-[0.5em] p-[2em]">
      <TodoForm />
    </section>
  );
}

export default MainContainer