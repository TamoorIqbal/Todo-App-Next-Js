import styles from "../styles/Home.module.css";
import Todo from "../components/Todo/Todo";
import React from "react";

export default function index() {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>TODO APP </h1>
      <Todo />
    </div>
  );
}
