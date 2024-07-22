import styles from "./About.module.css";

let About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.paraAbout}>
        Welcome to Todo App, your go-to destination for organizing your life and
        boosting productivity. Our mission is to provide you with a simple yet
        powerful tool to manage your tasks, set priorities, and achieve your
        goals effortlessly. Whether you're a busy professional, a student, or
        someone who loves to stay organized, our intuitive interface and
        customizable features are designed to adapt to your unique workflow.
        Join our community and take control of your time today!
      </p>
    </div>
  );
};
export default About;
