import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Todo.module.css";
import TodoList from "./TodoList";

type TodoType = {
  date?: string;
  text: string;
  id?: string;
  status?: string;
};
const Todo = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: "1",
      date: "25/11/2022",
      text: "sleep",
      status: "inQueue",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [complete, setComplete] = useState<TodoType[]>([
    {
      id: "0",
      date: "25/11/2022",
      text: "Eat",
      status: "complete",
    }
  ]);
  const [oldItem, setOldItem] = useState<TodoType>({
    id: "1",
    date: "25/11/2022",
    text: "sleep",
    status: "inQueue",
  });

  const onClickHandler = () => {
    if (!input) {
      alert(" Enter todo task.....");
    } else {
      let newTodo = {
        id: (todos.length + 1).toString(),
        date: new Date().toLocaleDateString(),
        text: input,
        status: "inQueue",
      };
      setTodos([newTodo, ...todos]);
      setInput("");
    }
  };
  const onDeleteHandler = (item: TodoType) => {
    let filterTodo = todos.filter((todo) => {
      if (todo.id != item.id) {
        return todo;
      }
    });
    setTodos(filterTodo);
  };
  const onUpdateHandler = (item: TodoType) => {
    setInput(item.text);
    setIsUpdate(true);
    setOldItem(item);
    console.log(oldItem);
  };
  const onEditHandler = () => {
    let updatedItem = {
      id:oldItem.id,
      text: input,
      date:oldItem.date,
      status:oldItem.status,
    };
    let updatedTodos = todos.map((todo) => {
      if (oldItem.id == todo.id) {
        return updatedItem;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
    setIsUpdate(false);
    setInput("");
  };

  const onStatusHandler = (item: TodoType): any => {
    // var updateStatus = todos.map((items) =>
    //   items.id == item.id ? { ...items, status: "complete" } : items
    // );
    let filterTodo = todos.filter((todo) => {
      if (todo.id != item.id) {
        return todo;
      } else {
        setComplete([...complete, { ...todo, status: "complete" }]);
      }
    });
    setTodos(filterTodo);
  };

  return (
    <div className={styles.app}>
      <div className={styles.todo__input}>
        <input
          type="text"
          value={input}
          placeholder="Add a task here..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        {isUpdate ? (
          <button onClick={onEditHandler}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        ) : (
          <button onClick={onClickHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}
      </div>
      <TodoList
        todos={todos}
        complete={complete}
        onDeleteHandler={onDeleteHandler}
        onUpdateHandler={onUpdateHandler}
        onStatusHandler={onStatusHandler}
      />
    </div>
  );
};

export default Todo;
