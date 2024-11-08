import styles from "./navBar.module.css";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {
  return (
    <div
      className={`${styles.container} shadow p-3 mb-3 bg-body-tertiary rounded`}
    >
      <div className={styles.iconDev}>
        <button className={`${styles.iconButton}`}>
          <FaArrowLeft className={styles.svgIcon} />
        </button>
      </div>
      <div className={styles.buttonDev}>
        <button
          className={`${styles.buttonElement} ${styles.buttonElementBg1} btn btn-light`}
        >
          Reading
        </button>
        <button
          className={`${styles.buttonElement} ${styles.buttonElementBg2} btn btn-light`}
        >
          Practice
        </button>
      </div>
      <div className={styles.profileDev}></div>
    </div>
  );
};
export default Navbar;
