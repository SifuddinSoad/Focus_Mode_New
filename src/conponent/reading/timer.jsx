import styles from "./timer.module.css";
import PlusButton from "./button/plusbutton.jsx";
import MinusButton from "./button/minusbutton.jsx";
import { useState } from "react";

const CountdownTimer = () => {
  let [initialVal, setVal] = useState(0);

  const oneClickHundlePlus = () => {
    let value = initialVal;
    setVal(value + 1);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hour}>
          <div className={`${styles.inputCommon} ${styles.right}`}>
            <PlusButton></PlusButton>
            <input
              type="text"
              value={initialVal}
              disabled
              className={styles.inputElement}
            />
            <MinusButton></MinusButton>
          </div>
          <div className={styles.inputCommon}>
            <PlusButton></PlusButton>
            <input
              type="text"
              value={initialVal}
              disabled
              className={styles.inputElement}
            />
            <MinusButton></MinusButton>
          </div>
        </div>
        <div className={styles.minites}>
          <div className={styles.inputCommon}>
            <PlusButton></PlusButton>
            <input
              type="text"
              value={initialVal}
              disabled
              className={styles.inputElement}
            />
            <MinusButton></MinusButton>
          </div>
          <div className={styles.inputCommon}>
            <PlusButton></PlusButton>
            <input
              type="text"
              value={initialVal}
              disabled
              className={styles.inputElement}
            />
            <MinusButton></MinusButton>
          </div>
        </div>
        <div className={styles.secands}>
          <div className={styles.inputCommon}>
            <PlusButton></PlusButton>
            <input
              type="text"
              value={initialVal}
              disabled
              className={styles.inputElement}
            />
            <MinusButton></MinusButton>
          </div>
          <div className={`${styles.inputCommon} ${styles.right}`}>
            <PlusButton></PlusButton>
            <input
              type="text"
              value={initialVal}
              disabled
              className={styles.inputElement}
            />
            <MinusButton></MinusButton>
          </div>
        </div>
      </div>
      <div className={styles.buttonBreak}>
        <button type="button" className={`${styles.btnBreak} btn btn-warning`}>
          Take Break
        </button>
      </div>
    </>
  );
};

export default CountdownTimer;
