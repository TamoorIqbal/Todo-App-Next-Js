import React from "react";
import styles from "../../styles/Todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCheck,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { type } from "os";
type TodoType = {
  date?: string;
  text: string;
  id?: string;
  status?: string;
};
const TodoList = (props: {
  todos: TodoType[];
  complete: TodoType[];
  onDeleteHandler: (item: TodoType) => void;
  onUpdateHandler: (item: TodoType) => void;
  onStatusHandler: (item: TodoType) => void;
}) => {
  return (
    <div>
      <ul className={styles.todo__list}>
        {props.todos.map((item) => {
          return (
            <li key={item.id} className={styles.todo__list__item}>
              <p>{item.text}</p>
              <p>{item.date}</p>
              <div className={styles.todo__list__options}>
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    onClick={() => {
                      props.onStatusHandler(item);
                    }}
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => props.onUpdateHandler(item)}
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => props.onDeleteHandler(item)}
                  />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <ul className={`${styles.todo__list} ${styles.todo__list__completed}`}>
        {props.complete.map((item) => {
          return (
            <li
              className={`${styles.todo__list__item} ${styles.todo__list__item__complete}`}
            >
              <p>{item.text}</p>
              <p>{item.date}</p>
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
