import React from 'react'
import styles from "../styles/MainPanel.module.css"
import Todo from './Todo'
import TodoForm from './TodoForm'
const MainContainer = () => {
  return (
    <section className={styles.container}>
        <TodoForm />
        <Todo />
    </section>
  )
}

export default MainContainer