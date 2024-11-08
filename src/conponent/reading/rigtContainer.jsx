import { useState } from "react";
import styles from "./rigtContainer.module.css";
import CountdownTimer from "./timer.jsx";

const RightContainer = () => {
  let [initialVal, setVal] = useState("0");
  const oneClickHundleStart = () => {
    setVal("1");
  };
  const oneClickHundleStop = () => {
    setVal("0");
  };
  const oneClickHundleBreak = () => {
    setVal("2");
  };
  return (
    <div className={`${styles.rightContainer} shadow`}>
      {initialVal == "2" && <CountdownTimer></CountdownTimer>}
      {initialVal == "1" && (
        <div className={styles.btnContainer}>
          <button
            type="button"
            className={`${styles.btnCommon} btn btn-danger`}
            onClick={oneClickHundleStop}
          >
            Stop
          </button>
          <button
            type="button"
            className={`${styles.btnCommon} btn btn-warning`}
            onClick={oneClickHundleBreak}
          >
            Take Break
          </button>
        </div>
      )}
      {initialVal == "0" && (
        <>
          <select className={`${styles.from} form-select`} aria-label="Subject">
            <option selected>Subject</option>
            <option value="1">Physics</option>
            <option value="2">Chemistry</option>
            <option value="3">Math</option>
          </select>
          <select className={`${styles.from} form-select`} aria-label="Chapter">
            <option selected>Chapter</option>
            <option value="1">Physics</option>
            <option value="2">Chemistry</option>
            <option value="3">Math</option>
          </select>
          <button
            type="button"
            className={`${styles.btnStart} btn btn-success`}
            onClick={oneClickHundleStart}
          >
            Start
          </button>
        </>
      )}
    </div>
  );
};
export default RightContainer;
