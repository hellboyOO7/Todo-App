import styles from "./TodoList.module.css";
import { MdDeleteForever } from "react-icons/md";

let TodoList = ({ todoList, deleteHandler, toGetDay }) => {
  return (
    <ul className={`${styles.listContainer} `}>
      {todoList.map((item, idx) => {
        return (
          <li className={`${styles.listItem} `} key={idx}>
            {item}
            <div className={styles.dltConatiner}>
              <p className={styles.paraDays}>{toGetDay}</p>
              <MdDeleteForever
                onClick={() => {
                  deleteHandler(idx);
                }}
                className={styles.dltBtn}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
