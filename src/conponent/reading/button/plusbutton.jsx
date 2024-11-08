import styles from "./plusbutton.module.css";

const PlusButton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btnPlus}>+</button>
    </div>
  );
};
export default PlusButton;
