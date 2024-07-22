import styles from "./NameArea.module.css";

let NameArea = ({ getName, handleNameSubmit, enterHandler }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>To use Todo...</h1>
      <input
        onKeyUp={enterHandler}
        className={styles.inputArea}
        placeholder="Enter your Name"
        type="text"
        ref={getName}
      />
      <button className={styles.btnSubmit} onClick={() => handleNameSubmit()}>
        Submit
      </button>
    </div>
  );
};
export default NameArea;
