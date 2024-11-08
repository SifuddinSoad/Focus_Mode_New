import styles from "./minusbutton.module.css";

const MinusButton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btnMinus}>-</button>
    </div>
  );
};
export default MinusButton;
