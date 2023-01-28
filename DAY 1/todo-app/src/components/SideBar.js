import React from "react";
import styles from "../styles/SideBar.module.css";
import avarta from "../assets/avarta__img.jpg";
import TaskFilter from "./TaskFilter";
const SideBar = () => {
  return (
    <section className={styles.NavBar}>
      <nav>
        <div className="flex w-6/4 justify-evenly m-[0.75em] border-b-2 border-b-[#ca8bfe] pb-8">
          <img
            src={avarta}
            alt=""
            className="rounded-full h-[50px] w-[50px] flex justify-center align-center"
          />
          <span className="text-xl text-gray-400">Do it</span>
        </div>
        <TaskFilter />
      </nav>
    </section>
  );
};

export default SideBar;
