import { useEffect, useRef, useState } from "react";
import styles from "./TodoSection.module.css";
import TodoList from "./TodoList";
import About from "./About";

let TodoSection = ({ userName }) => {
  const [greeting, setGreeting] = useState("");
  let todoItem = useRef();
  let [toGetDay, setToGetDay] = useState("");
  let [todoList, setTodoList] = useState([]);

  useEffect(() => {
    let daysName = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let setDay = new Date().getDay();
    setToGetDay(daysName[setDay]);
  }, []);

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hours = now.getHours();

      if (hours >= 5 && hours < 12) {
        setGreeting("Morning");
      } else if (hours >= 12 && hours < 17) {
        setGreeting("Afternoon");
      } else if (hours >= 17 && hours < 21) {
        setGreeting("Evening");
      } else {
        setGreeting("Night");
      }
    };
    updateGreeting();
    const intervalId = setInterval(updateGreeting, 3600000);
    return () => clearInterval(intervalId);
  }, []);

  let enterbtnHandler = () => {
    let getTodo = todoItem.current.value.trim();
    if (getTodo != "") {
      let getCapital = getTodo.charAt(0).toUpperCase() + getTodo.slice(1);
      setTodoList([getCapital, ...todoList]);
      console.log(todoList);
    }
    todoItem.current.value = "";
  };
  let inputHandler = (e) => {
    if (e.key === "Enter") {
      enterbtnHandler();
    }
  };
  let deleteHandler = (idx) => {
    let newList = todoList.filter((item, index) => index != idx);
    setTodoList(newList);
  };

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <h1 className={styles.heading}>
          Good {greeting} {userName}
        </h1>
        {todoList.length == 0 ? (
          <About />
        ) : (
          <TodoList
            toGetDay={toGetDay}
            todoList={todoList}
            deleteHandler={deleteHandler}
          />
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Todo"
          onKeyUp={inputHandler}
          ref={todoItem}
        />
        <button onClick={enterbtnHandler} className={styles.enterBtn}>
          Enter
        </button>
      </div>
    </div>
  );
};
export default TodoSection;
